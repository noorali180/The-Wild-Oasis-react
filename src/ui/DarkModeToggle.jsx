import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";
import { useEffect } from "react";

const rootElement = document.documentElement;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(
    function () {
      if (isDarkMode) {
        rootElement.classList.add("dark-mode");
        rootElement.classList.remove("light-mode");
      } else {
        rootElement.classList.add("light-mode");
        rootElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
