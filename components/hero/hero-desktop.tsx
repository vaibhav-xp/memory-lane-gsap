import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import HeroImageFrame from "./image-frame";

export default function HeroDesktop() {
  useGSAP(() => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.from(".hero-desktop-leaf", {
      rotate: 50,
      opacity: 0,
      duration: 1.5,
      y: -300,
    });

    gsap.from(".hero-desktop-grass", {
      y: 80,
      duration: 1.5,
    });

    gsap.from(".hero-desktop-heart", {
      duration: 1,
      motionPath: {
        path: "#hero-line-top-left-path",
        align: "#hero-line-top-left-path",
        autoRotate: true,
        // start: 1,
        // end: 0.1,
      },
    });

    const tree2tl = gsap.timeline({ repeat: -1, yoyo: true });
    tree2tl.to(".hero-desktop-tree-1", {
      rotate: 20,
      duration: 2,
      ease: "power2.inOut",
    });

    tree2tl.to(".hero-desktop-tree-1", {
      rotate: 0,
      duration: 3,
      ease: "power2.inOut",
    });

    tree2tl.to(".hero-desktop-tree-1", {
      rotate: -10,
      duration: 1.5,
      ease: "power2.inOut",
    });

    tree2tl.to(".hero-desktop-tree-1", {
      rotate: 20,
      duration: 3,
      ease: "power2.inOut",
    });

    const frame1 = document.querySelector(".hero-frame-desktop-1");
    const frame2 = document.querySelector(".hero-frame-desktop-2");
    const tree2 = document.querySelector(".hero-desktop-tree-2");

    if (frame1 && frame2) {
      gsap.from(frame1, {
        opacity: 0,
        rotate: -1,
        duration: 1.5,
        scale: 0.8,
      });

      gsap.from(frame2, {
        opacity: 0,
        rotate: 1,
        duration: 1.5,
        scale: 0.8,
      });

      gsap.from(".hero-frame-desktop-3,.hero-frame-desktop-4", {
        opacity: 0,
        rotate: 3,
        duration: 1.5,
        scale: 0.8,
      });
    }

    const onHoverIn = (el: Element, enter: number) => {
      gsap.to(el, { rotate: enter, duration: 0.8 });
    };

    const onHoverOut = (el: Element, out: number) => {
      gsap.to(el, { rotate: out, duration: 0.8 });
    };

    if (frame1) {
      frame1.addEventListener("mouseenter", () => {
        onHoverIn(frame1, -8);
        if (tree2) gsap.to(tree2, { rotate: 1, duration: 0.3 });
      });

      frame1.addEventListener("mouseleave", () => {
        onHoverOut(frame1, -7);
        if (tree2) gsap.to(tree2, { rotate: -1, duration: 0.3 });
      });
    }

    if (frame2) {
      frame2.addEventListener("mouseenter", () => onHoverIn(frame2, 8));
      frame2.addEventListener("mouseleave", () => onHoverOut(frame2, 7));
    }

    return () => {
      if (frame1) {
        frame1.removeEventListener("mouseenter", () => {
          onHoverIn(frame1, -7);
          if (tree2) gsap.to(tree2, { rotate: 5, duration: 0.3 });
        });
        frame1.removeEventListener("mouseleave", () => {
          onHoverOut(frame1, -7);
          if (tree2) gsap.to(tree2, { rotate: -5, duration: 0.3 });
        });
      }

      if (frame2) {
        frame2.removeEventListener("mouseenter", () => onHoverIn(frame2, 7));
        frame2.removeEventListener("mouseleave", () => onHoverOut(frame2, 7));
      }
    };
  }, []);

  return (
    <section className="hero-desktop container">
      <div className="hero-desktop__content">
        {/* Hero Content */}
        <div className="header-desk__content__middle">
          <Image
            src="/assets/logo-no-text-pink.svg"
            width={37}
            height={20}
            alt="memory-lane-logo"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <h1>
            Celebrate <span>love</span>, Share joy
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link href={"/"} className="btn">
            Get Started
          </Link>
        </div>

        {/* Overlays */}
        {/* <Image
          src={"/assets/hero-line-top-left.svg"}
          alt="line-overlay"
          width={219}
          height={234}
          className="hero-line-top-left"
          /> */}
        <svg
          width="222"
          className="hero-line-top-left"
          height="236"
          viewBox="0 0 222 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="hero-line-top-left-path"
            d="M220.523 0C200.486 16.3935 188.913 37.2121 182.036 62.6581C178.501 75.7375 176.282 88.9496 172.832 101.982C167.493 122.151 169.782 144.083 166.325 164.826C163.563 181.396 159.882 199.632 150.985 214.19C139.988 232.186 122.326 234.817 102.644 234.271C91.7525 233.968 79.0439 223.989 72.8952 215.864C67.8834 209.241 62.3532 201.311 59.8802 193.273C57.4918 185.511 50.3293 179.926 48.1666 172.356C44.8053 160.592 30.69 148.372 22.2295 139.912C16.4481 134.13 8.9123 129.709 1.3125 127.176"
            stroke="#BABABA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-dasharray="10 10"
          />
        </svg>

        <Image
          src={"/assets/hero-line-top-right.svg"}
          alt="line-overlay"
          width={544}
          height={131}
          className="hero-line-top-right"
        />
        <Image
          src={"/assets/hero-line-bottom-left-1.svg"}
          alt="line-overlay"
          width={272}
          height={150}
          className="hero-line-bottom-left-1"
        />
        <Image
          src={"/assets/hero-line-bottom-left-2.svg"}
          alt="line-overlay"
          width={144}
          height={194}
          className="hero-line-bottom-left-2"
        />
        <Image
          src={"/assets/hero-line-bottom-right.svg"}
          alt="line-overlay"
          width={552}
          height={279}
          className="hero-line-bottom-right"
        />

        {/* Frames */}
        <HeroImageFrame
          text="Celebration of union"
          image="/assets/hero-frame-img-1.webp"
          className="hero-frame-desktop-1"
        />
        <HeroImageFrame
          text="Cherish Memories"
          image="/assets/hero-frame-img-2.webp"
          className="hero-frame-desktop-2"
        />
        <HeroImageFrame
          text="Blissful Journey"
          image="/assets/hero-frame-img-3.webp"
          className="hero-frame-desktop-3"
        />
        <HeroImageFrame
          text="Celebration of union"
          image="/assets/hero-frame-img-4.webp"
          className="hero-frame-desktop-4"
        />

        {/* Other Overlay */}
        <Image
          src={"/assets/hero-heart.svg"}
          alt="line-overlay"
          width={20}
          height={20}
          className="hero-desktop-heart"
        />
        <Image
          src={"/assets/hero-leaf.svg"}
          alt="line-overlay"
          width={66}
          height={132}
          className="hero-desktop-leaf"
        />
        <Image
          src={"/assets/hero-square.svg"}
          alt="line-overlay"
          width={50}
          height={50}
          className="hero-desktop-square"
        />
        <Image
          src={"/assets/hero-grass.svg"}
          alt="line-overlay"
          width={111}
          height={55}
          className="hero-desktop-grass"
        />
        <Image
          src={"/assets/hero-butterfly.svg"}
          alt="line-overlay"
          width={25}
          height={28}
          className="hero-desktop-butterfly"
        />
        <Image
          src={"/assets/hero-circle.svg"}
          alt="line-overlay"
          width={36}
          height={36}
          className="hero-desktop-circle"
        />
        <Image
          src={"/assets/hero-tree-1.svg"}
          alt="line-overlay"
          width={108}
          height={153}
          className="hero-desktop-tree-1"
        />
        <Image
          src={"/assets/hero-tree-2.svg"}
          alt="line-overlay"
          width={58}
          height={108}
          className="hero-desktop-tree-2"
        />
      </div>
    </section>
  );
}
