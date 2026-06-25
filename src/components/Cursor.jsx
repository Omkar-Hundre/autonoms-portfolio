import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleLinkHover = () => setIsHovering(true);
    const handleLinkLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // Attach listeners to all interactive elements
    const setupInteractiveElements = () => {
      const elements = document.querySelectorAll("a, button, input, .card-lift");
      elements.forEach((el) => {
        el.addEventListener("mouseenter", handleLinkHover);
        el.addEventListener("mouseleave", handleLinkLeave);
      });
    };

    // Run setup and also run it on mutations in case elements are added dynamically
    setupInteractiveElements();
    const observer = new MutationObserver(setupInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      const elements = document.querySelectorAll("a, button, input, .card-lift");
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHover);
        el.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.05s linear",
        }}
      >
        <div
          className={`bg-white rounded-full transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${
            isHovering ? "w-12 h-12 opacity-100" : "w-4 h-4 opacity-100"
          }`}
        />
      </div>
    </>
  );
}
