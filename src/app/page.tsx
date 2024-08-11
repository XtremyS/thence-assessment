"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MainLogo from "../../public/Common-SVGs/MainLogoSVG";
import { coveredByYourGraceFont } from "../utils/font";
import SparkleSVG from "../../public/Common-SVGs/SparkleSVG";
import RocketSVG from "../../public/Common-SVGs/RocketSVG";
import RightArrowSVG from "../../public/Common-SVGs/RightArrowSVG";
import { useState } from "react";
import CollapseSVG from "../../public/Common-SVGs/CollapseSVG";
import UnCollapseSVG from "../../public/Common-SVGs/UnCollapseSVG";
import UnionSVG from "../../public/Common-SVGs/UnionSVG";
import Link from "next/link";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);

  const faqData = [
    {
      question: "Do you offer freelancers?",
      answer: "Yes, We offer freelancers.",
    },
    {
      question:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      answer: "Trust us.",
    },
    {
      question: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Why should I not go to an agency directly?",
      answer: "Don't Know.",
    },
    {
      question: "Who can help me pick a right skill sets and duration for me?",
      answer: "No one get yourself maybe?.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      <header className="flex items-center justify-between p-4 border border-customBorderColor rounded-customLg">
        <div className="mx-8">
          <MainLogo
            className="fill-[#333333] hover:fill-primaryColor duration-200"
            iconWidth="120"
            iconHeight="30"
          />
        </div>
        <nav className="space-x-4">
          <Link
            href="/register-user"
            className="lightButtonCommonStyle border border-customBorderColor rounded-customLg"
          >
            Get Projects
          </Link>
          <button className="darkButtonCommonStyle rounded-customLg">
            Onboard Talent
          </button>
        </nav>
      </header>

      <motion.div
        className="relative  flex items-center justify-center text-center bg-white my-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="max-w-[588px]">
          <motion.div
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1.2 }}
            className={`${coveredByYourGraceFont.className} text-4xl font-bold mb-4 text-successGreen`}
          >
            Success stories
          </motion.div>
          <motion.div
            className="text-5xl font-semibold"
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Every success journey we&apos;ve encountered.
          </motion.div>
        </div>
      </motion.div>

      <motion.section
        className="my-24 py-24"
        whileInView={{ y: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 1.2 }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8  bg-white">
          {/* Left Side */}
          <div className="relative flex flex-1 justify-end gap-4">
            <div className="relative">
              <Image
                src="/images/girl_profile_pic.png"
                alt="Profile"
                width={506}
                height={546}
                className="rounded-lg"
                unoptimized
              />
            </div>
            <motion.div
              className="p-8 rounded-3xl w-[267px]  absolute top-32 left-32 transform -translate-x-2/4 bg-white shadow-lg flex flex-col items-center gap-5"
              whileInView={{ x: [-50, 0], opacity: [0, 1] }}
              transition={{ duration: 1.2 }}
            >
              <div className=" w-full relative ">
                <p className="text-6xl text-primaryColor font-bold">40%</p>
                <SparkleSVG
                  iconHeight="79"
                  iconWidth="79"
                  className="absolute top-[-3rem] left-[-2rem]"
                />
              </div>
              <p className="text-[#828282]">
                Achieved reduction in project execution time by optimizing team
                availability
              </p>
            </motion.div>
            <motion.div
              className="absolute bottom-10 flex items-center gap-3.5 bg-white p-4 shadow-lg left-40 rounded-customLg"
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 1.2 }}
            >
              <div>
                <RocketSVG iconHeight="52" iconWidth="52" />
              </div>
              <div>
                <p className="font-bold text-2xl text-primaryColor">10 DAYS</p>
                <p className="text-[#828282] text-base">Staff Deployment</p>
              </div>
            </motion.div>

            <motion.div
              className="px-9 py-10 rounded-3xl w-[290px] absolute bottom-[-3.5rem] right-[-14rem] transform -translate-x-2/4 bg-[#002E18] shadow-lg flex flex-col items-center gap-5"
              whileInView={{ x: [50, -140], opacity: [0, 1] }}
              transition={{ duration: 1.2 }}
            >
              <div className="flex items-baseline gap-3">
                <p className="text-6xl text-white font-bold">$0.5</p>
                <p className="text-[#A6A3A0] text-2xl">MILLION</p>
              </div>
              <p className="text-gray-300">
                Reduced client expenses by saving on hiring and employee costs.
              </p>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between  px-32 w-full max-w-[50%] gap-4 ">
            <div className="space-y-10">
              <h2 className="text-[40px] font-semibold">
                Enhance fortune 50 company&apos;s insights teams research
                capabilities
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div>
              <button className="darkButtonCommonStyle rounded-customLg group flex items-center gap-3">
                Explore More{" "}
                <RightArrowSVG
                  iconHeight="16"
                  iconWidth="16"
                  className="fill-white group-hover:translate-x-2 duration-200"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="my-20 bg-[#E8EEE7] rounded-customMd"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="grid grid-cols-2 p-14 rounded-lg relative">
          <div>
            <motion.div
              whileInView={{ y: [-50, 0], opacity: [0, 1] }}
              transition={{ duration: 1.2 }}
              className={`${coveredByYourGraceFont.className} text-4xl font-bold mb-4 text-[#9E9D9D]`}
            >
              What&apos;s on your mind
            </motion.div>

            <h2 className="text-6xl font-bold mb-5 text-primaryColor">
              Ask Questions
            </h2>
          </div>
          <UnionSVG
            iconHeight="514"
            iconWidth="491"
            className="absolute bottom-[-8rem]"
          />
          <div>
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-[#D7D7D7] ">
                <div
                  className="flex justify-between items-center py-8  cursor-pointer "
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className="text-xl max-w-xl font-semibold">
                    {faq.question}
                  </h2>
                  <span>
                    {activeIndex === index ? (
                      <UnCollapseSVG
                        iconHeight="14"
                        iconWidth="14"
                        className="fill-black"
                      />
                    ) : (
                      <CollapseSVG
                        iconHeight="14"
                        iconWidth="14"
                        className="fill-black"
                      />
                    )}
                  </span>
                </div>

                {activeIndex === index && faq.answer && (
                  <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
                    <h3 className="pr-2 py-2  text-base text-[#617275]">
                      {faq.answer}
                    </h3>
                  </motion.section>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <footer className="mt-24 px-12 text-center bg-footerBg rounded-3xl h-36 flex items-center justify-between">
        <p>© 2023. All rights reserved</p>
        <div className="flex items-center gap-14">
          <p className="text-lg underline underline-offset-1">
            Terms & Conditions
          </p>
          <p className="text-lg underline underline-offset-1">Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}
