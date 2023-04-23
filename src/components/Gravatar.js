import * as React from "react"
import useSound from "use-sound"
import boopSfx from "./pop.mp3"

export default function Gravatar({ email = "2956398608", user = "oeyoews" }) {
  const [play] = useSound(boopSfx)
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/${user}`}
        onClick={() => play()}
        role="button"
      >
        <img
          src={`https://q1.qlogo.cn/g?b=qq&nk=${email}&s=100`}
          className="mx-2 h-4 rounded-full align-bottom shadow-lg transition duration-200 hover:scale-125"
          alt="avatar"
        />
      </a>
    </div>
  )
}
