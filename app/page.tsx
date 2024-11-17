"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [WindowLoaded, setWindowLoaded] = useState(false);

  useEffect(() => {
    if (window) {
      setWindowLoaded(true);
    }
  }, []);

  if (!WindowLoaded)
    return (
      <div
        style={{
          background: "white",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );

  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}
