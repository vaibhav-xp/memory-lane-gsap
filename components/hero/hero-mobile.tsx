"use client";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import HeroImageFrame from "./image-frame";

export default function HeroMobile() {
  useGSAP(() => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.from(".header-mob__content__middle__animate--top", {
      y: -30,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      stagger: 0.3,
    });

    gsap.from(".header-mob__content__middle__animate--bottom", {
      y: 30,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      stagger: 0.3,
      delay: 0.5,
    });

    gsap.from(".hero-mobile-tree-1", {
      opacity: 0,
      y: 20,
      duration: 3,
    });

    gsap.from(".hero-frame-mobile-1", {
      opacity: 0,
      rotate: 0,
      x: 240,
      y: 120,
      scale: 0.5,
      duration: 2,
    });
    gsap.from(".hero-frame-mobile-2", {
      opacity: 0,
      rotate: 0,
      x: -120,
      y: 150,
      scale: 0.5,
      duration: 2,
    });
    gsap.from(".hero-frame-mobile-3", {
      opacity: 0,
      x: 50,
      y: 150,
      scale: 0.5,
      duration: 2,
    });

    // Tree Animation Timeline
    const tree2tl = gsap.timeline({ repeat: -1, yoyo: true });
    tree2tl
      .to(".hero-mobile-tree-1", {
        rotate: 20,
        duration: 3,
        ease: "power2.inOut",
      })
      .to(".hero-desktop-tree-1", {
        rotate: 0,
        duration: 3,
        ease: "power2.inOut",
      })
      .to(".hero-desktop-tree-1", {
        rotate: -10,
        duration: 2,
        ease: "power2.inOut",
      });

    // Square Animation
    gsap.from(".hero-mobile-square", {
      duration: 2,
      scale: 0.5,
      motionPath: {
        path: "#hero-line-top-right-path-mob",
        align: "#hero-line-top-right-path-mob",
        start: 0.5,
        end: 0,
      },
      ease: "sine.inOut",
    });

    gsap.from(".hero-mob-grass", {
      duration: 3,
      y: 50,
      scale: 0,
    });
  }, []);

  return (
    <section className="container hero-desktop">
      <div className="hero-desktop_content">
        <div className="header-desk__content__middle header-desk__content__middle--mobile">
          <p className="header-mob__content__middle__animate--top">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <h1 className="header-mob__content__middle__animate--top">
            Celebrate <span>love</span>, Share joy
          </h1>
          <p className="header-mob__content__middle__animate--bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link
            href={"/"}
            className="btn header-mob__content__middle__animate--bottom"
          >
            Get Started
          </Link>
        </div>
      </div>

      <HeroImageFrame
        text="Celebration of union"
        image="/assets/hero-frame-img-1.webp"
        className="hero-frame-mobile-1"
      />
      <HeroImageFrame
        text="Cherish Memories"
        image="/assets/hero-frame-img-2.webp"
        className="hero-frame-mobile-2"
      />
      <HeroImageFrame
        text="Blissful Journey"
        image="/assets/hero-frame-img-3.webp"
        className="hero-frame-mobile-3"
      />

      <Image
        src={"/assets/hero-grass.svg"}
        alt="line-overlay"
        width={111}
        height={55}
        className="hero-mob-grass"
      />

      <Image
        src={"/assets/hero-tree-1.svg"}
        alt="line-overlay"
        width={108}
        height={153}
        className="hero-mobile-tree-1"
      />

      {/* Line*/}
      <svg
        width="514"
        height="132"
        viewBox="0 0 514 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-line-top-right-mob"
      >
        <path
          id="hero-line-top-right-path-mob"
          d="M1.27344 0C1.92814 6.54705 7.1524 13.2063 10.8853 18.4057C20.5059 31.8059 29.1139 46.2461 40.8456 57.9778C56.8095 73.9417 71.5952 83.8336 91.8702 93.9711C134.106 115.089 176.469 119.506 222.244 126.181C260.86 131.813 301.44 132.46 340.142 128.942C372.325 126.016 403.831 121.792 435.852 116.365C452.508 113.542 467.694 107.084 483.911 103.481C493.016 101.457 501.35 98.8866 510.088 95.7094C513.615 94.4267 520.87 93.7912 523.585 91.6193C527.727 88.3056 540.462 84.666 546.081 84.666"
          stroke="#BABABA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
      </svg>

      <Image
        src={"/assets/hero-square.svg"}
        alt="line-overlay"
        width={50}
        height={50}
        className="hero-mobile-square"
      />
    </section>
  );
}
