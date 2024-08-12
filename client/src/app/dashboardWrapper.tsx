import React, { ReactNode } from "react";
import Navbar from "./(components)/Navbar";

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`flex bg-gray-50 text-green-900 w-full min-h-screen`}>
      Sidebar
      <main
        className={`light flex flex-col w-full h-full py-7 px-9 bg-gray-200 md:pl-24`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
