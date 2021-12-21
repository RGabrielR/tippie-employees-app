import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Main from "./pages/Main";
import Login from './pages/Login';
import {withRouter} from './components/useRouter';
import { connect } from "react-redux";
const App = props =>  {
  const {logState} = props;
  return (
    <Router>
    {logState ? (
<Routes>
      <Route path="/"  element={<Main/>}/>
      <Route path="/login" element={<Navigate to="/"/>} />
    </Routes>
    ) : (
      <Routes>
      <Route path="/"  element={<Navigate to="/login"/>}/>
      <Route path="/login" element={<Login/>} />
      </Routes>
    )}
    </Router>
  );
};
const mapStateToProps = (state) => ({
  logState: state.logged,
});
// export default App;
export default connect(mapStateToProps)(App);