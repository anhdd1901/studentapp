import style from "./List.module.css";
import Header from "./List-components/Header";
import SearchBar from "./List-components/SearchBar";
import StudentTag from "./List-components/StudentTag";
import { changePage } from "./../Actions/PaginationAtions";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "antd/dist/antd.css";
import Pagination from "antd/lib/pagination";

export default function List() {
  const dispatch = useDispatch();
  const [searchIndex, setSearchIndex] = React.useState("");
  const currentPage = useSelector((state) => state.Pagination.currentPage);
  const pageSize = useSelector((state) => state.Pagination.pageSize);
  const data = useSelector((state) => state.Students.allStudents).filter(
    (x) => {
      return (
        x.name.includes(searchIndex) || x.phoneNumber.includes(searchIndex)
      );
    }
  );
  const renderData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const clickChangePage = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };
  const clickSearch = (searchIndex) => {
    setSearchIndex(searchIndex);
  };

  return (
    <div className={style.all}>
      <Header />
      <SearchBar clickSearch={clickSearch} />
      {renderData.length === 0 ? (
        <div className={style.cantFind}>Không có dữ liệu nào</div>
      ) : (
        renderData.map((student) => {
          return <StudentTag key={student.id} studentInfo={student} />;
        })
      )}
      <Pagination
        style={{ marginTop: "20px" }}
        onChange={clickChangePage}
        Current={currentPage}
        total={data.length}
        pageSize={pageSize}
      />
    </div>
  );
}
