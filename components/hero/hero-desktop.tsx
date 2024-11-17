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
          text="Celebration of union"
          image="/assets/hero-frame-img-1.webp"
          className="hero-frame-desktop-2"
        />
        <HeroImageFrame
          text="Celebration of union"
          image="/assets/hero-frame-img-1.webp"
          className="hero-frame-desktop-3"
        />
        <HeroImageFrame
          text="Celebration of union"
          image="/assets/hero-frame-img-1.webp"
          className="hero-frame-desktop-4"
        />
      </div>
    </section>
  );
}
