import useLanguage from "hooks/useLanguage";
import useTheme from "hooks/useTheme";
import { useRouter } from "next/router";
import React from "react";
import { RiComputerLine, RiMoonClearLine, RiSunLine } from "react-icons/ri";
const text = {
  darkTheme: [
    { language: "es", content: "Tema oscuro" },
    { language: "en", content: "Dark theme" },
  ],
  lightTheme: [
    { language: "es", content: "Tema claro" },
    { language: "en", content: "Light theme" },
  ],
};

const ThemeSelector = ({ className }) => {
  const { translate } = useLanguage();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <div className="flex border-[1px] rounded-full p-1">
      <div
        className={`w-[30px] h-[30px] bg-gray-200 mr-1 rounded-full flex items-center justify-center`}
      >
        <RiSunLine />
      </div>
      <div
        className={`w-[30px] h-[30px] mx-1 rounded-full flex items-center justify-center text-gray-500`}
      >
        <RiMoonClearLine />
      </div>
      <div
        className={`w-[30px] h-[30px]  ml-1 rounded-full flex items-center justify-center text-gray-500`}
      >
        <RiComputerLine />
      </div>
    </div>
  );
};

export default ThemeSelector;
