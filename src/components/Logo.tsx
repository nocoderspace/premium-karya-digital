export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="font-display text-xl tracking-tight leading-none">
        <span className="text-neon">F</span>
        <span className="text-foreground">D</span>
      </div>
      <div className="hidden sm:flex flex-col leading-none">
        <span className="font-mono text-[10px] tracking-[0.2em] text-foreground uppercase">Fauzi</span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Design</span>
      </div>
    </div>
  );
}
