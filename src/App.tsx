import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormPage from "./pages/Form";
import WordCloud from "./pages/WordCloud";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={FormPage} />
          <Route path="/word-cloud/:id" exact component={WordCloud} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
