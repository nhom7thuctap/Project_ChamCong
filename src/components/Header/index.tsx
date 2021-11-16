import { ROUTES } from "@/constants/routers";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo">chamcong</div>
      <ul className="list-navbar">
        <li className="navbar-item">
          <NavLink to="/">trang chủ</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/">bảng giá</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/">tính năng</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/">hỗ trợ</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to={ROUTES.SIGN_UP}>đăng ký</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to={ROUTES.SIGN_IN}>đăng nhập</NavLink>
        </li>
      </ul>
      {/* <Button
          onClick={() => {
            notify.success("Success");
          }}
        >
          Alert message success
        </Button>
        <Button
          onClick={() => {
            notify.error("Error");
          }}
        >
          Alert message Error
        </Button> */}
    </div>
  );
}
