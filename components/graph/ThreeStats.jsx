import React from "react";

// components
import CardStats from "../card/CardStats";
export default function ThreeStats({report}) {

  const totalGuest = report.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  return (
    <>
      {/* Header */}
      <div className="relative md:pt-2 pb-2 pt-2">
        <div className="px-4 md:px-0 mx-auto w-full">
          <div className="md:w-full ">
            {/* Card stats */}
            <div className="flex flex-wrap md:w-full ">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="Total Tamu"
                  statTitle={totalGuest + " Orang"}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}