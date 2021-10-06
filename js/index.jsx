import LocomotiveScroll from 'locomotive-scroll';

const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// scroller.on('Fallguitar', func => {
//     console.log("Ok")
// });