import { useState } from "react";



export const ImageLoader = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-xl"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
