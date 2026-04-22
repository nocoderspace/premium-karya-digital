import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import workshop from "@/assets/workshop.jpg";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import { buildWhatsAppUrl } from "@/lib/products";
import { PageHero } from "@/components/SectionHero";

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Fauzi Design" },
      { name: "description", content: "Fauzi Design adalah konveksi custom apparel dengan workshop produksi sendiri. Berpengalaman melayani komunitas, korporat, sekolah, dan event." },
      { property: "og:title", content: "Tentang Kami — Fauzi Design" },
      { property: "og:description", content: "Cerita, proses, dan kapabilitas produksi Fauzi Design." },
      { property: "og:image", content: workshop },
    ],
  }),
  component: Tentang,
});


      {/* STORY */}
      <section className="container-edge py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={portfolio9} alt="Workshop produksi" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div>
          <p className="label-tag mb-3">[Cerita Kami]</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Berdiri sejak 2018. Berawal dari workshop kecil, Fauzi Design tumbuh karena satu prinsip
              sederhana: setiap order, sekecil apa pun, harus dikerjakan dengan kualitas terbaik.
            </p>
            <p>
              Hari ini, kami menangani produksi untuk komunitas, perusahaan, sekolah, hingga event nasional —
              dengan tim kreatif dan QC ketat untuk memastikan hasil akhir sesuai ekspektasi.
            </p>
            <p>
              Kepercayaan ratusan klien yang terus kembali menjadi bukti bahwa konsistensi, ketepatan waktu, dan komunikasi yang transparan adalah fondasi utama kerja kami.
            </p>
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-tag btn-tag-whatsapp mt-8">
            <WhatsAppIcon size={14} /> Mulai Proyek
          </a>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface/40 border-y border-border">
        <div className="container-edge py-20 md:py-28">
          <p className="label-tag mb-3">[Proses Produksi]</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] max-w-3xl mb-12">
            Empat tahap, <span className="text-stroke">nol drama.</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-3 md:gap-5">
            {PROCESS.map((p) => (
              <div key={p.n} className="border border-border bg-background p-6 hover:border-neon transition group relative">
                <p className="font-display text-5xl text-neon">{p.n}</p>
                <h3 className="font-display text-lg uppercase mt-4 leading-tight">{p.t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP CAPABILITIES */}
      <section className="container-edge py-20 md:py-28">
        <p className="label-tag mb-3">[Workshop & Kapabilitas]</p>
        <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] max-w-3xl mb-12">
          Mesin, tangan, & <span className="text-stroke">standar premium.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-3 md:gap-5">
          {[
            { img: process1, t: "Sewing & Cutting", d: "Mesin industrial untuk hasil jahitan presisi." },
            { img: process2, t: "Printing & Sablon", d: "DTF, plastisol, sublimasi, dan bordir." },
            { img: process3, t: "Quality Control", d: "Cek manual setiap pcs sebelum pengiriman." },
          ].map((c) => (
            <div key={c.t} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.t} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="font-mono text-[10px] text-neon uppercase tracking-widest mt-4">[{c.t}]</p>
              <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="container-edge pb-20">
        <div className="border border-neon p-10 md:p-16 text-center">
          <p className="label-tag mb-3">[Mulai Bersama Kami]</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
            Mulai proyek Anda <br /> bersama <span className="text-stroke">Fauzi Design.</span>
          </h2>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-tag btn-tag-whatsapp mt-8">
            <WhatsAppIcon size={14} /> Chat WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
