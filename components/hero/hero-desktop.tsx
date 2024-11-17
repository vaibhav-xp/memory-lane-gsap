import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import HeroImageFrame from "./image-frame";

export default function HeroDesktop() {
  useGSAP(() => {
    gsap.registerPlugin(MotionPathPlugin);

    // Leaf Animation
    gsap.from(".hero-desktop-leaf", {
      rotate: 50,
      opacity: 0,
      duration: 2,
      y: -300,
      ease: "sine.out",
    });

    // Grass Animation
    gsap.from(".hero-desktop-grass", {
      y: 80,
      duration: 2,
      ease: "power2.out",
    });

    // Heart Animation
    gsap.from(".hero-desktop-heart", {
      duration: 2.5,
      motionPath: {
        path: "#hero-line-top-left-path",
        align: "#hero-line-top-left-path",
        alignOrigin: [0.5, 0.5],
        start: 0.8,
        end: 1,
      },
      ease: "sine.inOut",
    });

    // Square Animation
    gsap.from(".hero-desktop-square", {
      duration: 2.5,
      motionPath: {
        path: "#hero-line-top-right-path",
        align: "#hero-line-top-right-path",
        start: 0.8,
        end: 0.9,
      },
      ease: "sine.inOut",
    });

    // Butterfly Animation
    gsap.to(".hero-desktop-butterfly", {
      duration: 3,
      motionPath: {
        path: "#hero-line-bottom-left-2-path",
        align: "#hero-line-bottom-left-2-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0.6,
        end: 1,
      },
      ease: "power1.inOut",
    });

    // Circle Animation
    gsap.from(".hero-desktop-circle", {
      duration: 2.5,
      scale: 0.5,
      motionPath: {
        path: "#hero-line-bottom-right-path",
        align: "#hero-line-bottom-right-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0.85,
        end: 1,
      },
      ease: "sine.inOut",
    });

    gsap.from(".header-desk__content__middle__animate--top", {
      y: -30,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      stagger: 0.3,
    });

    gsap.from(".header-desk__content__middle__animate--bottom", {
      y: 30,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      stagger: 0.3,
      delay: 0.5,
    });

    // Tree Animation Timeline
    const tree2tl = gsap.timeline({ repeat: -1, yoyo: true });
    tree2tl
      .to(".hero-desktop-tree-1", {
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

    // Frames Animation
    const frames = [
      ".hero-frame-desktop-1",
      ".hero-frame-desktop-2",
      ".hero-frame-desktop-3,.hero-frame-desktop-4",
    ];
    frames.forEach((frame, index) => {
      gsap.from(frame, {
        opacity: 0,
        rotate: index % 2 === 0 ? -3 : 3,
        duration: 2,
        scale: 0.8,
        ease: "sine.out",
        delay: index * 0.2,
      });
    });

    // Hover Effects
    const onHoverIn = (el: Element, rotateTo: number) => {
      gsap.to(el, { rotate: rotateTo, duration: 0.6, ease: "sine.out" });
    };
    const onHoverOut = (el: Element, rotateBack: number) => {
      gsap.to(el, { rotate: rotateBack, duration: 0.6, ease: "sine.out" });
    };

    const frame1 = document.querySelector(".hero-frame-desktop-1");
    const frame2 = document.querySelector(".hero-frame-desktop-2");

    if (frame1) {
      frame1.addEventListener("mouseenter", () => onHoverIn(frame1, -8));
      frame1.addEventListener("mouseleave", () => onHoverOut(frame1, -7));
    }

    if (frame2) {
      frame2.addEventListener("mouseenter", () => onHoverIn(frame2, 8));
      frame2.addEventListener("mouseleave", () => onHoverOut(frame2, 7));
    }

    return () => {
      if (frame1) {
        frame1.removeEventListener("mouseenter", () => onHoverIn(frame1, -8));
        frame1.removeEventListener("mouseleave", () => onHoverOut(frame1, -7));
      }
      if (frame2) {
        frame2.removeEventListener("mouseenter", () => onHoverIn(frame2, 8));
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
            className="header-desk__content__middle__animate--top"
          />
          <p className="header-desk__content__middle__animate--top">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <h1 className="header-desk__content__middle__animate--bottom">
            Celebrate <span>love</span>, Share joy
          </h1>
          <p className="header-desk__content__middle__animate--bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link
            href={"/"}
            className="btn header-desk__content__middle__animate--bottom"
          >
            Get Started
          </Link>
        </div>

        {/* Line 1 - Top Left Corner */}
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

        {/* Line 2 - Top Right Corner */}
        <svg
          width="514"
          height="132"
          viewBox="0 0 514 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hero-line-top-right"
        >
          <path
            id="hero-line-top-right-path"
            d="M1.27344 0C1.92814 6.54705 7.1524 13.2063 10.8853 18.4057C20.5059 31.8059 29.1139 46.2461 40.8456 57.9778C56.8095 73.9417 71.5952 83.8336 91.8702 93.9711C134.106 115.089 176.469 119.506 222.244 126.181C260.86 131.813 301.44 132.46 340.142 128.942C372.325 126.016 403.831 121.792 435.852 116.365C452.508 113.542 467.694 107.084 483.911 103.481C493.016 101.457 501.35 98.8866 510.088 95.7094C513.615 94.4267 520.87 93.7912 523.585 91.6193C527.727 88.3056 540.462 84.666 546.081 84.666"
            stroke="#BABABA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-dasharray="10 10"
          />
        </svg>

        {/* Line 3 - Bottom Left 1 */}
        <Image
          src={"/assets/hero-line-bottom-left-1.svg"}
          alt="line-overlay"
          width={272}
          height={150}
          className="hero-line-bottom-left-1"
        />

        {/* Line 4 - Bottom Left 2 */}
        <svg
          width="132"
          height="148"
          viewBox="0 0 132 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hero-line-bottom-left-2"
        >
          <path
            id="hero-line-bottom-left-2-path"
            d="M8.83988 207.55C-5.31564 188.676 3.74328 148.826 7.53837 128.902C13.9111 95.4449 30.5261 63.2826 53.091 37.9826C72.3271 16.4149 102.092 1.72639 130.995 1.72639"
            stroke="#BABABA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-dasharray="10 10"
          />
        </svg>

        {/* Line 4 - Bottom Right */}
        <svg
          width="531"
          height="268"
          viewBox="0 0 531 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hero-line-bottom-right"
        >
          <path
            id="hero-line-bottom-right-path"
            d="M553.881 0.878906C541.927 23.7003 518.177 39.1752 498.664 55.1756C463.592 83.9341 425.937 104.263 383.935 121.538C343.843 138.028 302.29 151.091 261.64 166.121C228.046 178.542 187.517 186.562 152.002 185.038C122.645 183.778 94.7524 183.148 67.502 172C48.502 164.227 40.9725 151.268 42.002 139.944C43.6987 121.279 60.6981 107.068 79.0147 117.244C86.9001 121.624 92.3077 124 101.002 141.5C103.009 156.556 104.768 169.613 102.84 185.038C101.562 195.258 96.7795 206.285 92.3077 215.407C88.7625 222.639 83.155 227.915 79.4237 234.631C73.3634 245.539 56.7152 256.197 45.8845 263.16C32.7757 271.587 17.7066 280.645 1.71094 280.645"
            stroke="#BABABA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-dasharray="10 10"
          />
        </svg>

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
