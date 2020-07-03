import React from "React";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

function Jp() {
  return (
    <Jumbotron className="backgroundJ">
      <h1>이곳은 관리자페이지입니다</h1>
      <p>관리하는페이지</p>
      <p>
        <Link to="/login" class="myButton">
          관리자로그인
        </Link>
      </p>
    </Jumbotron>
  );
}

export default Jp;
