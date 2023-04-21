import * as React from "react"
import useSound from "use-sound"
import boopSfx from "./click.wav"

// use timeout
export default function Gravatar() {
  const [play] = useSound(boopSfx)
  return (
    <span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/oeyoews"
        onClick={() => play()}
        role="button"
      >
        <img
          src="https://q1.qlogo.cn/g?b=qq&nk=2956398608&s=100"
          className="mx-2 h-4 rounded-full align-bottom shadow-lg transition duration-200 hover:scale-105"
          alt="avatar"
        />
      </a>
    </span>
  )
}
