import React, { useState, useEffect } from "react"

import axios from "axios"

const Notice = () => {
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
    <>
      <div className="title">
        <div className="content-title">데이터 테이블 바인딩</div>
      </div>
      <div className="content-body">
        <div className="table-title">
          <span>Search : &nbsp;</span>
          <input />
        </div>
        <table className="table-01">
          <thead>
            <tr>
              <td>이름</td>
              <td>사는동네</td>
              <td>세부주소</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.address?.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Notice
