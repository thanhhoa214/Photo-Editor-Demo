import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Router } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

import SideBar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";

// import ImageViewer from "./components/ImageViewer";
import AppRouter from "./routes/AppRouter";

const history = createHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <ProgressBar currentStep={2} />
        <SideBar>
          <Container className="d-flex mt-4">
            <AppRouter></AppRouter>
          </Container>
        </SideBar>
        {/* <ImageViewer /> */}
      </Router>
    </div>
  );
}

export default App;
