import { useEffect } from "react";

export const DarkMode = () => {
  useEffect(() => {
    function setTheme(theme) {
      //Get html element i.e root element;
      const root = document.documentElement;

      if (theme === "dark") {
        root.classList.remove("light");
        root.classList.add("dark");
      } else if (theme === "light") {
        root.classList.remove("dark");
        root.classList.add("light");
      } else {
        // 'system'
        root.classList.remove("dark", "light");
        // Apply based on system preference
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          root.classList.add("dark");
        } else {
          root.classList.add("light");
        }
      }
      // Persist choice in localStorage
      localStorage.setItem("theme", theme);
    } //Function End

    // Initialize theme on load
    const savedTheme = localStorage.getItem("theme") || "system";

    // Function Call
    setTheme(savedTheme);

    // Set the select to the saved value
    const selectRef = document.getElementById("theme-toggle");
    selectRef.value = savedTheme;

    // Listen for changes on the toggle
    selectRef.addEventListener("change", (e) => {
      setTheme(e.target.value);
    });

    // Optional: Listen for system theme changes (only when in 'system' mode)
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (localStorage.getItem("theme") === "system") {
          setTheme("system");
        }
      });
  }, []);

  return (
    <>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white box-border">
        <div className="p-4 border">
          <h1 className="text-2xl font-bold">Theme Toggle Demo</h1>
          <p className="mt-2">This paragraph changes based on the theme.</p>

          {/* Theme Toggle Select  */}
          <label htmlFor="theme-toggle" className="block mt-4 font-semibold">
            Choose Theme:
          </label>
          <select
            id="theme-toggle"
            className="mt-1 p-2 border rounded bg-white dark:bg-gray-600 text-black dark:text-white"
          >
            <option value="system">System (Auto)</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
      {/* <LogicCode ref={toggleTheme} /> */}
    </>
  );
};
