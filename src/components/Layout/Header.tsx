import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 border-b bg-black/30 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      
   
      <Link
        to="/"
        className="flex items-center gap-2 font-semibold tracking-tight hover:opacity-90 "
      >
        CA Monk
      </Link>
  
     
      <Button
        size="sm"
        onClick={() => navigate("/create")}
        className="gap-2 rounded-full bg-blue-600 px-4 hover:bg-blue-700"
      >
        <Plus className="h-4 w-4 text-white" />
        <span className="hidden sm:inline text-white">New article</span>
      </Button>
  
    </div>
  </header>
  
  );
};

export default Header;
