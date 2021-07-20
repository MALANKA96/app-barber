import React, { useState, useEffect } from "react";
import { Text, View, Image, SectionList } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { Appointment, SectionTitle } from "../components";
import { DATA } from "../screens";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);

  const DATAa = DATA;

  useEffect(() => {
    axios.get("https://trycode.pw/c/MN9PO.json").then(({ data }) => {
      setData(data);
    });
  }, []);
  return (
    <Container>
      <SectionList
        sections={DATAa}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Appointment item={item} navigate={navigation.navigate} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle
            style={{
              color: "#f3f3f3",
            }}
          >
            {title}
          </SectionTitle>
        )}
      />
      <PlusButton
        style={{
          shadowColor: "#00796b",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 2.5,
          elevation: 5,
        }}
        onPress={navigation.navigate.bind(this, "AddClient")}
      >
        <Ionicons name="ios-add" size={34} color="white" />
      </PlusButton>
    </Container>
  );
};

const PlusButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background-color: #00796b;
  right: 25px;
  bottom: 25px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #0c0c0c;
`;

export default HomeScreen;
