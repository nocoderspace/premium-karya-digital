import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import p1 from "@/assets/upload-kaos-neglasari.jpg";
import p2 from "@/assets/upload-polo-navy.jpg";
import p3 from "@/assets/upload-sablon-emas.jpg";
import p4 from "@/assets/upload-banner-produk.jpg";
import p5 from "@/assets/upload-rompi-hijau.jpg";
import p6 from "@/assets/upload-packing-bunga.jpg";
import p7 from "@/assets/upload-batik-pack.jpg";
import p8 from "@/assets/upload-workshop-jahit.jpg";
import p9 from "@/assets/upload-kaos-neglasari.jpg";
import p10 from "@/assets/upload-rompi-hijau.jpg";
import { buildWhatsAppUrl } from "@/lib/products";
import { PageHero } from "@/components/SectionHero";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri Portfolio — Fauzi Design" },
      { name: "description", content: "Portfolio produksi custom apparel Fauzi Design: kaos, kemeja, jersey, seragam, jaket, hoodie, polo, dan souvenir untuk berbagai brand dan komunitas." },
      { property: "og:title", content: "Galeri Portfolio — Fauzi Design" },
      { property: "og:description", content: "Lihat portfolio produksi custom apparel premium." },
      { property: "og:image", content: p1 },
    ],
  }),
  component: Galeri,
});

type Cat = "Semua" | "Kaos" | "Kemeja" | "Jersey" | "Seragam" | "Jaket" | "Hoodie" | "Souvenir";

const ITEMS: { img: string; title: string; cat: Exclude<Cat, "Semua">; tall?: boolean }[] = [
  { img: p1, title: "Kaos Hitam Komunitas Neglasari", cat: "Kaos", tall: true },
  { img: p2, title: "Polo Lengan Panjang Sekretariat Navy", cat: "Kemeja" },
  { img: p3, title: "Sablon Manual Logo Emas Massal", cat: "Kaos", tall: true },
  { img: p4, title: "Packing Seragam Sarung & Mukena", cat: "Seragam" },
  { img: p5, title: "Rompi Tactical Hijau Bordir Arab", cat: "Jaket", tall: true },
  { img: p6, title: "Packing Tas Souvenir Bunga Tosca", cat: "Souvenir" },
  { img: p7, title: "Produksi Massal Seragam Batik", cat: "Seragam", tall: true },
  { img: p8, title: "Workshop Jahit Kaos Hijau Stabilo", cat: "Kaos" },
  { img: p9, title: "Bundling Kaos Komunitas Siap Kirim", cat: "Kaos" },
  { img: p10, title: "Rompi Outdoor Custom Bordir", cat: "Jaket" },
];

const FILTERS: Cat[] = ["Semua", "Kaos", "Kemeja", "Jersey", "Seragam", "Jaket", "Hoodie", "Souvenir"];

function Galeri() {
  const [filter, setFilter] = useState<Cat>("Semua");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => filter === "Semua" ? ITEMS : ITEMS.filter((i) => i.cat === filter),
    [filter]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + filtered.length) % filtered.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [lightbox, filtered.length]);

  const cur = lightbox !== null ? filtered[lightbox] : null;

  return (
    <>
      <PageHero
        tag="Galeri Portfolio"
        title="Karya, brand, &"
        accent="komunitas."
        subtitle="Setiap produk yang kami buat memiliki cerita. Berikut beberapa portfolio terbaik kami dari berbagai kategori dan industri."
      />

      {/* FILTERS */}
      <div className="container-edge mb-8">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap font-mono text-[11px] uppercase tracking-widest px-4 py-2 border transition ${
                filter === f ? "bg-neon text-background border-neon" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* MASONRY */}
      <section className="container-edge pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-5 [column-fill:_balance]">
          {filtered.map((it, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group block w-full mb-3 md:mb-5 break-inside-avoid relative overflow-hidden bg-surface text-left"
            >
              <img src={it.img} alt={it.title} loading="lazy" className={`w-full ${it.tall ? "aspect-[3/4]" : "aspect-[4/3]"} object-cover transition-transform duration-700 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition">
                <p className="font-mono text-[10px] text-neon uppercase tracking-widest">[{it.cat}]</p>
                <p className="font-display text-lg uppercase leading-tight">{it.title}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {cur && (
        <div className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-sm flex flex-col" onClick={() => setLightbox(null)}>
          <div className="flex justify-between items-center p-4 border-b border-border">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {String((lightbox ?? 0) + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
            </p>
            <button onClick={() => setLightbox(null)} className="p-2 hover:text-neon" aria-label="Close"><X size={22} /></button>
          </div>

          <div className="flex-1 flex items-center justify-center p-4 md:p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox((i) => (i! - 1 + filtered.length) % filtered.length)}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-background/70 hover:bg-neon hover:text-background transition z-10"
              aria-label="Previous"
            ><ChevronLeft /></button>

            <img src={cur.img} alt={cur.title} className="max-h-[70vh] max-w-full object-contain" />

            <button
              onClick={() => setLightbox((i) => (i! + 1) % filtered.length)}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-background/70 hover:bg-neon hover:text-background transition z-10"
              aria-label="Next"
            ><ChevronRight /></button>
          </div>

          <div className="p-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4" onClick={(e) => e.stopPropagation()}>
            <div>
              <p className="font-mono text-[10px] text-neon uppercase tracking-widest">[{cur.cat}]</p>
              <p className="font-display text-2xl uppercase">{cur.title}</p>
            </div>
            <a
              href={buildWhatsAppUrl(`Halo Fauzi Design, saya tertarik dengan portfolio: ${cur.title}. Bisa minta penawaran produk serupa?`)}
              target="_blank" rel="noopener noreferrer"
              className="btn-tag btn-tag-primary self-start md:self-auto"
            >
              <MessageCircle size={14} /> Minta Produk Serupa
            </a>
          </div>
        </div>
      )}
    </>
  );
}
