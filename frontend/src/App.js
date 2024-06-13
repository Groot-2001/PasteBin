import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
//import Auth from "./Auth/Auth";
import Home from "./Services/Home/Home";
import LoginForm from "./Components/Login/LoginForm";
import SignupForm from "./Components/Signup/SignupForm";
import Dashboard from "./Services/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="App_Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// NotFound component for 404 errors
const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default App;
