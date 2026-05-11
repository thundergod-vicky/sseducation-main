import { useEffect } from "react";
import { CollegePage } from "@/components/college/CollegePage";
import { COLLEGES, type CollegeConfig } from "@/data/colleges";

export const CollegeRoute = ({ configKey }: { configKey: keyof typeof COLLEGES }) => {
  const config: CollegeConfig = COLLEGES[configKey];
  useEffect(() => {
    document.title = config.seo.title;
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", config.seo.description);
    setMeta("og:title", config.seo.title, "property");
    setMeta("og:description", config.seo.description, "property");
  }, [config]);

  return <CollegePage config={config} />;
};

export default CollegeRoute;
