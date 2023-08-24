"use client";
import React from "react";
import { Button } from "flowbite-react";
import ReviewCard from "./ReviewCard";

export default function OverviewTab() {
  return (
    <div className="">
      <div className="flex flex-col gap-3 text-black">
        <p>
          IBM is the second-largest Predictive, consectetur adipiscing elit. Sit
          turpis egestas aenean amet ac rhoncus vitae tristique. A sed magna
          vitae nullam. Accumsan ullamcorper amet congue fermentum egestas purus
          molestie nam. Dolor, dictumst mauris vestibulum vehicula vel cras.
          Pellentesque nam congue auctor dolor mattis erat. Pharetra feugiat in
          justo purus dolor feugiat ultrices.
        </p>
        <p>
          Pretium at parturient curabitur eget nunc pharetra. Vitae pharetra
          adipiscing purus faucibus bibendum. Ultrices mi tristique et enim
          pretium lacus, vivamus. Augue eget fermentum, mauris viverra.
          Tristique arcu ipsum risus a arcu pellentesque pharetra velit.
        </p>
        <p>
          Neque, erat tristique volutpat faucibus mattis vulputate faucibus. Ut
          phasellus nulla at sociis est, turpis purus. Faucibus donec malesuada
          tristique quam commodo felis nulla.
        </p>
      </div>
      <div className=" mt-8 text-black">
        <h3 className="text-2xl mb-4 font-semibold">Reviews</h3>
        {[1, 2].map((item, index) => (
          <ReviewCard key={index} />
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h4 className="text-xl">Leave a Comment</h4>
        <textarea
          // type={"text"}
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          rows={4}
          placeholder="Write your comment here..."
        ></textarea>
      </div>
      <div className="mt-4">
        <Button className="bg-primary" type="submit">
          Publish review
        </Button>
      </div>
    </div>
  );
}
