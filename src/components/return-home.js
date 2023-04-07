import { useEffect } from "react"
import { navigate } from "gatsby"

const HomeShortcut = () => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === "h") {
        navigate("/")
      }
    }
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  return null
}

export default HomeShortcut
