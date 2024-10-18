import React from "react";

const ExploreDApp = () => {
  return (
    <div className="bg-[#011A23] p-8 rounded-2xl shadow-xl text-center w-4/6 md:w-4/6 border-2 border-color">
      <h2 className="text-white text-3xl font-bold mb-4">
        Explore Our <span className="text-primary">dApp</span>
      </h2>
      <p className="text-[#B0C7C6] mb-6">
        EthAi is an AI-powered dApp designed to help traders make smarter,
        data-driven decisions. By tracking smart money flows, monitoring key
        wallets, and providing real-time market insights, EthAi empowers users
        to stay ahead of trends. The platform offers intuitive AI features for
        asset recommendations, market analysis, and personalized crypto Q&A,
        making it the ultimate tool for both novice and experienced traders.
      </p>
      <button className="bg-buttonBg text-text px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#14a5a3] transition-all duration-300">
        Open dApp
      </button>
    </div>
  );
};

export default ExploreDApp;
