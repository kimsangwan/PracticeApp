import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Sidebar } from "react-feather"
import "./layout.css"

function SideHeader() {
  const [스위치, 스위치변경] = useState(false)

  const onClickEvent2 = () => {
    스위치변경(!스위치)
  }

  return (
    <div className="mainbar" style={{ width: 스위치 ? 180 : 100 }}>
      <div onClick={() => 스위치변경(!스위치)}>
        {" "}
        {스위치 ? (
          <i class="far fa-arrow-alt-circle-left"></i>
        ) : (
          <i class="far fa-arrow-alt-circle-right"></i>
        )}{" "}
      </div>
      {/* //위의의미 !는 의반대라는뜻 현재값은 true 그래서 반대 거짓일 때 > */}
      <ul className="Mainul">
        <li className="limenu">
          <Link to="/">
            <div className="nav-t">
              <i class="fas fa-home">{!스위치 ? "" : " 홈"}</i>
            </div>
          </Link>
          <li className="limenu">
            <Link to="/login">
              <div className="nav-t">
                {" "}
                <i class="fas fa-sign-in-alt"></i>
                {!스위치 ? "" : "로그인"}
              </div>
            </Link>
          </li>

          <li className="limenu">
            <Link to="/table" onClick={onclick}>
              <div className="nav-t">
                <i class="fas fa-user"></i>
                {!스위치 ? "" : "회원관리"}
              </div>
            </Link>
          </li>
          <li className="limenu">
            <Link to="/table2" onClick={onclick}>
              <div className="nav-t">
                <i class="far fa-check-circle"></i> {!스위치 ? "" : "메뉴관리"}
              </div>
            </Link>
          </li>
        </li>
        <li className="limenu">
          <Link to="/detapic">
            <div className="nav-t">
              {" "}
              <i className="fa fa-calendar-o"></i>
              {!스위치 ? "" : "일정관리"}
            </div>
          </Link>
        </li>
        <li className="limenu">
          <Link to="/upload">
            <div className="nav-t">
              {" "}
              <i class="fas fa-upload"></i>
              {!스위치 ? "" : "업로드 존"}
            </div>
          </Link>
        </li>
        <li className="limenu">
          <Link to="/blogPost">
            <div className="nav-t">
              {" "}
              <i class="fas fa-blog"></i>
              {!스위치 ? "" : "blog"}
            </div>
          </Link>
        </li>
        <li className="limenu">
          <Link to="/googlemap">
            <div className="nav-t">
              {" "}
              <i class="fas fa-map-marked-alt"></i>
              {!스위치 ? "" : "Map"}
            </div>
          </Link>
        </li>
        <li className="limenu">
          <Link to="/signup">
            <div className="nav-t">
              {" "}
              <i class="fas fa-user-plus"></i>
              {!스위치 ? "" : "signup"}
            </div>
          </Link>
        </li>
        <li className="limenu">
          <Link to="/eventCharts">
            <div className="nav-t">
              {" "}
              <i class="fas fa-chart-bar"></i>
              {!스위치 ? "" : "chart"}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default SideHeader
