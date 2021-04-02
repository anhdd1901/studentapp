import style from "./SearchBar.module.css";

import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function SearchBar({ clickSearch }) {
  const [searchIndex, setSearchIndex] = useState("");
  const inputSearchIndex = (index) => {
    setSearchIndex(index);
  };
  return (
    <div className={style.all}>
      <input
        onChange={(e) => inputSearchIndex(e.target.value)}
        onKeyPress={(e) => {
          if ((e.key === "Enter")) clickSearch(e.target.value);
        }}
        placeholder="Tìm kiếm"
      ></input>
      <button onClick={() => clickSearch(searchIndex)}>
        <SearchOutlined style={{ color: "white" }} />
      </button>
    </div>
  );
}
