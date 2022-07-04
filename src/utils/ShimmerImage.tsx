import Image from "next/image";

const shimmerLoader = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ddd" offset="20%" />
      <stop stop-color="#F0F0F0" offset="50%" />
      <stop stop-color="#ddd" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}"  fill="#ddd" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

/**
 * **Optimized Image Component** - returns an image with a shimmer loading effect.
 * @params *isAboveTheFold* - defaults to false if nothing is provided.
 */
const ShimmerImage = ({
  alt,
  src,
  width,
  height,
  hasPlaceholderBlur = true,
  isAboveTheFold = false,
  classes,
}: {
  alt: string;
  src: string;
  width: number;
  height: number;
  hasPlaceholderBlur?: boolean;
  isAboveTheFold?: boolean;
  classes?: string;
}) => {
  console.log("src = ", src);

  return (
    <Image
      alt={alt}
      src={src}
      priority={isAboveTheFold}
      placeholder={hasPlaceholderBlur ? "blur" : "empty"}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmerLoader(width, height))}`}
      width={width}
      height={height}
      className={classes}
    />
  );
};

export default ShimmerImage;
