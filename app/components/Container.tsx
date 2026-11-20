import { ElementType, ReactNode } from "react";

interface containerProps {
  children: ReactNode;
  style?: string;
  id?: string;
  /** Rendered element. Use "div" when it's already inside a <section>/<footer>. */
  as?: ElementType;
}

export default function Container({
  children,
  style = "",
  id,
  as: Tag = "section",
}: containerProps) {
  const styleTags = `max-w-[1440px] w-full mx-auto px-20 max-md:px-4 ${style}`;
  return (
    <Tag className={styleTags} id={id}>
      {children}
    </Tag>
  );
}
