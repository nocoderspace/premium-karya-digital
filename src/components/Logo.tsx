import logoSrc from "@/assets/logo-fd.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={logoSrc} alt="Fauzi Design" className="h-9 w-auto md:h-10 object-contain" />
      <div className="hidden sm:flex flex-col leading-none">
        <span className="font-display text-sm tracking-tight uppercase text-foreground">Fauzi</span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Design</span>
      </div>
    </div>
  );
}
