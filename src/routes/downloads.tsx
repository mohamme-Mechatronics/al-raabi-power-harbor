import { createFileRoute, Link } from "@tanstack/react-router";
import logoWhiteAsset from "@/assets/brand/alraebi-logo-white.png.asset.json";
import appIconAsset from "@/assets/brand/icon-512.png.asset.json";

const logoWhite = logoWhiteAsset.url;
const appIcon = appIconAsset.url;

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "تحميل تطبيق الراعبي لويندوز" },
      {
        name: "description",
        content: "تحميل تطبيق الراعبي Desktop الخفيف لنظام ويندوز — أقل من 2 ميغابايت.",
      },
      { property: "og:title", content: "تحميل تطبيق الراعبي لويندوز" },
      {
        property: "og:description",
        content: "تطبيق سطح مكتب خفيف لويندوز 10 و11 بحجم أقل من 2 ميغابايت.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DownloadsPage,
});

function DownloadsPage() {
  return (
    <div dir="rtl" className="flex min-h-screen flex-col bg-background text-foreground">
      {/* شريط علوي بهوية الشركة */}
      <header className="bg-navy px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4">
          <img src={logoWhite} alt="الراعبي للتجارة — Al-Raebi For Trading" className="h-12 w-auto object-contain sm:h-14" />
          <Link
            to="/"
            className="rounded-full border border-skyline-foreground/30 px-4 py-2 text-xs font-bold text-skyline-foreground transition hover:bg-skyline-foreground/10 sm:text-sm"
          >
            فتح التطبيق
          </Link>
        </div>
      </header>

      {/* المحتوى: عمودان على الكمبيوتر وعمود واحد على الهاتف */}
      <main className="flex flex-1 items-center px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <section className="text-center lg:text-right">
            <h1 className="text-2xl font-black leading-tight text-navy sm:text-3xl lg:text-4xl">
              تطبيق الراعبي لويندوز
            </h1>
            <p className="mt-2 text-sm font-semibold text-muted-foreground sm:text-base">
              نسخة سطح المكتب — 64 بت
            </p>
            <ul className="mx-auto mt-6 max-w-md space-y-2.5 text-sm leading-6 text-muted-foreground sm:text-base lg:mx-0">
              <li className="flex items-start gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-energy" />
                حجم خفيف جداً: 1.6 ميغابايت فقط — لا يحتاج تثبيت.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-energy" />
                يعمل على ويندوز 10 و11، ويتحدّث تلقائياً بآخر نسخة.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-energy" />
                الفيديوهات والكتالوجات تُفتح عبر الإنترنت عند الحاجة.
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8">
            <div className="flex items-center gap-4">
              <img src={appIcon} alt="أيقونة تطبيق الراعبي" className="size-14 rounded-2xl object-contain sm:size-16" />
              <div className="min-w-0">
                <p className="text-sm font-black text-navy sm:text-base">Al-Raebi Desktop</p>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">ويندوز 10 و11 — 64 بت</p>
              </div>
            </div>

            <a
              href="/downloads/ACTES-windows-x64.zip"
              download
              className="mt-6 block w-full rounded-xl bg-energy py-4 text-center text-base font-black text-primary-foreground transition hover:opacity-90 sm:text-lg"
            >
              تحميل التطبيق
            </a>

            <p className="mt-5 text-center text-xs leading-5 text-muted-foreground">
              فُكّ ضغط الملف ثم شغّل <span className="font-mono">Al-Raebi.exe</span>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border px-5 py-4 text-center text-[11px] font-bold text-muted-foreground sm:px-8">
        معاً نحو طاقة مستدامة — جميع الحقوق محفوظة © 2026 الراعبي للتجارة
      </footer>
    </div>
  );
}
