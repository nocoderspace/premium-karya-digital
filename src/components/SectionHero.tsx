export function PageHero({
  tag, title, accent, subtitle, image,
}: {
  tag: string; title: string; accent?: string; subtitle: string; image?: string;
}) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden grain">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </>
      )}
      <div className="container-edge relative">
        <p className="label-tag mb-4">[{tag}]</p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] uppercase">
          {title} {accent && <span className="text-stroke">{accent}</span>}
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
