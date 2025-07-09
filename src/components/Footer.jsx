import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 text-center text-sm text-gray-600 border-t pt-6 pb-6 sm:pb-4">
      <p>
        Made with 💻 by{" "}
        <a
          href="https://github.com/thebalayogesh/bad-word-app"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @thebalayogesh
        </a>{" "}
        • <span className="text-gray-400">Open Source on GitHub</span>
      </p>
    </footer>
  );
};

export default Footer;
