import React from "react";
import { GoPlus } from "react-icons/go";
import ExploreDapp from "../ExploreDapp/ExploreDapp";


const AskedQuestions = () => {
  const questions = [
    {
      id: 1,
      ques1: "What is EthAi?",
      icon: <GoPlus />,
    },
    {
      id: 2,
      ques1: "How can EthAi can help me as a Trader?",
      icon: <GoPlus />,
    },
    {
      id: 3,
      ques1: "Who can use EthAi?",
      icon: <GoPlus />,
    },
    {
      id: 4,
      ques1: "How does EthAi track smart money flow?",
      icon: <GoPlus />,
    },
    {
      id: 5,
      ques1: "How does ensure data security?",
      icon: <GoPlus />,
    },
  ];
  return (
    <div className="  w-full bg-primary flex flex-col justify-center items-center mt-5  h-screen gap-4">
      <div className="flex gap-4 p-2 w-full  lg:w-1/2 mt-16 mb-5">
        <h1 className="text-2xl md:text-4xl font-space font-semibold">
          Frequently Asked Questions
        </h1>
        <div className="w-1/2">
          {questions.map((each) => (
            <div key={each.id} className="flex items-center p-2 gap-2 ">
              <i>{each.icon}</i>
              <p>{each.ques1}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-5">

      <ExploreDapp />
      </div>
      <div className="w-full">

    
      </div>
    </div>
  );
};

export default AskedQuestions;
