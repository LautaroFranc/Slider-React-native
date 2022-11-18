import {
  StyleSheet,
  StatusBar,
} from "react-native";
const styles = StyleSheet.create({
  slider: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item_slider: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#D9D9D9",
    fontSize: 26,
    width: "98%",
    fontFamily: "Roboto",
  },
  container_logo: {
    display: "flex",
    paddingTop: 20,
    alignItems: "flex-end",
    padding: 20,
    height: "40%",
    zIndex: 5,
  },
  img_logo: {
    width: "17%",
    height: "20%",
  },
  container_img_baner: {
    position: "absolute",
    flex: 1,
    bottom: 0,
  },
  img_login: {
    marginTop: 25,
  },
  input: {
    borderColor: "#D9D9D9",
    borderStyle: "solid",
    borderBottomWidth: 1,
    marginTop: 25,
    color: "#FFFFFF",
    width: "60%",
  },
  btm_login: {
    marginTop: 25,
  },
  text_btm: {
    fontSize: 20,
  },
});

// Colores:

// brown: "#3A302E",

// pink: "#AB4E68",

// grey: {

//           100: "#D9D9D9",

//           300: "#ACACAC",

//           800: "#717171",

//         },

// yellow: "#FFC733",
export default styles