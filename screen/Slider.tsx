import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles  from "./style"


const ItemSlider = [
  {
    id: 1,
    text: "Somos una organización \n sin fines de lucro que \n busca ayudar a las \n mascotas a encontrar un \n hogar.",
    logo: require("../assets/logoFAHYellow.png"),
    img: "",
    backgroundColor: "#3A302E",
    color: "#D9D9D9",
  },
  {
    id: 2,
    text: "Podrás adoptar a tu \n mascota soñada o \n encontrarle un mejor \n hogar a un gatito \n rescatado.",
    logo: require("../assets/logoFAHYellow.png"),
    img: "",
    backgroundColor: "#AB4E68",
    color: "#D9D9D9",
  },
  {
    id: 3,
    text: "No discriminamos por \n raza y priorizamos a los \n que más tiempo llevan sin \n un hogar.",
    img: require("../assets/animals.png"),
    logo: require("../assets/logoFAHPink.png"),
    backgroundColor: "#FFC733",
    color: "#000",
  },
  {
    id: 4,
    text: "Somos una organizacion sin fines de lucro que busca ayudar a las mascotas a encontrar un hogar",
    logo: require("../assets/logoFAHYellow.png"),
    backgroundColor: "#3A302E",
    img: require("../assets/googleIcon.png"),
    color: "#ACACAC",
  },
];

interface dataSlider {
  item: {
    text: string;
    img: object;
    logo: object;
    backgroundColor: string;
    color: string;
  };
  index: number;
}

export default function Slider() {


  const renderItem = ({ item, index }: dataSlider) => {

    return (
      <View style={[styles.slider, { backgroundColor: item.backgroundColor }]}>
        <View style={styles.container_logo}>
          <Image style={styles.img_logo} source={ item.logo } />
        </View>
        {index !== ItemSlider.length - 1 ? (
          <>
            <View style={styles.item_slider}>
              <Text style={[styles.text, { color: item.color }]}>
                {item.text}
              </Text>
            </View>
            <View style={styles.container_img_baner}>
              <Image source={item.img} />
            </View>
          </>
        ) : (
          <>
            <View style={styles.item_slider}>
              <Text style={[styles.text, { color: item.color }]}>
                Registrate
              </Text>
              <Image style={styles.img_login} source={item.img} />
              <TextInput style={styles.input} />
              <TouchableOpacity style={styles.btm_login}>
                <Text style={[styles.text_btm, { color: item.color }]}>
                  ingresar como invitado
                </Text>
              </TouchableOpacity>
            </View>
            <View></View>
          </>
        )}
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={ItemSlider}
      renderItem={renderItem}
      showNextButton={false}
      showDoneButton={false}
    />
  );
}
