import React from "react";
import { Options } from "../components";
import { useDashboardContainer } from "./dashboard.container";

export const Dashboard = () => {
  const { Questions, handleClick } = useDashboardContainer();
  return (
    <div className="main">
      {Questions &&
        Questions.map((qv, qk) => (
          <div key={qk} className={`question-board ${qv.background}`}>
            <h2>{qv.question}</h2>
            <Options
              questionId={qk}
              options={qv.options}
              handleClick={handleClick}
              isDisabled={qv.correct}
              defaultOptions={qv.default}
            />
            <h4>
              {qv.correct
                ? "The answer is correct!"
                : "The answer is incorrect!"}
            </h4>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
