import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items, className = "" }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs font-medium ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.label} className="flex min-w-0 items-center gap-1.5">
            {i > 0 && <FontAwesomeIcon icon={faChevronRight} className="text-[8px] opacity-60" />}
            {c.href ? (
              <Link href={c.href} className="hover:underline">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="line-clamp-1 opacity-80">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
