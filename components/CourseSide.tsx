import { Button } from "flowbite-react";
import React from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export default function CourseSide() {
  return (
    <div className="overflow-hidden bg-white p-2 md:p-6 rounded-lg pt-4 text-black">
      <h2 className="text-2xl font-semibold">Tags:</h2>
      <div className=" flex flex-col gap-8">
        <div className="flex flex-wrap gap-2">
          <Button className="bg-gray-100 text-gray-700 mt-3">
            <p>Switch</p>
            <RxCross2 className="ml-2 h-5 w-5" />
          </Button>
          <Button className="bg-gray-100 text-gray-700">
            <p>Product Design</p>
            <RxCross2 className="ml-2 h-5 w-5" />
          </Button>
          <Button className="bg-gray-100 text-gray-700">
            <p>Tuts</p>
            <RxCross2 className="ml-2 h-5 w-5" />
          </Button>
          <Button className="bg-gray-100 text-gray-700">
            <p>UI/UX</p>
            <RxCross2 className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg">What you’ll learn</h4>
          <p className="text-gray-500 text-sm">
            Access to IBM Cloud modelling what is I was looking for and Aaron
            got me the solution.
          </p>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="text-lg">This course includes:</h5>
          <div className="flex gap-4 items-center">
            <AiOutlineUpload className="" />
            <p className="text-sm">100% Positive reviews (45)</p>
          </div>
          <div className="flex gap-4 items-center">
            <AiOutlineUpload className="" />
            <p className="text-sm">2167 students</p>
          </div>
          <div className="flex gap-4 items-center">
            <AiOutlineUpload className="" />
            <p className="text-sm">59 Lessons (9h 11m)</p>
          </div>
          <div className="flex gap-4 items-center">
            <AiOutlineUpload className="" />
            <p className="text-sm">6 courses</p>
          </div>
          <div className="flex gap-4 items-center">
            <AiOutlineUpload className="" />
            <p className="text-sm">70 downloads (70 files)</p>
          </div>
          <div className="flex gap-4 items-center">
            <AiOutlineUpload className="" />
            <p className="text-sm">Available from the app</p>
          </div>
          <div className="flex gap-4 items-center">
            <AiOutlineUpload className="" />
            <p className="text-sm">Audio: Spanish</p>
          </div>
          <div className="flex gap-4 items-center">
            <AiOutlineUpload className="" />
            <p className="text-sm">Level:</p>
            <p className="text-yellow-500 bg-yellow-100 px-2 py-1 rounded-full text-xs">
              Begining
            </p>
          </div>
          <Button className="bg-gray-100 rounded-xl border-dashed w-full py-3">
            <div className="flex flex-nowrap gap-2">
              <p className="xl:text-2xl text-xl font-semibold text-black">
                USD 199.00
              </p>
              <del className="xl:text-lg text-base text-gray-400">$250.00</del>
            </div>
          </Button>
          <Button className="bg-primary py-3">
            <div className="flex items-center gap-3">
              <BsCartCheck className="text-2xl text-white mr-3" />
              <p className=" text-2xl textt-white">Buy Now</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
