"use client"
import React from 'react'
import LogoIcon from "../../../public/assets/Logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="ml-5 mt-2 fixed font-sans">
        <Image src={LogoIcon} alt="Hadota Logo" width={100} height={100} />
    </div>
  )
}

export default Logo
