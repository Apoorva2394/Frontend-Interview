import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

const BlogDetailSkeleton: React.FC = () => (
  <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
    <Skeleton className="mb-8 h-64 w-full rounded-2xl sm:h-80 md:h-96" />
    <div className="mb-6 flex gap-2">
      <Skeleton className="h-7 w-20 rounded-full" />
      <Skeleton className="h-7 w-24 rounded-full" />
    </div>
    <Skeleton className="mb-6 h-12 w-full sm:h-14" />
    <Skeleton className="mb-2 h-12 w-3/4 sm:h-14" />
    <div className="mb-8 flex gap-4 border-b pb-6">
      <Skeleton className="h-5 w-32" />
      <Skeleton className="h-5 w-24" />
    </div>
    <Skeleton className="mb-4 h-24 w-full rounded-2xl" />
    <Skeleton className="mb-2 h-4 w-full" />
    <Skeleton className="mb-2 h-4 w-full" />
    <Skeleton className="mb-2 h-4 w-3/4" />
  </div>
);

export default BlogDetailSkeleton;