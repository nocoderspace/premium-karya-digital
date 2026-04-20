import kaos from "@/assets/cat-kaos.jpg";
import kemeja from "@/assets/cat-kemeja-new.jpg";
import jersey from "@/assets/cat-jersey.jpg";
import seragam from "@/assets/cat-seragam.jpg";
import jaket from "@/assets/cat-jaket.jpg";
import jaketVarsity from "@/assets/cat-jaket-varsity.jpg";
import hoodie from "@/assets/cat-hoodie.jpg";
import hoodieZip from "@/assets/cat-hoodie-zip.jpg";
import polo from "@/assets/cat-polo.jpg";
import souvenir from "@/assets/cat-souvenir.jpg";

export type Category =
  | "Kaos" | "Kemeja" | "Jersey" | "Seragam"
  | "Jaket" | "Hoodie" | "Polo Shirt" | "Souvenir";

export type Product = {
  id: string;
  name: string;
  category: Category;
  image: string;
  spec: string;
  moq: number;
  description: string;
  materials: string[];
  colors: string[];
  sizes: string[];
  timeline: string;
};

export const categories: { name: Category; image: string; count: number }[] = [
  { name: "Kaos", image: kaos, count: 24 },
  { name: "Kemeja", image: kemeja, count: 18 },
  { name: "Jersey", image: jersey, count: 16 },
  { name: "Seragam", image: seragam, count: 22 },
  { name: "Jaket", image: jaket, count: 14 },
  { name: "Hoodie", image: hoodie, count: 19 },
  { name: "Polo Shirt", image: polo, count: 12 },
  { name: "Souvenir", image: souvenir, count: 28 },
];

