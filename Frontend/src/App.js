// import "./App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "./Layouts/Auth.js";
import AdminLayout from "./Layouts/Admin.js";
import RTLLayout from "./Layouts/RTL.js";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path={`/auth`} component={AuthLayout} />
          <Route path={`/admin`} component={AdminLayout} />
          <Route path={`/rtl`} component={RTLLayout} />
          <Redirect from={`/`} to="/admin/dashboard" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
