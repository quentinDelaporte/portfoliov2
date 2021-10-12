import { gsap, TweenLite, TweenMax, TimelineLite, TimelineMax, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSRulePlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger);


ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
});

/* Main navigation */
const panelsSection = document.querySelector("#panels");
const panelsContainer = document.querySelector("#panels-container");
document.querySelectorAll(".anchor").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetElem = document.querySelector(e.target.getAttribute("href"));
        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
            const containerOffset = panelsSection.offsetTop + targetElem.offsetLeft;

            console.log(containerOffset);

            gsap.to(window, {
                scrollTo: {
                    y: containerOffset,
                    autoKill: false
                },
                duration: 1
            });
        } else {
            gsap.to(window, {
                scrollTo: {
                    y: targetElem,
                    autoKill: false
                },
                duration: 1
            });
        }
    });
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.1, max: 0.1 },
            directional: false,
        },
        end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
    }
});



const bodyScrollBar = Scrollbar.init(document.getElementById('scroll-container'), { damping: 0.1, delegateTo: document });

// Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element: 
ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
        if (arguments.length) {
            bodyScrollBar.scrollTop = value; // setter
        }
        return bodyScrollBar.scrollTop; // getter
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }
});

// when the smooth scroller updates, tell ScrollTrigger to update() too: 
bodyScrollBar.addListener(ScrollTrigger.update);