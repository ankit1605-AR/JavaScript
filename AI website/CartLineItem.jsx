// A fixed, non-interactive layer of film-grain noise over the whole page.
// Built with SVG feTurbulence instead of an image file, so there is no
// binary asset to ship and it scales to any viewport for free.
export default function GrainOverlay() {
  return (
    <svg className="grain-overlay" aria-hidden="true" focusable="false">
      <filter id="grainFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grainFilter)" />
    </svg>
  );
}
