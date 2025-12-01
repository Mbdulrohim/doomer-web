import { Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black text-center border-t border-gray-900">
      <div className="flex justify-center space-x-8 mb-8">
        <a href="#" className="text-gray-500 hover:text-white transition-colors">
          <Twitter size={24} />
        </a>
        <a href="#" className="text-gray-500 hover:text-white transition-colors">
          <Send size={24} />
        </a>
      </div>
      <p className="text-gray-600 text-sm font-mono">
        © 2025 DOOMER. No rights reserved. Nothing matters.
      </p>
    </footer>
  );
}
