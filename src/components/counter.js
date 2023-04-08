import React, { useState } from "react"
import { AiOutlineHeart } from "react-icons/ai"

export default function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    if (count < 10) setCount(count + 1)
  }
  return (
    <div className="flex items-center justify-center">
      <AiOutlineHeart
        color="red"
        onClick={handleClick}
        className="hove:scale-125 mt-2 inline-block transition duration-200  hover:shadow-lg"
      />
    </div>
  )
}
