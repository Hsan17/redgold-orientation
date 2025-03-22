
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-cream-gradient">
      <Navbar />
      <main className="flex-grow px-4 max-w-screen-2xl mx-auto w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
