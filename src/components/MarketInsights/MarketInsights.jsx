import React from "react";
import "../../index.css";
const MarketInsights = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="w-full md:w-2/3 lg:w-1/2 gap-2">
        <div className="flex-col p-4 items-center justify-center">
          <div className="flex flex-col md:flex-row h-full gap-2 rounded-tl-2xl p-2">
            <div className="flex flex-col md:w-1/3 rounded-tl-3xl p-4 border-2 box bg-secondary justify-center">
              <div className="flex h-[70px] border-4 border-border rounded-md w-16 bg-buttonBg">
                <div className=" border-2  border-white m-2 items-center justify-center w-full"></div>
              </div>
              <h2 className="font-semibold text-lg mb-2">Trade Optimizer</h2>
              <p className="text-sm text-primary">
                Find the right moments to buy or sell, with personalized trade
                suggestions designed to help you make the most of every
                opportunity.
              </p>
            </div>

            <div className="flex flex-col gap-2 md:w-1/3">
              <div className="rounded-xl p-4 border box bg-secondary">
                <h2 className="font-semibold text-lg mb-2">Market Insights</h2>
                <p className="text-sm text-primary">
                  Stay ahead of the market. Get real-time updates on market
                  trends, track top traders' movements, and spot signals from
                  key influencers.
                </p>
              </div>

              <div className="h-3/6 rounded-xl border box bg-secondary p-2">
                <h2 className="text-primary block md:hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  autem minus ut quis sed tempore, dignissimos nam ipsum
                  doloribus harum dolore aliquid,
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-center md:w-1/3 p-4 rounded-tr-3xl border box bg-secondary">
              <h2 className="font-semibold text-lg mb-2">Fixed Guard</h2>
              <p className="text-sm text-primary">
                Get alerts on market swings and potential risks before they
                impact your portfolio. This agent helps you navigate volatility
                and stay prepared.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 p-2">
            <div className="md:w-1/2 p-4 rounded-bl-3xl  box bg-secondary">
              <h2 className="font-semibold text-lg mb-2">Portfolio Sync</h2>
              <p className="text-sm text-primary">
                Easily manage your portfolio. You'll always know what you own,
                how it's performing, and where it’s headed.
              </p>
            </div>

            <div className="md:w-1/2 p-4 rounded-br-3xl box bg-secondary">
              <h2 className="font-semibold text-lg mb-2">
                Opportunities Scout
              </h2>
              <p className="text-sm text-primary">
                Find exciting new projects, events, and tokens that others might
                be missing. Identify promising opportunities early, so you never
                miss out on the next big thing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
