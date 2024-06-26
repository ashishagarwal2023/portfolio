"use client";

import { motion } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { ProgressBarLink as Link } from "@/components/ProgressBar";

export const ProjectsCard = ({ imgUrl, title, desc, gitUrl, previewUrl }: any) => {
  return (
    <motion.div
      className="w-full p-0 m-0 transition select-none"
      initial={{ scale: "0" }}
      animate={{ scale: "1" }}
      whileHover={{ scale: "1.05" }}
      whileTap={{ scale: "0.97" }}
      transition={{ duration: 0.1 }}
    >
      <Link
        className="group block w-full bg-dark-900 hover:bg-primary-500"
        href={previewUrl}
        target="_blank"
      >
        <img
          className="aspect-auto w-full object-cover"
          src={imgUrl}
          alt={title}
        />
        <div className="border border-[#171717] px-4 py-2 group-hover:border-primary-400">
          <p className="text-md mb-0.5">{title}</p>
          <p className="mb-1 text-sm text-[#737373] group-hover:text-white">
            {desc}
          </p>
          <div className="my-2">
            <div className="flex flex-row justify-between">
              <Link
                href={gitUrl}
                target="_blank"
                className="text-primary-400 group-hover:bg-primary-800 rounded-full p-2 font-bold bg-primary-900"
              >
                <CodeBracketIcon className="w-6 h-6 text-inherit" />
              </Link>
              <Link
                href={previewUrl}
                target="_blank"
                className="text-primary-400 group-hover:bg-primary-800 rounded-full p-2 font-bold bg-primary-900"
              >
                <EyeIcon className="w-6 h-6 text-inherit" />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
