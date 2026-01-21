import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { blogAPI } from "@/services/Api";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Alert, AlertDescription } from "@/components/ui/Alert";
import { ArrowLeft } from "lucide-react";

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: blog, isLoading, isError, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => blogAPI.getBlogById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return <div className="min-h-screen bg-slate-50" />;
  }

  if (isError || !blog) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-12">
        <Alert variant="destructive" className="mx-auto max-w-3xl rounded-xl">
          <AlertDescription>
            {error instanceof Error ? error.message : "Blog not found"}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/40 to-slate-50">
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center px-4 py-3">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4">
        <article className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white/90 shadow-lg backdrop-blur">
          
          {/* Cover Image */}
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="h-72 w-full object-cover sm:h-80"
          />

          {/* Article Body */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {blog.categories.map((cat: string, i: number) => (
                <Badge
                  key={i}
                  className="rounded-full bg-blue-50 text-blue-700 border border-blue-200"
                >
                  {cat}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
              {blog.title}
            </h1>

            {/* Description */}
            <p className="text-lg leading-relaxed text-slate-700">
              {blog.description}
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-slate-200" />

            {/* Content */}
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-p:leading-relaxed">
              {blog.content.split("\n\n").map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogDetailPage;
