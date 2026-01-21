import React from "react";
import { Card, CardHeader, CardFooter } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

const BlogCardSkeleton: React.FC = () => (
  <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
    <Skeleton className="h-48 w-full rounded-none" />
    <CardHeader className="space-y-3 p-5">
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </CardHeader>
    <CardFooter className="border-t border-gray-100 bg-gray-50/50 px-5 py-3">
      <div className="flex gap-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
    </CardFooter>
  </Card>
);

export default BlogCardSkeleton;