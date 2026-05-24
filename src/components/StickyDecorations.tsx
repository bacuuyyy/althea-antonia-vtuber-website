const StickyDecorations = () => {
  return (
    <>
      {/* Vertical Japanese Text - Left Side */}
      <div className="fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-0 pointer-events-none hidden lg:block">
        <div 
          className="text-4xl xl:text-5xl 2xl:text-6xl font-display tracking-widest opacity-25 bg-gradient-to-b from-primary via-kawaii-pink to-kawaii-gold bg-clip-text text-transparent"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          アルテア・アントニア
        </div>
      </div>
    </>
  );
};

export default StickyDecorations;
