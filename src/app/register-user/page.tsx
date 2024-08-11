"use client";
import Link from "next/link";
import { useState } from "react";
import MainLogo from "../../../public/Common-SVGs/MainLogoSVG";
import CloseSVG from "../../../public/Common-SVGs/CloseSVG";
import { coveredByYourGraceFont, monoRopeFont } from "@/utils/font";
import { motion } from "framer-motion";
import AlertSVG from "../../../public/Common-SVGs/AlertSVG";
import { useRouter } from "next/navigation";

export default function Register() {
  const routerRef = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = !/^\S+@\S+\.\S+$/.test(email);
    return re;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (validateEmail(email)) {
      setLoading(false);
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
      setTimeout(() => {
        setLoading(false);
        routerRef.push("/register-success");
      }, 2000);
    }
  };
  return (
    <div>
      <header className="flex items-center justify-between p-4 ">
        <div className="mx-8">
          <Link href="/">
            <MainLogo
              className="fill-[#333333] hover:fill-primaryColor duration-200"
              iconWidth="120"
              iconHeight="30"
            />
          </Link>
        </div>
        <nav className="space-x-4">
          <Link
            href="/"
            className="border border-customBorderColor inline-block rounded-full p-4 hover:bg-lightButton-hoverBg duration-200"
          >
            <CloseSVG iconHeight="32" iconWidth="32" className="fill-black" />
          </Link>
        </nav>
      </header>

      <div className="flex items-center justify-center h-[60dvh]">
        <div className="max-w-lg w-full bg-white p-6 rounded-lg ">
          <motion.div
            className="relative flex items-center justify-center text-center bg-white my-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="">
              <motion.div
                whileInView={{ y: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 1.2 }}
                className={`${coveredByYourGraceFont.className} text-4xl font-bold mb-4 text-successGreen`}
              >
                Registration Form
              </motion.div>

              <motion.div
                className="text-5xl font-semibold"
                whileInView={{ y: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                Start your success Journey here!
              </motion.div>
            </div>
          </motion.div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${monoRopeFont.className} block bg-inputBg rounded-customMd w-full px-8 py-6 focus-visible:outline-[#537FF1] focus-visible:bg-[#F5F8FF]`}
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${monoRopeFont.className} block bg-inputBg rounded-customMd w-full px-8 py-6 focus-visible:outline-[#537FF1] focus-visible:bg-[#F5F8FF]`}
            />
            {emailError && (
              <div className="flex items-center gap-1">
                <AlertSVG
                  iconHeight="13"
                  iconWidth="13"
                  className="fill-red-500"
                />
                <p className="text-base text-red-500">{emailError}</p>
              </div>
            )}
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={!name || !email || loading}
              className={`w-full p-3 darkButtonCommonStyle rounded-customLg ${
                !name || !email || loading
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
