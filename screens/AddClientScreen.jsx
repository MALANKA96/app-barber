import * as React from "react";
import { useState } from "react";
import { Button, TextInput, View, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Formik } from "formik";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const AddClientScreen = () => {
  const [date, setDate] = useState(new Date(Date.UTC(2021, 0, 0, 0, 0, 0)));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(date.toLocaleString("ru-RU", { timeZone: "UTC" }));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <Container>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Имя Фамилия</Text>
            <TextInputFullName
              placeholder="Ivan Ivanov"
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              /* value={values.email} */
            />
            <Text>Телефон</Text>
            <TextInputPhone
              placeholder="8 (029) 777-88-99"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              keyboardType={"phone-pad"}
            />
            <View>
              <Text>Дата</Text>
              <ViewDate>
                <TextInputDate
                  placeholder="Date YY-MM-DD"
                  onChangeText={handleChange("date")}
                  onBlur={handleBlur("date")}
                  editable={false}
                  value={date
                    .toLocaleString("ru-RU", { timeZone: "UTC" })
                    .split(" ")
                    .splice(0, 3)
                    .reverse()
                    .join(`, `)}
                  disabled
                />
                <ViewDateCalendar>
                  <AntDesign
                    name="calendar"
                    size={34}
                    color="#ffffff"
                    onPress={showDatepicker}
                  />
                </ViewDateCalendar>
              </ViewDate>
              <Text>Время</Text>
              <ViewTime>
                <TextInputTime
                  placeholder="Time HH:MM"
                  onChangeText={handleChange("time")}
                  onBlur={handleChange("time")}
                  editable={false}
                  value={date
                    .toLocaleString("ru-RU", { timeZone: "UTC" })
                    .slice(11, 16)}
                />
                <ViewTimeClock>
                  <AntDesign
                    name="clockcircleo"
                    size={34}
                    color="#ffffff"
                    onPress={showTimepicker}
                  />
                </ViewTimeClock>
              </ViewTime>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  locale="ru-RU"
                />
              )}
            </View>
            <Text>Услуга</Text>
            <ViewService handleChange={"services"}>
              <Picker
                prompt="Pick one, just one"
                style={{ fontSize: 22 }}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item
                  label="Стрижка"
                  value="1"
                  style={{ fontSize: 20 }}
                />
                <Picker.Item
                  label="Стрижка машинкой"
                  value="2"
                  style={{ fontSize: 20 }}
                />
                <Picker.Item
                  label="Оформление бороды"
                  value="3"
                  style={{ fontSize: 20 }}
                />
                <Picker.Item
                  label="Классическое влажное бритье"
                  value="4"
                  style={{ fontSize: 20 }}
                />
              </Picker>
            </ViewService>

            <Button onPress={handleSubmit} title="ADD client" />
          </View>
        )}
      </Formik>
    </Container>
  );
};

const ViewService = styled.View`
  margin-top: 5px;
  border: 2px;
  border-radius: 7px;
  justify-content: flex-start;
  padding: 5px;
  margin-bottom: 25px;
  /* padding: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  
  border-radius: 7px; */
`;
const TextInputTime = styled.TextInput`
  margin-top: 5px;
  padding: 5px;
  width: 80%;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  border: 2px;
  border-radius: 7px;
`;

const ViewTimeClock = styled.TouchableOpacity`
  margin-top: 5px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  width: 15%;
  background-color: #00796b;
  border-radius: 7px;
`;

const ViewTime = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ViewDateCalendar = styled.TouchableOpacity`
  margin-top: 5px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  width: 15%;
  background-color: #00796b;
  border-radius: 7px;
`;

const ViewDate = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextInputDate = styled.TextInput`
  margin-top: 5px;
  padding: 5px;
  width: 80%;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  border: 2px;
  border-radius: 7px;
`;
const TextInputPhone = styled.TextInput`
  margin-top: 5px;
  padding: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  border: 2px;
  border-radius: 7px;
`;
const TextInputFullName = styled.TextInput`
  padding: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  border: 2px;
  border-radius: 7px;
`;
const Container = styled.View`
  padding: 20px;
  /*  flex: 1; */
  /* background-color: #ffffff; */
`;

export default AddClientScreen;
