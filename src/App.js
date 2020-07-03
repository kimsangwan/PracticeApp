import React, { useState } from "react"
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"

import SideHeader from "./SideHeader"
import { Link, Route, Switch, useHistory, Redirect } from "react-router-dom"
import Login from "./login"
import Dtb from "./dataTableComponent"
import DatatablePage from "./datat2"
import Te from "./CkEditer"
import Detail from "./Detail"
import Realhard from "./Realhard"
import Bener from "./bener"
import Datepickere from "./Datepic/datepickerComponent"
import Dropz from "./Dropzone/dropzone"
import BlogPost from "./Posting/blogPost"
import GoogleMap from "./map/googleMap"
import EventCharts from "./Chat/eventCharts"
import ToastEditor from "./Tost/ToastEditor"
import PaginationComponent from "./paginateion/pagination"
// import Chat from "./Chat/chat";
import Signin from "./signup/signup"
import Notice from "./Notice"
function App() {
  return (
    <div className="App">
      {/* //헤더시작 */}
      {/* <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/table">
            DAtatable
          </Nav.Link>
          <Nav.Link href="/login">관리자 로그인</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        <p></p>
      </Navbar> */}
      {/* //헤더 끝
      <Route path="/" /> } */}

      <SideHeader />
      <Realhard />

      <div className="content">
        <>
          <Bener />
          {/* <PaginationComponent></PaginationComponent> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/table" component={DatatablePage} />
          <Route exact path="/ck5editer" component={Te} />
          <Route exact path="/table2" component={Dtb} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detapic" component={Datepickere} />
          <Route path="/upload" component={Dropz} />
          <Route path="/blogPost" component={BlogPost} />
          <Route path="/googlemap" component={GoogleMap} />
          <Route path="/signup" component={Signin} />
          <Route path="/eventCharts" component={EventCharts} />
          <Route path="/notice" component={Notice} />
          <Route path="/toastEditor" component={ToastEditor} />
          {/* <Route path="/chat" component={Chat} /> */}
        </>
      </div>
    </div>
  )
}

export default App
