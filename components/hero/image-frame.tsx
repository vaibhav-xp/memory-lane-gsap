import Image from "next/image";

interface ImageProps {
  image: string;
  className?: string;
  text: string;
}

export default function HeroImageFrame({ className, image, text }: ImageProps) {
  return (
    <div className={`hero-image-frame ${className}`}>
      <div>
        <Image src={image} fill alt={text} />
      </div>

      <p>{text}</p>
    </div>
  );
}
