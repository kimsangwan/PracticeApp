import React, { useState, useEffect } from "react";
import "../assets/css/pagination.css";

const Pagination = ({ data }) => {
  // // datatable select
  const [per, setPer] = useState(20);
  // pagination initialState
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState({
    start: 0,
    end: 10,
    current: 1,
  });

  // pagination test 를 위한 + 50
  const total = Math.ceil((data.length + 50) / per);
  const array = [];
  for (let i = 0; i < total; i++) {
    array.push(i + 1);
  }

  useEffect(() => {
    setArr(array.slice(page.start, page.end));
  }, [per]);

  // pagination ++
  const onPageUp = () => {
    if (page.current < arr[arr.length - 1]) {
      setPage({ ...page, current: page.current + 1 });
    } else if (page.current % page.end === 0 && page.end < total) {
      setPage({
        start: page.start + 1,
        end: page.end + 1,
        current: page.current + 1,
      });
      setArr(array.slice(page.start + 1, page.end + 1));
    }
  };
  // pagination --
  const onPageDown = () => {
    if (page.current > arr[0]) {
      setPage({ ...page, current: page.current - 1 });
    } else if (page.current % arr[0] === 0 && page.start >= 1) {
      setPage({
        start: page.start - 1,
        end: page.end - 1,
        current: page.current - 1,
      });
      setArr(array.slice(page.start - 1, page.end - 1));
    }
  };

  return (
    <div className="pagination-wrapper">
      Displaying &#123; 1 - {data.length} &#125; of &#123; {data.length} &#125;
      records
      <div className="pagination-total">
        <select value={per} onChange={(e) => setPer(e.target.value)}>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <ul className="pagination">
          <li
            onClick={onPageDown}
            className={page.current === arr[0] ? "disable" : ""}
          >
            이전
          </li>
          {arr.map((val) => (
            <li
              key={val}
              className={page.current === val ? "focus" : ""}
              onClick={() => setPage({ ...page, current: val })}
            >
              {val}
            </li>
          ))}
          <li
            onClick={onPageUp}
            className={page.current === arr.length ? "disable" : ""}
          >
            다음
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
