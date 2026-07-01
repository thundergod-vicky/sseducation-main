import { useEffect } from "react";

export function useJsonLd(schemaData: Record<string, any> | Array<Record<string, any>>) {
  useEffect(() => {
    const scriptId = "dynamic-json-ld-schema";
    
    // Remove any existing script tag with this ID
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Create a new script tag
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);

    // Append to head
    document.head.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schemaData]);
}
