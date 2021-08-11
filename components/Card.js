import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

export default function Card(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#CCCCCC",
        padding: 5,
        margin: 5,
        height: 200,
        borderRadius: 15,
        // display: "flex",
      }}
    >
      <Text
        style={{
          color: "black",
          textAlign: "center",
          fontWeight: "bold",
          textDecorationLine: "underline",
        }}
      >
        {props.title}
      </Text>
      <View
        style={{
          flex: 2,

          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{ resizeMode: "contain", height: 100, width: 100 }}
            source={{
              uri: "https://img.icons8.com/clouds/100/000000/user.png",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text>Name: {props?.user?.name}</Text>
          <Text>
            Address: {props?.user?.address?.street ?? ""} /{" "}
            {props?.user?.address?.city ?? ""} {"\n"} zip-code:{" "}
            {props?.user?.address?.zipcode ?? ""}
          </Text>
          <Text>Phone: {props?.user?.phone ?? ""}</Text>
          <Text>Website: {props?.user?.website}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,

          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text>
          Company: {props?.user?.company?.name ?? ""} /{" "}
          {props?.user?.company?.catchPhrase ?? ""} /{" "}
          {props?.user?.company?.bs ?? ""}
        </Text>
      </View>
    </View>
  );
}
