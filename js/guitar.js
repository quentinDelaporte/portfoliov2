import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

import { OBJLoader } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/loaders/OBJLoader.js';
import { DDSLoader } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/loaders/DDSLoader.js'
import { MTLLoader } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/loaders/MTLLoader.js';


let camera, scene, renderer;
let loaded = false;
let direction = "d";
let lastScrollPosition = 0;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(45, 250 / document.documentElement.clientHeight, 1, 2000);
    camera.position.z = 15;
    camera.position.x = -1;
    camera.position.y = -1;
    // scene

    scene = new THREE.Scene();

    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    camera.add(pointLight);
    scene.add(camera);

    // model

    const onProgress = function(xhr) {
        if (xhr.lengthComputable) {
            loaded = (xhr.loaded / xhr.total) == 1
            const percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }

    };

    const onError = function() {};

    const manager = new THREE.LoadingManager();
    manager.addHandler(/\.dds$/i, new DDSLoader());

    new MTLLoader(manager)
        .setPath('../model/')
        .load('GuitarObj.mtl', function(materials) {

            materials.preload();

            new OBJLoader(manager)
                .setMaterials(materials)
                .setPath('../model/')
                .load('GuitarObj2.obj', function(object) {
                    object.position.y = -5;
                    scene.add(object);
                    object.scale(new THREE.Vector3(3, 3, 3));
                }, onProgress, onError);

        });

    //

    renderer = new THREE.WebGLRenderer(({ alpha: true }));
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(250, document.documentElement.clientHeight);
    renderer.setClearColor(0x222222, 0);
    document.getElementById("guitar").appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

    camera.aspect = 250 / document.documentElement.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(250, document.documentElement.clientHeight);

}

function animate() {

    requestAnimationFrame(animate);
    render();

}

function render() {
    let x = camera.position.x;
    let z = camera.position.z;
    if (direction == "d") {
        camera.position.x = x * Math.cos(0.0125) + z * Math.sin(0.0125);
        camera.position.z = z * Math.cos(0.0125) - x * Math.sin(0.0125);
    } else {
        camera.position.x = x * Math.cos(0.0125) - z * Math.sin(0.0125);
        camera.position.z = z * Math.cos(0.0125) + x * Math.sin(0.0125);
    }
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}

document.onscroll = function(event) {

    if (window.scrollY < lastScrollPosition)
        direction = "u";
    else
        direction = "d";
    lastScrollPosition = window.scrollY;
};