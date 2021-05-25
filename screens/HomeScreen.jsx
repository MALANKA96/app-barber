import React from "react";
import { Text, View, Image, SectionList } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { Appointment, SectionTitle } from "../components";

const DATA = [
  {
    title: "25 мая",
    data: [
      {
        user: {
          fullName: "Серега Свирский",
          avatar:
            "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/9BdDsoF6s7bBbcrL-LGswtWb8buspMCLU5tPF-YNf40tK47W9o24jQZUQr70Nx0TYS3AFt-F1iQs7_foJzv_DWwH.jpg?size=100x0&quality=96&crop=417,546,700,700&ava=1",
        },
        time: "19:00",
        typeService: "Бритье бороды",
        active: true,
      },
      {
        user: {
          fullName: "Лёша Червоный",
          avatar:
            "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/i0HFJ22NUASZyLtguKlkNK3rjadKHmBHsQFoYU2_lplP2fLjK4y0PPX23I93KnDgGcJxCDF2hdJ0BccfoIhFIhSN.jpg?size=100x0&quality=96&crop=172,351,1382,1382&ava=1",
        },
        time: "20:10",
        typeService: "Стрижка усов",
      },
      {
        user: {
          fullName: "Евгений Шумский",
          avatar:
            "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/GF1pmBpu5qqsBjlZLnlNJa-xpjXYytICGos8phhZkdtGL2QM3wvhndtF54dUvXRdr2ib6aw9.jpg?size=100x0&quality=96&crop=351,146,1076,1076&ava=1",
        },
        time: "12:30",
        typeService: "Стрижка модельная",
      },
    ],
  },
  {
    title: "26 мая",
    data: [
      {
        user: {
          fullName: "Андрей Выгодин",
          avatar:
            "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/NkWozNHObcCg_q9SYX49n2qtNsXzAUZFke_d4ceazOcDQ2cYSoiu3qt0g0wmz_Kjnx5O9MGb.jpg?size=100x0&quality=96&crop=4,26,989,989&ava=1",
        },
        time: "11:00",
        typeService: "Стрижка под кроп",
      },
      {
        user: {
          fullName: "Серега Свирский",
          avatar:
            "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/9BdDsoF6s7bBbcrL-LGswtWb8buspMCLU5tPF-YNf40tK47W9o24jQZUQr70Nx0TYS3AFt-F1iQs7_foJzv_DWwH.jpg?size=100x0&quality=96&crop=417,546,700,700&ava=1",
        },
        time: "19:00",
        typeService: "Бритье бороды",
      },
      {
        user: {
          fullName: "Лёша Червоный",
          avatar:
            "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/i0HFJ22NUASZyLtguKlkNK3rjadKHmBHsQFoYU2_lplP2fLjK4y0PPX23I93KnDgGcJxCDF2hdJ0BccfoIhFIhSN.jpg?size=100x0&quality=96&crop=172,351,1382,1382&ava=1",
        },
        time: "20:10",
        typeService: "Стрижка усов",
      },
    ],
  },
  {
    title: "3 июня",
    data: [
      {
        user: {
          fullName: "Андрей Выгодин",
          avatar:
            "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/NkWozNHObcCg_q9SYX49n2qtNsXzAUZFke_d4ceazOcDQ2cYSoiu3qt0g0wmz_Kjnx5O9MGb.jpg?size=100x0&quality=96&crop=4,26,989,989&ava=1",
        },
        time: "11:00",
        typeService: "Стрижка под кроп",
      },
      {
        user: {
          fullName: "Серега Свирский",
          avatar:
            "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/9BdDsoF6s7bBbcrL-LGswtWb8buspMCLU5tPF-YNf40tK47W9o24jQZUQr70Nx0TYS3AFt-F1iQs7_foJzv_DWwH.jpg?size=100x0&quality=96&crop=417,546,700,700&ava=1",
        },
        time: "19:00",
        typeService: "Бритье бороды",
      },
      {
        user: {
          fullName: "Лёша Червоный",
          avatar:
            "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/i0HFJ22NUASZyLtguKlkNK3rjadKHmBHsQFoYU2_lplP2fLjK4y0PPX23I93KnDgGcJxCDF2hdJ0BccfoIhFIhSN.jpg?size=100x0&quality=96&crop=172,351,1382,1382&ava=1",
        },
        time: "20:10",
        typeService: "Стрижка усов",
      },
    ],
  },
];

const HomeScreen = () => {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
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
  background-color: #2a86ff;
  right: 25px;
  bottom: 25px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export default HomeScreen;
