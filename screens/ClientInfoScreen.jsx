import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";

const ClientInfoScreen = ({ route }) => {
  return (
    <ClientInfoItem>
      <ClientInfoView>
        <Avatar
          source={{
            uri: route.params.user.avatar,
          }}
        ></Avatar>
        <NamePhoneView>
          <NameClient>{route.params.user.fullName}</NameClient>
          <PhoneClient>{route.params.user.phone}</PhoneClient>
        </NamePhoneView>
      </ClientInfoView>

      <ButtonsView>
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
      </ButtonsView>

      <NoteView>
        <NoteText>Записи</NoteText>
        <NoteCardView
          style={{
            shadowColor: "#767676",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2.5,
            elevation: 5,
          }}
        >
          <DataService>
            <AntDesign name="calendar" size={32} color="black" />
            {route.params.data}
          </DataService>
          <TimeService>
            <Ionicons name="md-time-outline" size={34} color="black" />
            {route.params.time}
          </TimeService>
          <TypeService>
            <MaterialIcons name="turned-in-not" size={34} color="black" />
            {route.params.typeService}{" "}
          </TypeService>
          <CostService>
            <FontAwesome name="money" size={30} color="black" /> 40 BYN
          </CostService>
        </NoteCardView>
      </NoteView>

      <HistoriButton
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
        <MaterialIcons name="history" size={34} color="white" />
      </HistoriButton>
      <PlusButton
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
        <MaterialIcons name="edit" size={32} color="white" />
      </PlusButton>
    </ClientInfoItem>
  );
};

const PlusButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background-color: #2a86ff;
  right: 25px;
  bottom: 25px;
`;
const HistoriButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background-color: #2a86ff;
  left: 25px;
  bottom: 25px;
`;

const CostService = styled.Text`
  width: 100%;
  font-size: 22px;
  font-weight: 400;
  color: #000000;
  padding: 0px 15px 5px 15px;
`;
const TypeService = styled.Text`
  width: 100%;
  font-size: 22px;
  font-weight: 400;
  color: #000000;
  padding: 0px 15px 5px 15px;
`;
const TimeService = styled.Text`
  width: 100%;
  font-size: 22px;
  font-weight: 400;
  color: #000000;
  padding: 0px 15px 5px 15px;
`;
const DataService = styled.Text`
  width: 100%;
  font-size: 22px;
  font-weight: 400;
  color: #000000;
  padding: 0px 15px 5px 15px;
`;
const NoteText = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #000000;
  padding: 10px;
`;

const CallButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 125px;
  height: 48px;
  background-color: #43a047;
  margin: 0 15px 15px;
`;
const MessageButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 125px;
  height: 48px;
  background-color: #2a86ff;
  margin: 0 15px 15px;
`;

const PhoneClient = styled.Text`
  text-align: left;
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  color: #767676;
  margin: 0 15px 15px;
`;

const NameClient = styled.Text`
  text-align: left;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
`;

const Avatar = styled.Image`
  border-radius: 150px;
  width: 100px;
  height: 100px;
`;

const NoteCardView = styled.View`
  width: 300px;
  border-radius: 10px;
  background: #ffffff;
`;

const NoteView = styled.View`
  background: #f8fafd;
`;

const ButtonsView = styled.View`
  justify-content: space-around;
  flex-flow: row;
`;

const NamePhoneView = styled.View`
  padding-left: 15px;
  align-items: center;
  justify-content: center;
`;

const ClientInfoView = styled.View`
  padding: 15px;
  /* justify-content: space-between; */
  flex-flow: row;
`;
const ClientInfoItem = styled.View`
  flex: 1;
  align-items: center;
  background-color: #f8fafd;
`;

export default ClientInfoScreen;
