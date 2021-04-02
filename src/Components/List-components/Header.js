import style from "./Header.module.css";
import "antd/dist/antd.css";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "antd/lib/button";
import { PlusOutlined } from "@ant-design/icons";

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className={style.all}>
      <div>Quản lý sinh viên</div>
      <Button
        onClick={() => {
          history.push("/add-new-student");
        }}
        style={{ borderRadius: "10px" }}
        style={{ border: "white 1px solid" }}
        type="primary"
        shape="round"
        icon={<PlusOutlined style={{ marginRight: "5px" }} />}
      >
        Thêm mới
      </Button>
    </div>
  );
}
