import React from "react";
import { SYLLABUS } from "../../utils/syllabus";

const Syllabus = () => {
  return (
    <>
      <section className=" dark:text-gray-600  body-font flex justify-center items-center py-8">
        <div className="container px-1 py-1 ml-4 mr-4 mb-28">
          <div className="text-center">
            <h1 className="sm:text-4xl text-2xl font-medium  text-center title-font  mb-8">
              Syllabus
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-2xl">
              Get the updated Syllabus for all the departments of all year.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {SYLLABUS?.map(({ label, value }) => (
              <div className="p-2 sm:w-1/2 w-full text-black">
                <a href={value} target="_blank" rel="noreferrer">
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium ">{label}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Syllabus;
