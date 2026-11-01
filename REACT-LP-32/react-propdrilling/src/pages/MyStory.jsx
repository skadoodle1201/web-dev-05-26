import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ImageComponent = (props) => {
  const { isDark } = props;
  console.log("From Image", isDark);

  return (
    <div style={{ color: !isDark ? "black" : "white" }}>
      {" "}
      This Contains Image and Image Information
    </div>
  );
};

const BaggageParaComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ color: theme === "light" ? "black" : "white" }}>
      This Contains Emotional Story about my brand Dark is not passed from props
      in parent
    </div>
  );
};

const MyStory = (props) => {
  const { isDark } = props; //this is prop drilling

  return (
    <div style={{ backgroundColor: !isDark ? "white" : "black" }}>
      <ImageComponent isDark={isDark} />
      <BaggageParaComponent isDark={isDark} />
    </div>
  );
};

export default MyStory;
