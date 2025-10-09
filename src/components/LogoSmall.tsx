"use client";
import { useEffect, useRef } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import animationData from "@/animations/Frame-16.json";

export default function LogoSmall({
  size = 80,
  playOnHover = true,
}: { size?: number; playOnHover?: boolean }) {
  const ref = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const anim = ref.current;
    if (!anim) return;
    anim.setSpeed(1);
    anim.play();
  }, []);

  return (
    <div
      style={{
        width: size + 20,    // a bit of padding around the icon
        height: size,
        borderRadius: 8,
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
      }}
      onMouseEnter={() => playOnHover && ref.current?.goToAndPlay(0, true)}
    >
      <Lottie
        lottieRef={ref}
        animationData={animationData}
        loop={false}
        autoplay={false}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid meet",
        }}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
