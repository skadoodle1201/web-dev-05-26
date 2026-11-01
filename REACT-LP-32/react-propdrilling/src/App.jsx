import { useContext, useState } from "react";
import { Link, Route, Routes } from "react-router";
import MyStory from "./pages/MyStory";
import { ThemeContext } from "./ThemeContext";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      Current Theme: {theme}
    </button>
  );
};

function App() {
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState("light");

  console.log("From App", dark);
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      <div>
        <nav>
          <Link to={"/my-story"}>My Story</Link>
        </nav>
        <button
          onClick={() => {
            setDark(!dark);
          }}
        >
          Control Dark
        </button>
        <ToggleTheme />
        <Routes>
          {/**
           * isDark is prop drilling we are using
           * ThemeContext.Provider to pass themeContext using the useContextHook
           * And Avoid the problem of prop drilling
           */}
          <Route path="/my-story" element={<MyStory isDark={dark} />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
