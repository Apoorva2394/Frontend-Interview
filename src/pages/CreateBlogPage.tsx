import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { blogAPI } from "@/services/Api";
import Header from "@/components/Layout/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Alert, AlertDescription } from "@/components/ui/Alert";

const CreateBlogPage: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    title: "",
    description: "",
    coverImage: "",
    content: "",
  });

  const mutation = useMutation({
    mutationFn: blogAPI.createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form as any);
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-50">
  <Header />

  <main className="mx-auto max-w-3xl px-4 py-14">
    <Card className="rounded-3xl border border-slate-200 bg-white/90 shadow-lg backdrop-blur">
      
      {/* Header */}
      <CardHeader className="space-y-2 border-b border-slate-100 pb-6">
        <CardTitle className="text-3xl font-bold tracking-tight text-slate-900">
          Create Blog Post
        </CardTitle>
        <p className="max-w-md text-sm leading-relaxed text-slate-600">
          Share your knowledge with the CA Monk community and help others grow.
        </p>
      </CardHeader>

      {/* Content */}
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-7">
          
          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Title
            </label>
            <Input
              name="title"
              onChange={handleChange}
              placeholder="Enter a clear, engaging title"
              className="h-11 rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Description
            </label>
            <Textarea
              name="description"
              rows={3}
              onChange={handleChange}
              placeholder="Brief summary of your article"
              className="rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Cover Image */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Cover Image URL
            </label>
            <Input
              name="coverImage"
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="h-11 rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Content
            </label>
            <Textarea
              name="content"
              rows={12}
              onChange={handleChange}
              placeholder="Write your article content here..."
              className="rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Error */}
          {mutation.isError && (
            <Alert
              variant="destructive"
              className="rounded-xl border-red-200 bg-red-50"
            >
              <AlertDescription>
                Failed to create blog. Please try again.
              </AlertDescription>
            </Alert>
          )}

          {/* Actions */}
         <div className="flex justify-end gap-3 pt-6">
   <Button
    type="button"   
    variant="outline"
    onClick={() => navigate("/")}
    className="rounded-full px-6"
  >
    Cancel
  </Button>

  <Button
    type="submit"
    className="rounded-full bg-blue-600 px-6 text-white hover:bg-blue-700"
  >
    {mutation.isPending ? "Publishing..." : "Publish Article"}
  </Button>
</div>

        </form>
      </CardContent>
    </Card>
  </main>
</div>

  );
};

export default CreateBlogPage;
