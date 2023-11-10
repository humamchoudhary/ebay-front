import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
function Navbar() {
  const [searchState, setSearchState] = useState("");
  const [categories, setCategories] = useState({
    home: [
      "Category 1",
      "Category 1",
      "Category 1",
      "Category 1",
      "Category 1",
      "Category 1",
      "Category 1",
      "Category 1",
    ],
    auction: ["Category 2", "Category 2", "Category 2", "Category 2"],
    discover: ["Category 3", "Category 3", "Category 3", "Category 3"],
  });
  console.log(categories[searchState]);
  return (
    <div className=" min-w-full flex flex-col justify-center items-center sticky top-4">
      <div className="flex flex-row justify-between w-full items-center bg-white">
        <div className="font-black text-3xl  w-72 ">Logo</div>

        <div className="  flex flex-row w-2/3  justify-center items-center gap-4">
          <p
            className={`flex flex-row items-center gap-2 hover:cursor-pointer rounded-t-lg py-4 px-3 duration-200 ${
              searchState === "home" ? "bg-slate-100" : "bg-white"
            }`}
            onClick={() => {
              if (searchState != "home") {
                setSearchState("home");
              } else {
                setSearchState();
              }
            }}
          >
            Home{" "}
            {searchState !== "home" ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </p>
          <p
            className={`flex flex-row items-center gap-2 hover:cursor-pointer rounded-t-lg py-4 px-3 duration-200 ${
              searchState === "auction" ? "bg-slate-100" : "bg-white"
            }`}
            onClick={() => {
              if (searchState != "auction") {
                setSearchState("auction");
              } else {
                setSearchState();
              }
            }}
          >
            Auctions{" "}
            {searchState !== "auction" ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </p>
          <p
            className={`flex flex-row items-center gap-2 hover:cursor-pointer rounded-t-lg py-4 px-3 duration-200 ${
              searchState === "discover" ? "bg-slate-100" : "bg-white"
            }`}
            onClick={() => {
              if (searchState != "discover") {
                setSearchState("discover");
              } else {
                setSearchState();
              }
            }}
          >
            Discover{" "}
            {searchState !== "discover" ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </p>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <div className="p-3 hover:cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 duration-300">
            <AiOutlineSearch size={25} />
          </div>
          <div className="p-3 hover:cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 duration-300">
            <AiOutlineHeart size={25} />
          </div>
          <div className="p-3 hover:cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 duration-300">
            <BsCart3 size={25} />
          </div>
          <div className="p-3 hover:cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 duration-300">
            <AiOutlineUser size={25} />
          </div>
        </div>
      </div>
      {/* <motion.div
        initial={{ y: 0, position: "relative" }}
        animate={{
          y: searchEnbleVal,
          visibility: searchEnbleVal === 0 ? "visible" : "hidden",
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className=" border rounded-md border-black h-10 w-2/6 flex flex-row items-center overflow-hidden z-0"
      >
        <input placeholder="Search" className="h-full w-full px-2 py-1" />
        <div className=" w-[1px] h-5/6 bg-black" />
        <div className="h-full w-20 flex items-center justify-center hover:cursor-pointer hover:bg-slate-100 duration-300">
          <AiOutlineSearch size={24} />
        </div>
      </motion.div> */}

      {searchState && (
        <div className=" w-full bg-slate-100 rounded-lg px-10 py-6 grid grid-cols-4 h-44 min-h-1/4 items-center">
          <div className="flex flex-col col-span-1">
            <p className=" font-semibold text-sm">Most Popular Categories</p>
            <div className="flex flex-col gap-1 mt-2">
              {categories &&
                categories[searchState].map((item, index) => {
                  return <p className="text-sm">{item}</p>;
                })}
            </div>
          </div>
          <div className="flex flex-col col-span-1">
            <p className=" font-semibold text-sm">Most Popular Categories</p>
            <div className="flex flex-col gap-1 mt-2">
              {categories &&
                categories[searchState].map((item, index) => {
                  return <p className="text-sm">{item}</p>;
                })}
            </div>
          </div>
          <div className="flex flex-col col-span-2 h-full w-full bg-slate-500"></div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
