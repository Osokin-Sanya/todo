import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { changeTheme } from "../../store/themeSelector";
import { useTheme } from "../../hooks/use-theme";

function ThemeToggle() {
  const dispatch = useDispatch();
  const themeName = useSelector((state) => state.theme);
  useTheme();

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };
  return (
    <div>
      <span>Theme: {themeName} </span>
      <Switch
        checked={themeName === "dark"}
        onClick={handleThemeChange}
        size="small"
      />
    </div>
  );
}
export { ThemeToggle };
