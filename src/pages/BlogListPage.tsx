import React from "react";
import { useQuery } from "@tanstack/react-query";
import { blogAPI } from "@/services/Api";
import Header from "@/components/Layout/Header";
import BlogCard from "@/components/Blog/Blogcard";
import BlogCardSkeleton from "@/components/Blog/BlogCardSkeleton";
import { Alert, AlertDescription } from "@/components/ui/Alert";

const BlogListPage: React.FC = () => {
  const { data: blogs, isLoading, isError, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: blogAPI.getBlogs,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Latest Articles
          </h1>
          <p className="mt-2 text-gray-600">
            Finance, technology & career insights for modern CAs
          </p>
        </div>

        {/* Error */}
        {isError && (
          <Alert variant="destructive" className="mb-8">
            <AlertDescription>
              {error instanceof Error ? error.message : "Failed to load blogs"}
            </AlertDescription>
          </Alert>
        )}

        {/* Grid */}
        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogListPage;
