import * as React from "react";
import { useState } from "react";
import { Button, TextInput, View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Formik } from "formik";
import styled from "styled-components/native";

const AddClientScreen = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
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
            <TextInputFullName
              placeholder="Full Name"
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              /* value={values.email} */
            />
            <TextInputPhone
              placeholder="Tellefone"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              /*    value={values.email} */
            />
            <View>
              <View>
                <TextInputDate
                  placeholder="Date"
                  onChangeText={handleChange("date")}
                  onBlur={handleBlur("date")}

                  /*    value={values.email} */
                />
                <Button onPress={showDatepicker} title="Date" />
              </View>
              <View>
                <Button onPress={showTimepicker} title="Time" />
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </Container>
  );
};

const TextInputDate = styled.TextInput`
  margin-top: 5px;
  padding: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  border: 2px;
`;
const TextInputPhone = styled.TextInput`
  margin-top: 5px;
  padding: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  border: 2px;
`;
const TextInputFullName = styled.TextInput`
  padding: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  border: 2px;
`;
const Container = styled.View`
  padding: 20px;
  /*  flex: 1; */
  /* background-color: #ffffff; */
`;

export default AddClientScreen;
