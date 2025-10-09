"use client";
import { useEffect, useRef } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import animationData from "@/animations/Frame-16.json";

export default function LogoSmall({
  size = 100,            // inside icon size
  playOnHover = true,   // replay on hover if you want
}: { size?: number; playOnHover?: boolean }) {
  const ref = useRef<LottieRefCurrentProps>(null);

  // Play once on mount and hold the last frame
  useEffect(() => {
    const anim = ref.current;
    if (!anim) return;
    anim.setSpeed(1);
    anim.play();

    // when done, it stays on the last frame (loop=false)
    const onComplete = () => anim.pause();
  }, []);

  return (
    <div
      style={{
        width: 200,
        height: size + 24,
        borderRadius: 12,
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        // same dark gradient as hero
        background: "linear-gradient(135deg, #0b0c10 0%, #141627 50%, #000000 100%)",
      }}
      onMouseEnter={() => playOnHover && ref.current?.goToAndPlay(0, true)}
    >
      <Lottie
        lottieRef={ref}
        animationData={animationData}
        loop={false}
        autoplay={false} // we control play via useEffect above
        rendererSettings={{
          preserveAspectRatio: "xMidYMid meet",
        }}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
