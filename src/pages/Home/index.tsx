// libs
import "./styles.scss";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
// hooks
import { useRouter } from "@/hooks/router/useRouter";
import { useStore } from "@/hooks/useStore";
// actions
import { updateMagicNumber } from "@/redux/actions/example";
// others
import { notify } from "@/utils/notify";
import { ROUTES } from "@/constants/routers";
import { NavLink } from "react-router-dom";
import Header from "@/components/Header";

// TODO: talk

/**
 * Home
 */
export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { magicNumber } = useStore("Home", "exampleReducer");
  const handleClick = () => {
    router.push(ROUTES.SIGN_IN);
  };
  return (
    <>
      <Header />
      <div className="main">
        <div className="banner">
          <div className="text-banner">
            <h1 className="title">
              phần mềm quản lý <br />
              nhân sự
            </h1>
            <h3 className="desc">Hệ thống cloud uy tín, tốc độ và mạnh mẽ.</h3>
            <div className="buttons">
              <div className="button">
                <Button variant="contained">Read more</Button>
              </div>
              <div className="button">
                <Button onClick={handleClick} variant="outlined">
                  Getting started
                </Button>
              </div>
            </div>
          </div>
          <div className="img-banner">
            <img
              className="image"
              src="https://media.istockphoto.com/vectors/vector-illustration-of-check-list-work-environment-cartoon-with-of-vector-id1216945255"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
