import * as React from "react";
import "./App.scss";
import Header from "../header/Header";

class App extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    );
  }
}

export default App;
