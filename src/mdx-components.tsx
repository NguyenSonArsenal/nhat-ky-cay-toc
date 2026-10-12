import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";
import { Clip, Clips, Quote } from "@/components/post/clips";
import { slugify, textOf } from "@/lib/slugify";

// Kiểu chữ cho nội dung bài viết MDX. Heading có id để mục lục nhảy tới.
const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 id={slugify(textOf(children))} className="mt-12 mb-4 scroll-mt-28 text-2xl font-bold text-ink md:text-[28px]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 id={slugify(textOf(children))} className="mt-8 mb-3 scroll-mt-28 text-xl font-bold text-ink">
      {children}
    </h3>
  ),
  p: (props) => <p className="my-4 text-[17px] leading-[1.8]" {...props} />,
  ul: (props) => <ul className="my-4 list-disc space-y-2 pl-6 text-[17px] leading-[1.8] marker:text-primary" {...props} />,
  ol: (props) => <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.8] marker:font-bold marker:text-primary" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  a: ({ href = "", ...props }: ComponentProps<"a">) => (
    <a
      href={href}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
      {...props}
    />
  ),
  Clips,
  Clip,
  Quote,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
