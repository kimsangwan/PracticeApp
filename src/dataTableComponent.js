import React, { Fragment, useContext } from "react"
import data from "./dv/dummyTableData"
// import Datatable from "./dv/datatable";
import DataTable from "react-data-table-component"
import Pagination from "./LayoutComponent/Pagination"
import { Link } from "react-router-dom"

import "./layout.css"

const columns = [
  {
    name: "id",
    selector: "id",
    sortable: true,
    cell: (row) => (
      // 데이터테이블의 아이디속성값을 링크로만든것
      <Link to={"/detail/" + row.id} data={row.id}>
        {row.id}
      </Link>
    ),
  },
  {
    name: "name",
    selector: "name",
    sortable: true,
    right: true,
    cell: (row) => (
      // 데이터테이블의 아이디속성값을 링크로만든것
      <Link to={"/detail/" + row.id} data={row.id}>
        {row.name}
      </Link>
    ),
  },

  {
    name: "status",
    selector: "status",
    sortable: true,
  },
  {
    name: "creat_on",
    selector: "creat_on",
    sortable: true,
    right: true,
  },
]
const dummyData = [
  {
    id: "test1",
    name: "test1",
    status: "test1",
    creat_on: "test1",
  },
  {
    id: "test2",
    name: "test2",
    status: "test2",
    creat_on: "test2",
  },
  {
    id: "test3",
    name: "test3",
    status: "test3",
    creat_on: "test3",
  },
]

function DataTableComponent() {
  const [text, setText] = React.useState("")
  const [subData, setSubData] = React.useState(data)
  // 2. 함수를 하나 만들어서
  // 3. 처음에 페이지가 로드되었을때 getItem이 !== null 이면 그대로 실행
  // 4. null이면 setItem 으로 지정
  localStorage.setItem("bordData", JSON.stringify(subData))
  const onPressFilter = () => {
    const filter = data.filter((d) => d.name.indexOf(text) > -1)
    setSubData(filter)
  }
  // console.log(data.map((a) => a.name));
  return (
    <Fragment>
      <div className="notecontent">공지사항</div>
      <div className="bd">
        <Link className="notelink" to="./ck5editer">
          동록
        </Link>
      </div>
      <div className="tablesiz">
        <div className="card-header">
          <h5>Delete Single Data</h5>
        </div>
        <div className="Serchbar">
          <input
            placeholder="검색어를입력하세요"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onPressFilter()
              }
            }}
          />
          <button onClick={onPressFilter}>검색</button>
          <Link className="notelink" to="./noticee">
            검색
          </Link>
        </div>
        {/* <div className="card-body datatable-react"> */}
        <DataTable
          // multiSelectOption={true}
          // myData={data}
          // pageSize={6}
          // pagination={false}
          // class="-striped -highlight"
          columns={columns}
          data={subData}
        />

        {/* </div> */}
        <div></div>
        <div>
          <Pagination data={dummyData} />
        </div>
      </div>
    </Fragment>
  )
}

export default DataTableComponent
