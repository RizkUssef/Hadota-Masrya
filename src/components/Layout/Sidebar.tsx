"use client";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdBlock } from "react-icons/md";
import { IoLogOut, IoPersonAdd } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";
import { Settings2 } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between items-first h-screen pt-20 pb-5w-fit">
    <div className="flex flex-col gap-5 ml-5">
      <BsFillPersonFill className="icons" />
      <HiChatBubbleLeftRight className="icons" />
      <HiMiniUserGroup className="icons" />
      <MdBlock className="icons" />
      <IoPersonAdd className="icons" />
      <MdGroupAdd className="icons" />
    </div>
    <div className="flex flex-col gap-5 ml-5 pb-5">
      <Settings2 className="icons" />
      <IoLogOut className="icons" />
    </div>

    </div>
  );
};

export default Sidebar;
