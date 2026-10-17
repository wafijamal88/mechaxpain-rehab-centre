import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { articlesData } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const routes = [
    "",
    "/tentang-kami",
    "/perkhidmatan",
    "/artikel",
    "/hubungi",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/shipping-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.includes("-policy") || route.includes("terms") ? 0.5 : 0.8,
  }));

  // Dynamic service routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/perkhidmatan/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic article routes
  const articleRoutes = articlesData.map((article) => ({
    url: `${baseUrl}/artikel/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes, ...articleRoutes];
}
