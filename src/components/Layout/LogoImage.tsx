"use client";
import React from "react";
import LogoIcon from "../../../public/assets/Logo.svg";
import Image from "next/image";

const LogoImage = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <Image src={LogoIcon} alt="Hadota Logo" width={100} height={100} />
    </div>
  );
};

export default LogoImage;
