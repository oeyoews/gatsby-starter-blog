import React, { useEffect } from "react"

function ProgressBar() {
  useEffect(() => {
    function progressbarListener() {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        window.addEventListener("scroll", function () {
          const pageHeight = window.document.documentElement.scrollHeight
          const windowHeight = window.innerHeight

          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop
          const denominator = pageHeight - windowHeight
          const scrollProgress =
            denominator !== 0 ? (scrollTop / denominator) * 100 : 0
          const progressBar = document.getElementById("page-progress-bar")
          progressBar.style.width = scrollProgress + "%"
        })
      }
    }
    progressbarListener()
  }, [])

  return (
    <div id="page-progress">
      <div id="page-progress-bar"></div>
    </div>
  )
}

export default ProgressBar
