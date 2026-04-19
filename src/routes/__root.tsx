import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWA } from "@/components/FloatingWA";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="label-tag">[404]</p>
        <h1 className="font-display text-7xl text-foreground mt-2">Tersesat.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Halaman yang Anda cari tidak ditemukan.
        </p>
        <Link to="/" className="btn-tag btn-tag-primary mt-6">Kembali ke Beranda</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fauzi Design — Konveksi Custom Apparel Premium" },
      { name: "description", content: "Produksi custom kaos, kemeja PDH, jersey, seragam, jaket, hoodie, polo, dan souvenir untuk komunitas, perusahaan, dan event. Konsultasi gratis via WhatsApp." },
      { name: "author", content: "Fauzi Design" },
      { name: "theme-color", content: "#0d0e10" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