export const products: Product[] = [
  {
    id: "k-001", name: "Kaos Combed 30s Premium", category: "Kaos", image: kaos,
    spec: "Cotton Combed 30s · Sablon DTF / Plastisol", moq: 12,
    description: "Kaos custom dengan bahan Cotton Combed 30s yang lembut dan adem. Cocok untuk komunitas, event, atau merchandise.",
    materials: ["Cotton Combed 30s", "Cotton Combed 24s", "Cotton Bamboo"],
    colors: ["Hitam", "Putih", "Navy", "Olive", "Maroon"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    timeline: "7–14 hari kerja",
  },
  {
    id: "km-001", name: "Kemeja PDH Korporat", category: "Kemeja", image: kemeja,
    spec: "American Drill / Japan Drill · Bordir Logo", moq: 12,
    description: "Kemeja PDH/PDL premium untuk seragam kantor, instansi, dan organisasi. Jahitan rapi dan presisi.",
    materials: ["American Drill", "Japan Drill", "Nagata Drill"],
    colors: ["Navy", "Hitam", "Abu", "Hijau Tua", "Putih"],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    timeline: "10–18 hari kerja",
  },
  {
    id: "j-001", name: "Jersey Full Printing", category: "Jersey", image: jersey,
    spec: "Dry-Fit Polyester · Sublimasi Full Printing", moq: 12,
    description: "Jersey olahraga dengan teknik full sublimation printing. Desain bebas, warna tajam, tahan lama.",
    materials: ["Dry-Fit", "Paragon", "Hyget", "Milano"],
    colors: ["Custom warna sesuai desain"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    timeline: "10–14 hari kerja",
  },
  {
    id: "s-001", name: "Seragam Kerja Lapangan", category: "Seragam", image: seragam,
    spec: "Drill / Ripstop · Reflektor Opsional", moq: 12,
    description: "Seragam kerja lapangan untuk tim operasional, logistik, dan industri. Kuat dan nyaman dipakai seharian.",
    materials: ["American Drill", "Ripstop", "Canvas Premium"],
    colors: ["Navy", "Hitam", "Abu", "Hijau Army", "Orange Reflektor"],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    timeline: "14–21 hari kerja",
  },
  {
    id: "ja-001", name: "Bomber Jacket Premium", category: "Jaket", image: jaket,
    spec: "Taslan / Despo · Furing Mesh", moq: 12,
    description: "Jaket bomber custom dengan bahan premium dan finishing rapi. Cocok untuk komunitas dan event.",
    materials: ["Taslan", "Despo", "Microfiber"],
    colors: ["Hitam", "Navy", "Olive", "Maroon", "Abu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    timeline: "14–21 hari kerja",
  },
  {
    id: "h-001", name: "Hoodie Fleece Heavyweight", category: "Hoodie", image: hoodie,
    spec: "Fleece Cotton 320 gsm · Sablon / Bordir", moq: 12,
    description: "Hoodie premium dengan bahan fleece tebal 320 gsm. Hangat, nyaman, dan tahan lama.",
    materials: ["Fleece Cotton 280", "Fleece Cotton 320", "Baby Terry"],
    colors: ["Hitam", "Navy", "Abu", "Maroon", "Olive", "Putih"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    timeline: "12–18 hari kerja",
  },
  {
    id: "p-001", name: "Polo Shirt Lacoste CVC", category: "Polo Shirt", image: polo,
    spec: "Lacoste CVC · Bordir Logo Dada", moq: 12,
    description: "Polo shirt premium dengan bahan Lacoste CVC. Cocok untuk seragam kantor dan event korporat.",
    materials: ["Lacoste CVC", "Lacoste Cotton", "Pique"],
    colors: ["Navy", "Hitam", "Putih", "Merah", "Hijau Tua", "Abu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    timeline: "10–16 hari kerja",
  },
  {
    id: "sv-001", name: "Tote Bag Canvas Custom", category: "Souvenir", image: souvenir,
    spec: "Canvas 12oz · Sablon / DTF", moq: 24,
    description: "Tote bag canvas premium untuk souvenir event, seminar, dan merchandise.",
    materials: ["Canvas 12oz", "Canvas Blacu", "Drill"],
    colors: ["Natural", "Hitam", "Navy", "Maroon"],
    sizes: ["30x40 cm", "35x45 cm", "Custom"],
    timeline: "7–12 hari kerja",
  },
  {
    id: "k-002", name: "Kaos Oversize Streetwear", category: "Kaos", image: kaos,
    spec: "Cotton Combed 24s Heavy · Drop Shoulder", moq: 12,
    description: "Kaos oversize dengan potongan drop shoulder dan bahan tebal. Cocok untuk brand streetwear.",
    materials: ["Cotton Combed 24s", "Heavy Cotton 200gsm"],
    colors: ["Hitam", "Putih", "Cream", "Olive", "Washed"],
    sizes: ["M", "L", "XL", "XXL"],
    timeline: "10–14 hari kerja",
  },
  {
    id: "h-002", name: "Zip Hoodie Premium", category: "Hoodie", image: hoodieZip,
    spec: "Fleece 280 gsm · Resleting YKK", moq: 12,
    description: "Zip hoodie dengan resleting YKK premium dan bahan fleece nyaman.",
    materials: ["Fleece Cotton 280", "Fleece 320"],
    colors: ["Hitam", "Navy", "Abu", "Olive"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    timeline: "12–18 hari kerja",
  },
  {
    id: "ja-002", name: "Varsity Jacket Custom", category: "Jaket", image: jaketVarsity,
    spec: "Wool / Fleece · Lengan Kulit Sintetis", moq: 12,
    description: "Varsity jacket dengan patch bordir custom. Statement piece untuk komunitas dan tim.",
    materials: ["Fleece Heavy", "Wool Blend"],
    colors: ["Hitam-Putih", "Navy-Cream", "Maroon-Cream"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    timeline: "18–25 hari kerja",
  },
  {
    id: "p-002", name: "Polo Shirt Sport Performance", category: "Polo Shirt", image: polo,
    spec: "Dry-Fit Pique · Bordir / DTF", moq: 12,
    description: "Polo shirt sport dengan bahan dry-fit yang menyerap keringat.",
    materials: ["Dry-Fit Pique", "Lacoste Sport"],
    colors: ["Navy", "Hitam", "Merah", "Putih", "Abu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    timeline: "10–14 hari kerja",
  },
];

export const WHATSAPP_NUMBER = "6288991125343";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function productInquiryMessage(p: Product, opts?: { color?: string; size?: string; qty?: number; notes?: string }) {
  return `Halo Fauzi Design, saya ingin meminta penawaran untuk produk berikut:

• Produk: ${p.name}
• Kategori: ${p.category}
• Spesifikasi: ${p.spec}
${opts?.color ? `• Warna: ${opts.color}\n` : ""}${opts?.size ? `• Ukuran: ${opts.size}\n` : ""}${opts?.qty ? `• Jumlah: ${opts.qty} pcs\n` : ""}${opts?.notes ? `• Catatan: ${opts.notes}\n` : ""}
Mohon kirimkan quotation lengkap. Terima kasih.`;
}
