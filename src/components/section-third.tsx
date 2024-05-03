import React from "react";

export const SectionThird = () => {
  return (
    <section className="body-font mt-12 mx-10">
  <div className="container px-5 mx-auto py-12 bg-slate-200 rounded-3xl">
    <div className="flex flex-wrap w-full mb-2 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl uppercase font-bold title-font text-blue-700">BI mutaxassislarining daromadi qancha?</h1>
    </div>
    <div className="flex flex-wrap md:px-20">
      <div className="xl:w-1/3 w-full p-4">
        <div className="border border-gray-400 p-6 rounded-2xl">
          <h2 className="text-lg font-bold title-font text-orange-600 mb-2">2 000 000+</h2>
          <p className="leading-relaxed text-sm">Dunyo boylab bosh ish orinlari</p>
        </div>
      </div>
      <div className="xl:w-1/3 w-full p-4">
        <div className="border border-gray-400 p-6 rounded-2xl">
          <h2 className="text-lg font-bold title-font text-orange-600 mb-2">400$-2 000$+</h2>
          <p className="leading-relaxed text-sm">Ozbekistondagi maoshlar</p>
        </div>
      </div>
      <div className="xl:w-1/3 w-full p-4">
        <div className="border border-gray-400 p-6 rounded-2xl">
          <h2 className="text-lg font-bold title-font text-orange-600 mb-2">6 000$+</h2>
          <p className="leading-relaxed text-sm">AQSHdagi boshlangich maoshlar</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
};
