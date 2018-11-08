import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";
import UserList from "./routes/UserList";
import UserDetail from "./components/UserDetail";

import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route exact path="/userList" component={UserList} />
          <Route path="/userList/:userID" component={UserDetail} />
        </div>
      </CssBaseline>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
