import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Blog } from "@/types/Blog";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const navigate = useNavigate();

  const formatDate = (dateString?: string): string => {
    if (!dateString) return "Unknown date";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const categories = Array.isArray(blog.categories)
    ? blog.categories.slice(0, 2)
    : [];

  return (
    <Card
      onClick={() => navigate(`/blog/${blog.id}`)}
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-300"
    >
      {/* Cover Image */}
      <div className="relative aspect-16/9 w-full overflow-hidden bg-gray-100">
        <img
          src={blog.coverImage || "/placeholder.jpg"}
          alt={blog.title || "Blog cover"}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Hover Icon */}
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-blue-600" />
        </div>
      </div>

      {/* Content */}
      <CardHeader className="space-y-3 p-4">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700"
              >
                {cat}
              </Badge>
            ))}
          </div>
        )}

        {/* Title */}
        <CardTitle className="line-clamp-2 text-lg font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-600">
          {blog.title || "Untitled Blog"}
        </CardTitle>

        {/* Description */}
        <CardDescription className="line-clamp-2 text-sm leading-relaxed text-gray-600">
          {blog.description || "No description available for this article."}
        </CardDescription>
      </CardHeader>

      {/* Footer */}
      <CardFooter className="flex items-center gap-3 border-t border-gray-100 bg-gray-50/50 px-4 py-2.5 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          <span className="font-medium">{formatDate(blog.date)}</span>
        </div>
        <div className="h-1 w-1 rounded-full bg-gray-300" />
        <div className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          <span className="font-medium">5 min</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
