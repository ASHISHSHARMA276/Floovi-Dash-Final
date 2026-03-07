import { useState, useEffect } from "react";

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: number; left: string; animationDuration: string; animationDelay: string; opacity: number; size: string }>
  >([]);

  useEffect(() => {
    // Generate 50 snowflakes
    const flakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 10 + 10}s`, // 10-20s fall time
      animationDelay: `${Math.random() * -20}s`, // Start at different times
      opacity: Math.random() * 0.5 + 0.2, // 0.2 to 0.7 opacity
      size: `${Math.random() * 4 + 2}px`, // 2-6px size
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake absolute rounded-full bg-white blur-[1px]"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animation: `fall ${flake.animationDuration} linear infinite`,
            animationDelay: flake.animationDelay,
          }}
        />
      ))}
    </div>
  );
}