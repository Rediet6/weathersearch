import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  icon: "CLEAR_DAY",
  color: "black",
  size: 50,
  animate: true,
};
export default function Animation(props) {
  return (
    <ReactAnimatedWeather
      icon={props.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}
