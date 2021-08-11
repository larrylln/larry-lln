import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./components/Card";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios({
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("response.data", response.data);
        setUsers(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
    getUser(0);
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <ScrollView style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <Card
              key={index}
              title={`User information ${index + 1}`}
              user={user}
            />
          ))
        ) : (
          <Text></Text>
        )}

        {/* <View
          style={{
            flex: 2,
            backgroundColor: "black",
            height: 200,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={{ textAlign: "center" }}>UserInformation</Text>
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: "blue",
              display: "flex",
              flexDirection: "column",
            }}
          ></View>
          <View
            style={{
              flex: 1,
              backgroundColor: "red",
              display: "flex",
              flexDirection: "column",
            }}
          ></View>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "purple",
            padding: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        ></View>
        <View
          style={{
            flex: 2,
            backgroundColor: "purple",
            padding: 10,
          }}
        ></View>
        <View
          style={{
            flex: 2,
            backgroundColor: "purple",
            padding: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        ></View> */}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  scrollview: {
    marginHorizontal: 10,
  },
});
