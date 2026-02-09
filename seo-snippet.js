// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.vibehk.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.vibehk.com/","title_tag":"VIBE Book Shop Mui Wo & Vinyl Records Hong Kong | vibehk","meta_description":"VIBE Book Shop Mui Wo for Books and Music Lantau, new books, used books, new vinyl records, used vinyl records, DVDs in Silvermine Bay and hi-fi equipment on Lantau Island."},{"page_url":"https://www.vibehk.com/about","title_tag":"About VIBE Book Shop Mui Wo & Gary Brightman | vibehk","meta_description":"Discover VIBE Book Shop Mui Wo on Lantau Island, run by Gary Brightman, selling new books, used books, vinyl records, DVDs and supporting local artisans in Hong Kong."},{"page_url":"https://www.vibehk.com/media","title_tag":"Music Store Lantau Island & Vinyl Records Hong Kong | vibehk","meta_description":"Explore media at VIBE, the Music Store Lantau Island for CDs, DVDs in Silvermine Bay, new vinyl records, used vinyl records and Books and Music Lantau culture."},{"page_url":"https://www.vibehk.com/viberations-podcasts","title_tag":"VIBErations mui wo podcast & Hong Kong authors | vibehk","meta_description":"Listen to VIBErations mui wo podcast featuring Hong Kong authors, local artisans Mui Wo and special interest books Hong Kong recorded at VIBE Book Shop Mui Wo."},{"page_url":"https://www.vibehk.com/videos","title_tag":"Tiny Desk gigs & Events at VIBE Book Shop Mui Wo | vibehk","meta_description":"Watch Tiny Desk gigs, live music, author talks and events from VIBE Book Shop Mui Wo, a hub for Books and Music Lantau and what to do in Mui Wo."},{"page_url":"https://www.vibehk.com/press","title_tag":"Press on VIBE Book Shop Mui Wo & Vinyl Records | vibehk","meta_description":"Read press on VIBE Book Shop Mui Wo, a Music Store Lantau Island known for used books, used vinyl records, Hong Kong authors and local community events."},{"page_url":"https://www.vibehk.com/wall-of-fame","title_tag":"Events Wall of Fame at VIBE Book Shop Mui Wo | vibehk","meta_description":"Browse the Wall of Fame with photos from Tiny Desk gigs, music events and author talks at VIBE Book Shop Mui Wo, a key spot for what to do on Lantau Island."},{"page_url":"https://www.vibehk.com/manbright-films","title_tag":"Film and Photography Lantau & ManBright Films | vibehk","meta_description":"Explore ManBright Films by Gary Brightman for film and photography Lantau, documentaries and The Helper DVD, available at VIBE Book Shop Mui Wo in Hong Kong."},{"page_url":"https://www.vibehk.com/newsletters","title_tag":"VIBE Newsletters Books and Music Lantau Island | vibehk","meta_description":"Download VIBE newsletters for updates on Books and Music Lantau, Tiny Desk gigs, author talks, new books, vinyl records Hong Kong and events in Mui Wo."}],"keywords":["VIBE Book Shop Mui Wo","Music Store Lantau Island","Vinyl Records Hong Kong","DVDs in Silvermine Bay","Books and Music Lantau","Local Artisans Mui Wo","Educational Materials Hong Kong","Film and Photography Lantau","Special Interest Books Hong Kong","VIBE Merchandise Mui Wo","Hi-fi Equipment Lantau Island","Used Books","Used Vinyl Records","New Vinyl Records","New Books","Hong Kong Authors","Audio Speakers","Audio Amplifiers","Gift Cards Lantau Island","Wrapping Paper Lantau Island","What to do in Mui Wo","What to do on Lantau Island","vibehk","Gary Brightman","Tiny Desk Gigs","Author Talks","Mui Wo Podcast"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "BookStore",
  "@id": "https://www.vibehk.com/#bookstore",
  "url": "https://www.vibehk.com/",
  "name": "VIBE Book and Music Shop",
  "description": "VIBE Book and Music Shop in Silvermine Bay, Mui Wo, Lantau Island, Hong Kong. English, Chinese and foreign books, Vinyl LPs, CDs, DVDs, record turntables, stationery, merchandise and other cool stuff.",
  "image": [
    "https://static.wixstatic.com/media/c3d4b3_6c52a81289a5466a8862e7a826569335~mv2.png/v1/fill/w_479,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Vibe-02%20Red-Black%20Trim%20large%20800x600%20cop.png",
    "https://static.wixstatic.com/media/c3d4b3_503bb837ea884d8a919563f970254519~mv2.jpg/v1/fill/w_1177,h_884,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vibe%20for%20website.jpg",
    "https://static.wixstatic.com/media/c3d4b3_2a8f85cf82424164b2e7473d0cef6e77~mv2.jpeg/v1/fill/w_1467,h_1014,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/VIBE%20by%20steve%20house%20FINAL1.jpeg"
  ],
  "logo": "https://static.wixstatic.com/media/c3d4b3_927bd3b001184ed89e07b6ccccbe3520%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/c3d4b3_927bd3b001184ed89e07b6ccccbe3520%7Emv2.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Silver Centre, Shop E, Silvermine Bay, Mui Wo, Lantau Island",
    "addressLocality": "Hong Kong",
    "addressCountry": "HK"
  },
  "telephone": "+852 9574 5820",
  "email": "vibehk@icloud.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "12:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com",
    "https://www.instagram.com"
  ],
  "founder": {
    "@type": "Person",
    "name": "Gary Brightman"
  },
  "foundingDate": "2018-05",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Lantau Island, Hong Kong"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
