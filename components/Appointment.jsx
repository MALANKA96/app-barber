import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Appointment = ({ navigate, item }) => {
  const { client, typeService, time, active} = item;
  return (
    <GroupItem onPress={navigate.bind(this, "ClientInfo", item)}>
      <Avatar
        source={{
          uri: client.avatar,
        }}
      ></Avatar>
      <View style={{ flex: 1 }}>
        <NameClient>{client.fullName}</NameClient>
        <TypeService>{typeService}</TypeService>
      </View>
      <SessionData active={active}>{time}</SessionData>
    </GroupItem>
  );
};

Appointment.defaultProps = {
  title: "Untitled",
  items: [],
};

const SessionData = styled.Text`
  background: ${(props) => (props.active ? "#2A86FF" : "#e9f5ff")};
  color: ${(props) => (props.active ? "#FFFFFF" : "#0C0C0C")};
  border-radius: 18px;
  font-weight: 600;
  font-size: 16px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 36px;
`;

const TypeService = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #8b979f;
`;

const NameClient = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #f3f3f3;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin: 5px;
  padding: 20px;
  background-color: #333635 ;
  border-radius: 15px;
  /* border-bottom-width: 5px; */
  /* border-bottom-color: #f3f3f3; */
  border-bottom-color: #0C0C0C; 
`;

export default Appointment;
