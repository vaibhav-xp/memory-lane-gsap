import { useWindowWidth } from "@react-hook/window-size";
import HeroDesktop from "./hero-desktop";
import HeroMobile from "./hero-mobile";

export default function Hero() {
  const onlyWidth = useWindowWidth();
  const isMobileDevice = onlyWidth < 1024;

  if (isMobileDevice) return <HeroMobile />;
  else return <HeroDesktop />;
}
