import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Appointment = ({ user, typeService, time, active, navigation }) => {
  return (
    <GroupItem onPress={() => navigation.navigate("ClientInfo")}>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      ></Avatar>
      <View style={{ flex: 1 }}>
        <NameClient>{user.fullName}</NameClient>
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
  color: ${(props) => (props.active ? "#FFFFFF" : "#4294ff")};
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
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 45px;
  height: 45px;
  margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export default Appointment;
