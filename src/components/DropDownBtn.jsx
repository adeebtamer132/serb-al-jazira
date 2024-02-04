import { useEffect, useState } from "react";
import { PagesContent } from "../utils/DB";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(false);
    console.log("helo");
  }, []);
  return (
    <div className="relative inline z-[100] m-auto ">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2   text-sm font-medium rounded-md text-white   focus:outline-none  "
      >
        Business
        <svg
          className={`ml-2 h-5 w-5 ${isOpen ? "transform rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-48 mt-2 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
          {PagesContent.map((page) => (
            <a
              key={page.name}
              href={`#pages/${page.slug}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {page.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
