import BlogDetails from "@/components/Blog-details";
import { getArticleBySlug, allArticles } from "@/data/blog-posts";

// Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Cleared Advisory",
      description: "The requested compliance insight article was not found.",
    };
  }

  return {
    title: `${article.title} | Cleared Advisory`,
    description: article.description,
  };
}

// Pre-render blog detail pages statically during build
export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Page component
export default async function Page({ params }) {
  const { slug } = await params;
  return <BlogDetails slug={slug} />;
}
