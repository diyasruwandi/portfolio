function GridBackground() {
  return (
    <>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(to right, #262626 1px, transparent 1px),
          linear-gradient(to bottom, #262626 1px, transparent 1px)
        `,
          backgroundSize: "35px 35px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
    </>
  );
}

export default GridBackground;
