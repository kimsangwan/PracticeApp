import React from "react"

const Header = ({ setCollapsed, collapsed }) => {
  return (
    <div className="header-wrapper">
      <div className="logo-area">로고영역</div>
      <div onClick={() => setCollapsed(!collapsed)}>{collapsed ? ">" : "<"}</div>
    </div>
  )
}

export default Header
