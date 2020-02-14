import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import TopBar from "./components/TopBar";
import SideBar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";

// import ImageViewer from "./components/ImageViewer";
import AppRouter from "./routes/AppRouter";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <ProgressBar />
      <SideBar>
        <Container className="d-flex mt-4">
          <AppRouter></AppRouter>
        </Container>
      </SideBar>
      {/* <ImageViewer /> */}
    </div>
  );
}

export default App;
