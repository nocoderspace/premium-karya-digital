import c1 from "@/assets/clients/client-1.jpg";
import c2 from "@/assets/clients/client-2.jpg";
import c3 from "@/assets/clients/client-3.jpg";
import c4 from "@/assets/clients/client-4.jpg";
import c5 from "@/assets/clients/client-5.jpg";
import c6 from "@/assets/clients/client-6.jpg";
import c7 from "@/assets/clients/client-7.jpg";
import c8 from "@/assets/clients/client-8.jpg";
import c9 from "@/assets/clients/client-9.jpg";

const LOGOS = [
  { src: c1, name: "Universitas Padjadjaran" },
  { src: c2, name: "Universitas Bhakti Kencana" },
  { src: c3, name: "UIN Sunan Gunung Djati" },
  { src: c4, name: "Uninus" },
  { src: c5, name: "IKIP Siliwangi" },
  { src: c6, name: "Karang Taruna" },
  { src: c7, name: "Nafisha Universal Network" },
  { src: c8, name: "Wahfalab Indonesia" },
  { src: c9, name: "Pondok Pesantren Al-Ittihad" },
];

export function ClientMarquee() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section className="border-y border-border bg-surface/40 overflow-hidden">
      <div className="container-edge py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
          <div>
            <p className="label-tag mb-2">[Dipercaya Oleh]</p>
            <h2 className="font-display text-2xl md:text-4xl uppercase leading-tight">
              Klien & <span className="text-stroke">partner</span> kami
            </h2>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-widest">
            Komunitas · Korporat · Kampus · Sekolah
          </p>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 md:gap-6 pb-10 md:pb-14 marquee-track">
          {loop.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 w-32 h-24 md:w-44 md:h-32 bg-white border border-border flex items-center justify-center p-4 md:p-5 hover:border-neon transition-colors"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
