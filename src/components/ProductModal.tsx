import { useState, useEffect } from "react";
import { X, MessageCircle, Plus, Minus } from "lucide-react";
import type { Product } from "@/lib/products";
import { buildWhatsAppUrl, productInquiryMessage } from "@/lib/products";

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(12);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (product) {
      setColor(product.colors[0] ?? "");
      setSize(product.sizes[0] ?? "");
      setQty(product.moq);
      setNotes("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  if (!product) return null;

  const wa = buildWhatsAppUrl(productInquiryMessage(product, { color, size, qty, notes }));
  const waConsult = buildWhatsAppUrl(`Halo Fauzi Design, saya ingin konsultasi produk: ${product.name}.`);

  return (
    <div className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-sm flex items-stretch md:items-center justify-center md:p-6 overflow-y-auto" onClick={onClose}>
      <div
        className="relative w-full max-w-5xl bg-surface border border-border my-auto md:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-background/80 hover:bg-neon hover:text-background transition rounded-full"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="aspect-square md:aspect-auto bg-background relative overflow-hidden">
            <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
            <span className="absolute top-4 left-4 label-tag bg-background/70 px-2 py-1">[{product.category}]</span>
          </div>

          <div className="p-6 md:p-8 flex flex-col gap-5">
            <div>
              <p className="label-tag">[{product.category}] · MOQ {product.moq} PCS</p>
              <h2 className="font-display text-3xl md:text-4xl mt-2 leading-[1]">{product.name}</h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="border border-border p-3">
                <p className="label-tag mb-1">[Spesifikasi]</p>
                <p>{product.spec}</p>
              </div>
              <div className="border border-border p-3">
                <p className="label-tag mb-1">[Estimasi]</p>
                <p>{product.timeline}</p>
              </div>
            </div>

            <div>
              <p className="label-tag mb-2">[Bahan]</p>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((m) => (
                  <span key={m} className="text-xs px-3 py-1.5 border border-border">{m}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="label-tag mb-2">[Warna]</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`text-xs px-3 py-1.5 border transition ${color === c ? "border-neon text-neon" : "border-border text-muted-foreground hover:border-foreground"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="label-tag mb-2">[Ukuran]</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`text-xs px-3 py-1.5 border min-w-[42px] transition ${size === s ? "border-neon text-neon" : "border-border text-muted-foreground hover:border-foreground"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="label-tag mb-2">[Jumlah]</p>
              <div className="flex items-center gap-3">
                <button onClick={() => setQty(Math.max(product.moq, qty - 6))} className="p-2 border border-border hover:border-neon"><Minus size={14} /></button>
                <span className="font-mono text-lg w-16 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 6)} className="p-2 border border-border hover:border-neon"><Plus size={14} /></button>
                <span className="text-xs text-muted-foreground">pcs · min {product.moq}</span>
              </div>
            </div>

            <div>
              <p className="label-tag mb-2">[Catatan Kustomisasi]</p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Logo, posisi sablon, deadline, dll."
                className="w-full bg-background border border-border p-3 text-sm focus:border-neon outline-none"
              />
            </div>

            <p className="text-xs font-mono text-muted-foreground">Harga menyesuaikan spesifikasi · Konsultasi gratis</p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-tag btn-tag-primary flex-1 justify-center">
                <MessageCircle size={14} /> Minta Penawaran
              </a>
              <a href={waConsult} target="_blank" rel="noopener noreferrer" className="btn-tag btn-tag-outline flex-1 justify-center">
                Konsultasi Produk Ini
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
