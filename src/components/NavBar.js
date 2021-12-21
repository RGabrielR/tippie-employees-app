import { loggedOut } from "../redux/actions/logInActions";
import { connect } from "react-redux";
import { withRouter } from "./useRouter";
import { useNavigate } from "react-router-dom";
const NavBar = (props) => {
  const navigate = useNavigate();
  const loggedOut = () => {
    props.loggedOut();
    navigate("/login", { replace: true });
  };
  return (
    <div
      onClick={() => loggedOut()}
      className="bg-slate-400 flex items-center justify-end text-xl font-bold pr-12 cursor-pointer"
    >
      Desloguearse
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    loggedOut: () => dispatch(loggedOut()),
  };
};
export default connect("", mapDispatchToProps)(withRouter(NavBar));
