import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const sodas = [
  {
    name: "Soda DonK",
    place: "Nos ubicamos a un costado de las canchas",
    image:
      "https://th.bing.com/th/id/OIP.x_bLp2JXWP8HVFl2iyGe4QHaEK?pid=ImgDet&rs=1",
  },
  {
    name: "Soda Liz",
    place: "Estamos por los edificios de talleres",
    image:
      "https://th.bing.com/th/id/R.aa9b132c255914756628006fe551fb60?rik=aMidMYpSxBbZyQ&pid=ImgRaw&r=0",
  },
  {
    name: "Soda Caro",
    place: "Justo después de los edificios académicos",
    image:
      "https://th.bing.com/th/id/R.dd5d9fbdd03a3b47d21baa8633231e67?rik=a3iMyOmV0XwEwA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fFood-HD-Wallpapers-04864.jpg&ehk=oCGq87EnzGa53wpyGPk3aNhI03hKYPPWLQVzqCKdPe0%3d&risl=&pid=ImgRaw&r=0",
  },
];

export default function CafeteriaItem() {
  return (
    <TouchableOpacity activeOpacity={0.9} style={{ marginBottom: 10 }}>
      {sodas.map((soda, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <CafeteriaImage image={soda.image} />
          <CafeteriaInfo name={soda.name} place={soda.place} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const CafeteriaImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{
          width: "100%",
          height: 180,
          /*opacity: 0.8,*/
          borderRadius: 15,
        }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

const CafeteriaInfo = (props) => {
  console.log(props);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>{props.place}</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>4.5</Text>
      </View>
    </View>
  );
};
