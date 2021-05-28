import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons, Entypo } from "@expo/vector-icons";

const ClientInfoScreen = ({ user, typeService, time }) => {
  return (
    <ClientInfoItem>
      <AvatarView>
        <Avatar
          source={{
            uri: "https://sun9-41.userapi.com/impg/c850608/v850608714/a65ec/TJPHTEoHm3Y.jpg?size=600x598&quality=96&sign=d2101c02182b4eb1c2fb9bf69ef880ac&type=album",
          }}
        ></Avatar>
      </AvatarView>
      <NameClient>Alexandra Volkova</NameClient>
      <Telefon>8 (029) 755-98-84</Telefon>
      <View
        style={{
         /*  alignItems: "center",
          alignContent: "center", */
          flexDirection: "row",
        }}
      >
        <MessageButton
          style={{
            shadowColor: "#2a86ff",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2.5,
            elevation: 5,
          }}
        >
          <Entypo name="message" size={34} color="white" />
        </MessageButton>
        <CallButton
          style={{
            shadowColor: "#43a047",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2.5,
            elevation: 5,
          }}
        >
          <Ionicons name="call" size={32} color="white" />
        </CallButton>
      </View>

      <DataService>Ближайшая запись: {"\n"} 25 декабря 17:00</DataService>
      <TypeService>Стрижка бороды. Покраска волос </TypeService>
      <HistoriItem>История сеансов:</HistoriItem>
    </ClientInfoItem>
  );
};

const HistoriItem = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 15px 15px;
`;
const DataService = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #8b979f;
  margin: 0 15px 5px;
`;
const TypeService = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #8b979f;
  margin: 0 15px 25px;
`;

const CallButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 150px;
  height: 48px;
  background-color: #43a047;
  margin: 0 15px 15px;
`;
const MessageButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 150px;
  height: 48px;
  background-color: #2a86ff;
  margin: 0 15px 15px;
`;

const Telefon = styled.Text`
  font-size: 26px;
  font-weight: 400;
  color: #000000;
  margin: 0 15px 15px;
`;
const NameClient = styled.Text`
  max-width: 320px;
  text-align: left;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #000000
`;

const Avatar = styled.Image`
  margin-top: 15px;
  border-radius: 150px;
  width: 150px;
  height: 150px;
`;

const AvatarView = styled.View`
  align-items: center;
`;
const ClientInfoItem = styled.View`
  align-items: center;
  /* text-align: center; */
  background-color: #e5e5e5;
`;

export default ClientInfoScreen;
