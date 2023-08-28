import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger separately

gsap.registerPlugin(ScrollTrigger);

export default function scrollAnimation(position, target, onUpdate) {
  const tl = gsap.timeline();

  tl.to(position, {
    x: -3.38,
    y: -10.74,
    z: -5.93,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom", // Corrected value: "top bottom"
      end: "top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: 1.52,
      y: 0.77,
      z: -1.08, // Added the missing dot for class selector
      opacity: 0,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom", // Corrected value: "top bottom"
        end: "top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".jumbotron-section", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom", // Corrected value: "top bottom"
        end: "top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".sound-section-content", {
      // Added the missing dot for class selector
      opacity: 1,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom", // Corrected value: "top bottom"
        end: "top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(position, {
      x: 1.56,
      y: 5.0,
      z: 0.01,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom", // Corrected value: "top bottom"
        end: "top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: -0.55,
      y: 0.32,
      z: 0.0, // Added the missing dot for class selector
      opacity: 0,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom", // Corrected value: "top bottom"
        end: "top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".display-section", {
      // Added the missing dot for class selector
      opacity: 1,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom", // Corrected value: "top bottom"
        end: "top",
        scrub: 2,
        immediateRender: false,
      },
    });
}