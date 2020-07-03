import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

function Realhard() {
  return (
    <div class="navbar_total">
      <nav class="navbar">
        <div class="navbar__logo">
          <i class="fab fa-accusoft"></i>
          luminas
        </div>

        <ul class="navbar__menu">
          <li>
            <Link
              className="headerlk"
              to="http//:
            www.naver.com"
            >
              Home
            </Link>
          </li>
          <li>
            <Link className="headerlk" to="/login">
              LOGIN
            </Link>
          </li>
          <li>
            <Link className="headerlk" to="/table">
              MEMBER
            </Link>
          </li>
          <li>
            <Link className="headerlk" to="/table2">
              Category table
            </Link>
          </li>
        </ul>

        <div class="navbar__icon">
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
        </div>
      </nav>
    </div>
  )
}
export default Realhard
