import { useState, useEffect } from "react";
import { isEqual } from "lodash";
import { getRandomBackground } from "../utils";
export const useDashboardContainer = () => {
  const [Questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          console.error("OOps something went wrong.");
        }
      })
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const handleClick = (e, qk, ok) => {
    const userSelectedAnswer = Questions[qk].default;
    userSelectedAnswer[ok] = e.target.value;
    if (isEqual(Questions[qk].answers, userSelectedAnswer)) {
      const newQuestions = [...Questions];
      newQuestions[qk].correct = true;
      newQuestions[qk].background = "correct";
      setQuestions(newQuestions);
    } else {
      const newQuestions = [...Questions];
      newQuestions[qk].background = getRandomBackground(
        newQuestions[qk].background
      );
      setQuestions(newQuestions);
    }
  };

  return { Questions, handleClick };
};
