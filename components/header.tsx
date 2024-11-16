"use client";

import { useGSAP } from "@gsap/react";
import { useWindowWidth } from "@react-hook/window-size";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuX } from "react-icons/lu";

export default function Header() {
  const [toggleHeader, setToggleHeader] = useState(false);
  const onlyWidth = useWindowWidth();
  const largeDevicesOnly = onlyWidth > 768;

  const handleToggle = () => setToggleHeader(!toggleHeader);

  return (
    <header className="container header ">
      <Link href="/" className="header__logo">
        <Image
          width={157}
          height={22}
          src="/assets/logo.svg"
          alt="Memory Lane"
        />
      </Link>

      {largeDevicesOnly ? (
        <nav className="header__nav">
          <Link href="/">Get Started</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Plans & Pricing</Link>
        </nav>
      ) : (
        <FaBarsStaggered onClick={handleToggle} id="open-mobile" />
      )}
      {toggleHeader && (
        <MobileHeader toggleHeader={toggleHeader} handleToggle={handleToggle} />
      )}
    </header>
  );
}

function MobileHeader({
  handleToggle,
  toggleHeader,
}: {
  handleToggle: () => void;
  toggleHeader: boolean;
}) {
  const tl = useRef<gsap.core.Timeline>();
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.from(".mobile-header", {
      background: "transparent",
      duration: 0.2,
      ease: "power1.out",
    });

    tl.current.from(".mobile-header__content", {
      x: 500,
      ease: "power4.out",
      duration: 0.5,
    });

    tl.current.from(".mobile-header_content-header", {
      x: 20,
      opacity: 0,
      duration: 0.4,
    });

    tl.current.from(".mobile-header__content nav p", {
      x: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });

    tl.current.from(".highlight-nav::before", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });

    tl.current.from("#close-mobile", {
      opacity: 0,
      duration: 0.2,
    });

    if (toggleHeader) tl.current.play();
    return () => tl.current?.kill();
  }, [toggleHeader]);

  const closeFn = useCallback(() => {
    tl.current?.reverse().then(handleToggle);
  }, [handleToggle]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(event);
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeFn();
      }
    };

    if (toggleHeader) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [closeFn, toggleHeader]);

  return (
    <div className="mobile-header">
      <div className="mobile-header__content" ref={headerRef}>
        <div className="mobile-header_content-header">
          <Image
            src="/assets/logo-no-text-white.svg"
            className="logo-no-text-white"
            alt="Logo"
            width={40}
            height={40}
          />
          <LuX id="close-mobile" onClick={closeFn} />
        </div>
        <nav>
          <p className="highlight-nav">Get Started</p>
          <p className="highlight-nav">About Us</p>
          <p className="highlight-nav">Plans & Pricing</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </nav>
      </div>
    </div>
  );
}
