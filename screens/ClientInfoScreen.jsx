import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons, Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";

const ClientInfoScreen = ({ route }) => {
  return (
    <ClientInfoItem>
      <ClientInfoView>
        <Avatar
          source={{
            uri: route.params.client.avatar,
          }}
        ></Avatar>
        <NamePhoneView>
          <NameClient>{route.params.client.fullName}</NameClient>
          <PhoneClient>{route.params.client.phone}</PhoneClient>
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
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            <AntDesign name="calendar" size={28} color="#484848" />
            <DataService>{route.params.data}</DataService>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            <AntDesign name="clockcircleo" size={28} color="#484848" />
            <TimeService>{route.params.time}</TimeService>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            <AntDesign name="downcircleo" size={28} color="#484848" />
            <TypeService>{route.params.typeService}</TypeService>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <AntDesign name="creditcard" size={28} color="#484848" />
            <CostService>40 BYN</CostService>
          </View>
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
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  padding-left: 15px;
`;
const TypeService = styled.Text`
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  padding-left: 15px;
`;
const TimeService = styled.Text`
  width: 100%;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  padding-left: 15px;
`;

const DataService = styled.Text`
  width: 100%;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  padding-left: 15px;
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
  height: 44px;
  background-color: #43a047;
  margin: 0 15px 15px;
`;
const MessageButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 125px;
  height: 44px;
  background-color: #2a86ff;
  margin: 0 15px 15px;
`;

const PhoneClient = styled.Text`
  text-align: left;
  width: 100%;
  font-size: 22px;
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
