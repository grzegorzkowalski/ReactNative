import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";

const API_URL = "https://goquotes-api.herokuapp.com/api/v1/all/authors";

export default function App({navigation, route}) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(API_URL);
        const data = await request.json();
        console.log(data);
        setAuthors(data.authors);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.btn}
        onPress={
          () => navigation.navigate("Author", {author: item.name})
        }
      >
        <Text style={styles.text}>{item.name} {item.count}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}></View>
      <StatusBar />
      {!authors.length ? (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          style={{ flex: 1, width: "100%" }}
          data={authors}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    padding: 15
  },
  btn: {
    backgroundColor: "navy",
    padding: 10,
    borderRadius: 25
  },
  text: {
    color: "#FFF"
  }
});
