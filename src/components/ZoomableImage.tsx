import { useEffect, useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width?: number;
}

export function ZoomableImage({ src, alt, width }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        className="zoomable-img"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsOpen(true);
        }}
      />
      {isOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
          <img src={src} alt={alt} />
        </div>
      )}
    </>
  );
}
