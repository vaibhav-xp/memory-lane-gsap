import Image from "next/image";
import Link from "next/link";
import HeroImageFrame from "./image-frame";

export default function HeroDesktop() {
  return (
    <section className="hero-desktop container">
      <div className="hero-desktop__content">
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
        <Image
          src={"/assets/hero-line-top-left.svg"}
          alt="line-overlay"
          width={219}
          height={234}
          className="hero-line-top-left"
        />
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
