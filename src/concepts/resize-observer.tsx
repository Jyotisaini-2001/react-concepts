/** @format */

import { useEffect, useRef, useState } from "react";

const ResizableCard = () => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
      <img
        src="/lizard.jpg"
        alt="Lizard"
        className="w-full h-36 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">Lizard</h2>
        <p className="text-gray-600 text-sm">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </p>
      </div>
      <div className="flex justify-between p-4">
        <button className="text-blue-500 text-sm font-semibold">Share</button>
        <button className="text-blue-500 text-sm font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const cardWidth = 300;
        const newColumns = Math.floor(width / cardWidth);
        setColumns(Math.max(1, newColumns));
      }
    });

    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="p-6 transition-all">
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(180px, 1fr))`,
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <ResizableCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
