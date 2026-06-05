import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Global fetch interceptor to sync lead submissions to Google Sheet
const originalFetch = window.fetch;
window.fetch = function (input, init) {
  const isGoogleForm = typeof input === "string" && input.includes("docs.google.com/forms/d/e/");
  
  if (isGoogleForm && init && init.body instanceof FormData) {
    const formData = init.body;
    
    // Extract values dynamically based on potential entry ID mappings
    const name = (formData.get("entry.1502716309") || formData.get("entry.705613120") || "").toString();
    const phone = (formData.get("entry.1202722742") || formData.get("entry.1573872320") || "").toString();
    const email = (formData.get("entry.267493369") || formData.get("entry.1062801902") || "").toString();
    const state = (formData.get("entry.921865976") || formData.get("entry.559204619") || "").toString();
    const courseBranch = (formData.get("entry.85122333") || formData.get("entry.1687284002") || "").toString();
    const source = window.location.pathname;

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzpHEu518mPQCO3BhoShXh-ghKhN6NxaNv7aKcf1u-tNnwZAx0yPd8FUPES4rl4jl6p/exec";

    const params = new URLSearchParams({
      name,
      phone,
      email,
      state,
      courseBranch,
      source
    });

    originalFetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params
    }).catch((err) => {
      console.error("Failed to sync lead to Google Sheet:", err);
    });
  }

  return originalFetch.apply(this, arguments as any);
};

createRoot(document.getElementById("root")!).render(<App />);

