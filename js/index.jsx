import LocomotiveScroll from 'locomotive-scroll';

const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
});


// scroller.on('leaveGuitar', (instance) => {
//     console.log(instance.scroll.y);
// });

// scroll.on("leaveGuitar", (instance) => {
//     if (instance.scroll.y > 1200) {
//         clouds.style.transform = "rotate(90deg)";
//     } else {
//         clouds.style.transform = "rotate(0deg)";
//     }
// });