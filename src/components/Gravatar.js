import * as React from "react"

export default function Gravatar() {
  return (
    <span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/oeyoews"
      >
        <img
          src="https://q1.qlogo.cn/g?b=qq&nk=2956398608&s=100"
          className="mx-2 h-4 rounded-full align-bottom"
          alt="avatar"
        />
      </a>
    </span>
  )
}

// or use md5
/* import md5 from 'md5';

function Gravatar(props) {
  const emailHash = md5(props.email.trim().toLowerCase());
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=${props.size}&d=${props.defaultImg}`;

  return (
    <img
      src={gravatarUrl}
      alt="Gravatar"
      width={props.size}
      height={props.size}
      className={props.className}
    />
  );
}

export default Gravatar; */
