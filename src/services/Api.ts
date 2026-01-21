import { Blog, CreateBlogInput } from '@/types/Blog';

const API_BASE_URL = 'http://localhost:3000';

export const blogAPI = {
  // Get all blogs
  getBlogs: async (): Promise<Blog[]> => {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    return response.json();
  },

  // Get blog by ID
  getBlogById: async (id: string): Promise<Blog> => {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    return response.json();
  },

  // Create new blog
  createBlog: async (blogData: CreateBlogInput): Promise<Blog> => {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...blogData,
        date: new Date().toISOString(),
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to create blog');
    }
    return response.json();
  },
};