import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
}

export function useSeo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
  }, [title, description]);
}
