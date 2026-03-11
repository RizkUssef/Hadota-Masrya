"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { ROUTES } from "@/routers/router";

const Home = () => {
  const hadVariants = {
    initial: { x: -200, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const otVariants = {
    initial: { x: -200, opacity: 0 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const masryVariants = {
    initial: { y: 200, opacity: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const footerHeloghVariants = {
    initial: { y: 200, opacity: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const buttonVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  // controls so we can fire each animation sequentially
  const hadControls = useAnimation();
  const otControls = useAnimation();
  const masryControls = useAnimation();
  const footerHeloControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    const runSequence = async () => {
      await hadControls.start("animate");
      await otControls.start("animate");
      await masryControls.start("animate");
      await buttonControls.start("animate");
      await footerHeloControls.start("animate");
    };

    runSequence();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen  relative overflow-hidden">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <motion.div
            variants={hadVariants}
            initial="initial"
            animate={hadControls}
            className="font-family-en-logo text-4xl font-bold text-logo-had"
          >
            Had
          </motion.div>
          <motion.div
            variants={otVariants}
            initial="initial"
            animate={otControls}
            className="font-family-ar-logo text-4xl font-bold text-logo-ota -scale-x-100"
            dir="ltr"
          >
            وته
          </motion.div>
        </div>
        <div className="self-end">
          <motion.div
            variants={masryVariants}
            initial="initial"
            animate={masryControls}
            className="font-family-ar-logo text-sm font-bold text-logo-ota"
          >
            مصرية
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col mt-10 items-center justify-center gap-6">
        <motion.div
          variants={buttonVariants}
          initial="initial"
          animate={buttonControls}
          className="font-family-ar-logo cursor-pointer text-sm font-bold text-logo-ota"
        >
          <Link href={ROUTES.register} className="buttons">
           🪶 لتبدأ حدوتتك الخاصة
           {/* 📜 لتبدأ حدوتتك الخاصة */}
          </Link>
        </motion.div>
      </div>
      <div className="flex absolute bottom-0 mb-10 flex-col items-center justify-center gap-4">
        <motion.div
          variants={footerHeloghVariants}
          initial="initial"
          animate={footerHeloControls}
          className="font-family-ar-logo text-sm font-bold text-logo-ota"
        >
          𓂓𓂧𓅱𓏏𓏏𓇋 · 𓅓𓊃𓂋𓇋𓏏
        </motion.div>
        <motion.div
          variants={footerHeloghVariants}
          initial="initial"
          animate={footerHeloControls}
          className="font-family-Elmessiri text-sm font-bold text-logo-ota"
        >
          𓂀 من أرض النيل جاءت الحكاية، لتسكن بين الناس قبل أن تُكتب 𓂀
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
