import React from "react";

export default function Footer() {
  return (
    <footer className="bg-peach-600 text-white text-center py-6 mt-16">
      <p className="text-sm">&copy; {new Date().getFullYear()} Jharkhand Tourism Guide. All rights reserved.</p>
    </footer>
  );
}
