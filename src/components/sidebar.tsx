import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./nav";
import { Todo } from "./todo";
import { Registration } from "./registration";

const SideBar = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/todo" component={Todo} />
          <Route path="/Registration" component={Registration} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export { SideBar };
