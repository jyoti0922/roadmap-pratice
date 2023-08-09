gsap.registerPlugin(ScrollTrigger);

const centerline = document.querySelector(".centerline");

gsap.from(centerline, {
  yPercent: -100,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: line,
  //     scrub: true,
  //     markers: true,
  //     start: "top top",
  //     end: "bottom bottom",
  //   },
});
