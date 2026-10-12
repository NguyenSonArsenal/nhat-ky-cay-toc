import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { NavLinks } from "@/components/layout/nav-links";
import { site } from "@/config/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-extrabold text-white">NK</span>
      <span className="leading-tight">
        <span className="block font-bold text-ink">{site.name}</span>
        <span className="block text-[11px] text-muted">Kể thật, từng ngày một</span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-8">
          <Logo />
          <NavLinks className="hidden items-center gap-1 text-sm font-medium lg:flex" />
        </div>
        <div className="flex items-center gap-2">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kết nối Facebook"
            className="group inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-white p-1.5 text-sm font-semibold text-ink transition hover:border-primary hover:bg-primary-soft hover:text-primary sm:py-1.5 sm:pr-4 sm:pl-1.5"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span className="hidden sm:inline">Kết nối Facebook</span>
          </a>
          <Link
            href="/#uu-dai"
            className="hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark sm:inline-flex"
          >
            Nhận mã ưu đãi
          </Link>
        </div>
      </div>
      <NavLinks className="flex gap-1 overflow-x-auto px-2.5 pb-2 text-sm font-medium lg:hidden" />
    </header>
  );
}
