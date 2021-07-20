import * as React from "react";
import { Image } from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 100,
  height: 100,
};

const LogoTitle = () => {
  return <Image style={{ width: 50, height: 50 }} source={logo} />;
};
export default LogoTitle;
