import React from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
