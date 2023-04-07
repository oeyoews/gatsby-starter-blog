import * as React from "react"
import { Link } from "gatsby"

import FullScreenToggle from "../components/full-screen-toggle"
import HomeShortcut from "./return-home"
import ProgressBar from "./progressbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home print:hidden" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
      </div>
      <FullScreenToggle />
      <HomeShortcut />
      <ProgressBar />
    </>
  )
}

export default Layout
