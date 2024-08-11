"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MainLogo from "../../../public/Common-SVGs/MainLogoSVG";
import { coveredByYourGraceFont } from "@/utils/font";
import { motion } from "framer-motion";

const SuccessPage = () => {
  const [seconds, setSeconds] = useState(5);
  const routerRef = useRouter();

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      routerRef.push("/");
    }
  }, [seconds, routerRef]);

  return (
    <div>
      <header className="flex items-center justify-between p-4">
        <div className="mx-8">
          <Link href="/">
            <MainLogo
              className="fill-[#333333] hover:fill-primaryColor duration-200"
              iconWidth="120"
              iconHeight="30"
            />
          </Link>
        </div>
      </header>
      <div className="flex items-center flex-col justify-between h-[85dvh] bg-white ">
        <div className="flex  justify-center  flex-col flex-1 max-w-3xl">
          <div className="flex justify-center mb-4">
            <motion.section
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-[#28B246]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414 0L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.section>
          </div>
          <motion.div
            className="relative flex items-center justify-center text-center bg-white my-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="">
              <motion.div
                whileInView={{ y: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 1.2 }}
                className={`${coveredByYourGraceFont.className} text-4xl font-bold mb-4 text-successGreen  text-center`}
              >
                Success Submitted
              </motion.div>
              <motion.div
                className="text-5xl font-semibold text-center"
                whileInView={{ y: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                Congratulations
              </motion.div>
            </div>
          </motion.div>
          <motion.section
            className="text-[#727272] mb-4 text-3xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </motion.section>
        </div>
        <p className="text-gray-500">
          Redirecting you to Homepage in{" "}
          <span className="text-primaryColor font-semibold">
            {seconds} Seconds
          </span>
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
