import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import { ChatBubble } from "@/components/layout/chat-bubble";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { site } from "@/config/site";
import "./globals.css";

// CSS của Font Awesome đã import ở trên, không cho nó tự chèn thêm lúc chạy
config.autoAddCss = false;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Nhật ký cấy tóc tự thân của một người bình thường: ảnh thật từng mốc, rụng sốc, tóc mọc lại, kinh nghiệm và mã giảm 3 triệu khi cấy tóc.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" data-theme={site.theme} className={`${inter.variable} ${dancing.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCtaBar />
        <ChatBubble />
        <ScrollToTop />
      </body>
    </html>
  );
}
