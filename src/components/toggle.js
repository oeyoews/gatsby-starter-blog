import React, { useState, useEffect } from "react"

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("mode")
    if (savedMode) {
      setIsDarkMode(savedMode === "dark")
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true)
    }
  }, [])

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem("mode", isDarkMode ? "light" : "dark")
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      className="rounded-full bg-gray-200 p-2 dark:bg-gray-800"
      onClick={handleToggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-600 dark:text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isDarkMode ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M12 5l7 7-7 7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 12H5"
          />
        )}
      </svg>
    </button>
  )
}

export default Toggle
