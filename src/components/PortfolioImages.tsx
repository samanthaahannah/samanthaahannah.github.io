import { useState } from "react";

import type { ImageMap } from "../data/projects";

type PortfolioImagesProps = {
  images: ImageMap[];
};


export default function PortfolioImages({ images }: PortfolioImagesProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="method-images">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src1000}
          srcSet={`
            ${img.src400} 400w,
            ${img.src700} 700w,
            ${img.src1000} 1000w
          `}
          sizes="(max-width: 600px) 400px,
                 (max-width: 900px) 700px,
                 1000px"
          alt={img.alt}
          className="img-thumb"
          onClick={() => setSelected(img.full)}
        />
      ))}

      {selected && (
        <div className="img-full" onClick={() => setSelected(null)}>
          <div className="img-style">
            <img src={selected} alt="Full view" className="full-img" />
          </div>
        </div>
      )}
    </div>
  );
}