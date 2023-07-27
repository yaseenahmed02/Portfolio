import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    function handleScroll() {
      const footer = document.getElementById("main-footer");
      const isAtBottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

      if (isAtBottom) {
        footer.classList.remove("hidden");
      } else {
        footer.classList.add("hidden");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="main-footer"
      className="py-8 bg-royalBlue text-white text-center fixed bottom-0 w-full hidden" // Add "hidden" class here
    >
      © {new Date().getFullYear()} Yaseen Ahmed. All rights reserved.
    </footer>
  );
};

export default Footer;
