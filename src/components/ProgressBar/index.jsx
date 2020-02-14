import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./style.css";

function TopBar({ currentStep }) {
  return (
    <ProgressBar className="fixed-top h-8">
      <ProgressBar
        striped
        variant="primary"
        now={33}
        key={1}
        animated
        label={<h4>UPLOAD</h4>}
      ></ProgressBar>
      <ProgressBar
        variant="secondary"
        now={34}
        key={2}
        label={<h4>CUSTOMIZE</h4>}
      />
      <ProgressBar
        variant="secondary"
        now={33}
        key={3}
        label={<h4>CHECK OUT</h4>}
      />
    </ProgressBar>
  );
}

export default TopBar;
