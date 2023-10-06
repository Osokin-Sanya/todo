import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectCurrentTheme } from "../store/selectors";

const useTheme = () => {
  const theme = useSelector(selectCurrentTheme);

  useEffect(() => {
    document.querySelector("body").className =
      theme === "dark" ? "light-theme" : "dark-theme";
  }, [theme]);
};

export { useTheme };
