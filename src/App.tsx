import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage.tsx';
import CreateBlogPage from './pages/CreateBlogPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-500">
        <Routes>
          <Route path="/" element={<BlogListPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/create" element={<CreateBlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;