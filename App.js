import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Text> Start app-barber! </Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
