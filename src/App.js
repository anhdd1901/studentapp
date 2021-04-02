import List from "./Components/List";
import AddScreen from "./Components/AddScreen";
import UpdateScreen from "./Components/UpdateScreen";
import style from "./App.module.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={style.all}>
      <Router>
        <Switch>
          <Route path="/add-new-student">
            <AddScreen />
          </Route>

          <Route path="/update-student-infomation">
            <UpdateScreen />
          </Route>

          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
