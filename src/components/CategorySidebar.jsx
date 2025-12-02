import React from "react";

const categories = [
  { id: "all", name: "All" },
  { id: "shoes", name: "Shoes" },
  { id: "speakers", name: "Speakers" },
  { id: "apparel", name: "Apparel" },
  { id: "electronics", name: "Electronics" },
  { id: "watches", name: "Watches" },
  { id: "bags", name: "Bags" },
  { id: "gaming", name: "Gaming" },
  { id: "laptops", name: "Laptops" },
  { id: "phones", name: "Phones" },
  { id: "accessories", name: "Accessories" },
  { id: "home", name: "Home Appliances" },
];

// Note: This component is designed to be placed inside a container that provides
// bg-[var(--surface)], rounded-xl, and shadow-luxe (as done in Products.jsx).
// We will focus on styling the internal elements.
const CategorySidebar = ({ active = "all", onSelect = () => {} }) => {
  return (
    // Removed fixed positioning and structural styling, as the parent (Products.jsx)
    // now wraps this in a beautifully styled dark container.
    <div className="overflow-y-auto"> 
      
      {/* The parent component handles the main heading, so we can focus on the list */}

      <ul className="flex flex-col gap-1">
        {categories.map((c) => (
          <li key={c.id}>
            <button
              onClick={() => onSelect(c.id)}
              className={`w-full text-left px-4 py-2 rounded-lg text-md transition-all duration-200 
                ${
                  // Active State: Use primary color for background and deep dark background for text
                  active === c.id
                    ? "bg-[var(--primary)] text-[var(--background)] font-bold shadow-md shadow-amber-900"
                    // Inactive State: Subtle hover effect and light text
                    : "hover:bg-[var(--background)] text-[var(--text-light)] hover:text-[var(--primary)] font-medium"
                }
              `}
            >
              {c.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;