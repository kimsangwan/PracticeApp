import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import "./style.css";
import { Link, useHistory } from "react-router-dom";

function Bener() {
  const history = useHistory();
  return (
    <Jumbotron className="Jumbotron">
      <h1>WlleCome admim page</h1>
      <p>This is adim pyage example</p>
      <p>
        <Button
          variant="primary"
          onClick={() => {
            history.push("/login");
          }}
        >
          Adim Login 바로가기
        </Button>
      </p>
    </Jumbotron>
  );
}
export default Bener;
