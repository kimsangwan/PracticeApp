import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import data from "./dv/dummyTableData"
import axios from "axios"

function Detail(asd) {
  let { id } = useParams()
  // console.log(data);
  const [list, setList] = useState(data)
  const [열기버튼, 닫기버튼] = useState(false)
  const [열기버튼3, 닫기버튼4] = useState(false)
  const [좋아요, 좋아요변경] = useState(0)
  // console.log(list);

  // function getList(){
  //   return(

  //   )
  // }
  // function test() {
  //   const testArr = list.filter((arry) => ar  ry.id === id);
  // }
  // test();
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null)
        setUsers(null)
        // loading 상태를 true 로 바꿉니다.
        setLoading(true)
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        )
        setUsers(response.data) // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [])

  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다</div>
  if (!users) return null
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://placeimg.com/150/150/any" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">회원이름:{users[id].name} </h4>
          <p>사는도시:{users[id].company.name}</p>
          <p>배송코드:{users[id].address.zipcode}</p>
          <button
            onClick={() => {
              좋아요변경(좋아요 + 2)
            }}
            className="btn btn-danger"
          >
            제품수량 +
          </button>
          {좋아요}
          <button
            onClick={() => {
              좋아요변경(좋아요 - 1)
            }}
            className="btn btn-danger"
          >
            재품수량 -
          </button>

          <button
            onClick={() => {
              닫기버튼(!열기버튼)
            }}
            className="btn btn-danger"
          >
            {열기버튼 ? "재고확인닫기" : "재고확인열기"}
          </button>
          {열기버튼 === true ? <span>열렸다구</span> : null}
          <button
            onClick={() => {
              닫기버튼4(!열기버튼3)
            }}
            className="btn btn-danger"
          >
            {열기버튼3 ? "닫기버튼" : "열기버튼"}
          </button>

          {열기버튼3 === true ? <span>열렸다구</span> : null}
        </div>
      </div>
    </div>
  )
}

export default Detail
