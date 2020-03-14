import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const progressBarInfo = [
  {
    title: "UPLOAD",
    to: "/upload"
  },
  {
    title: "CUSTOMIZE",
    to: "/customize"
  },
  {
    title: "CHECK OUT",
    to: "/checkout"
  }
];

function TopBar({ currentStep }) {
  const ProgressBarLabel = ({ step }) => {
    const { title, to } = progressBarInfo[step];
    
    if (currentStep -1 < step) {
      return <h4>{title}</h4>;
    }
    return (
      <Link to={to} className="text-light progress-bar-link">
        <h4>{title}</h4>
      </Link>
    );
  };

  return (
    <ProgressBar className="fixed-top h-8">
      <ProgressBar
        variant="primary"
        now={33}
        key={1}
        label={<ProgressBarLabel step={0} />}
        striped
        animated
      ></ProgressBar>
      <ProgressBar
        now={34}
        key={2}
        label={<ProgressBarLabel step={1} />}
        striped={currentStep > 1}
        animated={currentStep > 1}
        variant={currentStep > 1 ? "primary" : "secondary"}
      />
      <ProgressBar
        now={33}
        key={3}
        label={<ProgressBarLabel step={2} />}
        striped={currentStep > 2}
        animated={currentStep > 2}
        variant={currentStep > 2 ? "primary" : "secondary"}
      />
    </ProgressBar>
  );
}

export default TopBar;
