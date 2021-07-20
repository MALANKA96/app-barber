export { default as HomeScreen } from "./HomeScreen";
export { default as ClientInfoScreen } from "./ClientInfoScreen";
export { default as AddClientScreen } from "./AddClientScreen";
 export { default as DATA } from "./help";


/* const DATA = [
    {
      title: "25 мая",
      data: [
        {
          user: {
            fullName: "Серега Свирский",
            phone: '8 (029) 256-64-85',
            avatar:
              "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/9BdDsoF6s7bBbcrL-LGswtWb8buspMCLU5tPF-YNf40tK47W9o24jQZUQr70Nx0TYS3AFt-F1iQs7_foJzv_DWwH.jpg?size=100x0&quality=96&crop=417,546,700,700&ava=1",
          },
          data: "25 мая",
          time: "19:00",
          typeService: "Бритье бороды",
          active: true,
        },
        {
          user: {
            fullName: "Лёша Червоный",
            phone: '8 (029) 566-89-12',
            avatar:
              "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/i0HFJ22NUASZyLtguKlkNK3rjadKHmBHsQFoYU2_lplP2fLjK4y0PPX23I93KnDgGcJxCDF2hdJ0BccfoIhFIhSN.jpg?size=100x0&quality=96&crop=172,351,1382,1382&ava=1",
          },
          data: "25 мая",
          time: "20:10",
          typeService: "Стрижка усов",
        },
        {
          user: {
            fullName: "Евгений Шумский",
            phone: '8 (029) 123-13-68',
            avatar:
              "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/GF1pmBpu5qqsBjlZLnlNJa-xpjXYytICGos8phhZkdtGL2QM3wvhndtF54dUvXRdr2ib6aw9.jpg?size=100x0&quality=96&crop=351,146,1076,1076&ava=1",
          },
          data: "25 мая",
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
            phone: '8 (029) 888-88-88',
            avatar:
              "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/NkWozNHObcCg_q9SYX49n2qtNsXzAUZFke_d4ceazOcDQ2cYSoiu3qt0g0wmz_Kjnx5O9MGb.jpg?size=100x0&quality=96&crop=4,26,989,989&ava=1",
          },
          data: "26 мая",
          time: "11:00",
          typeService: "Стрижка под кроп",
        },
        {
          user: {
            fullName: "Серега Свирский",
            phone: '8 (029) 256-64-85',
            avatar:
              "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/9BdDsoF6s7bBbcrL-LGswtWb8buspMCLU5tPF-YNf40tK47W9o24jQZUQr70Nx0TYS3AFt-F1iQs7_foJzv_DWwH.jpg?size=100x0&quality=96&crop=417,546,700,700&ava=1",
          },
          data: "26 мая",
          time: "19:00",
          typeService: "Бритье бороды",
        },
        {
          user: {
            fullName: "Лёша Червоный",
            phone: '8 (029) 566-89-12',
            avatar:
              "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/i0HFJ22NUASZyLtguKlkNK3rjadKHmBHsQFoYU2_lplP2fLjK4y0PPX23I93KnDgGcJxCDF2hdJ0BccfoIhFIhSN.jpg?size=100x0&quality=96&crop=172,351,1382,1382&ava=1",
          },
          data: "26 мая",
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
            phone: '8 (029) 888-88-88',
            avatar:
              "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/NkWozNHObcCg_q9SYX49n2qtNsXzAUZFke_d4ceazOcDQ2cYSoiu3qt0g0wmz_Kjnx5O9MGb.jpg?size=100x0&quality=96&crop=4,26,989,989&ava=1",
          },
          data: "3 июня",
          time: "11:00",
          typeService: "Стрижка под кроп",
        },
        {
          user: {
            fullName: "Серега Свирский",
            phone: '8 (029) 256-64-85',
            avatar:
              "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/9BdDsoF6s7bBbcrL-LGswtWb8buspMCLU5tPF-YNf40tK47W9o24jQZUQr70Nx0TYS3AFt-F1iQs7_foJzv_DWwH.jpg?size=100x0&quality=96&crop=417,546,700,700&ava=1",
          },
          data: "3 июня",
          time: "19:00",
          typeService: "Бритье бороды",
        },
        {
          user: {
            fullName: "Лёша Червоный",
            phone: '8 (029) 566-89-12',
            avatar:
              "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/i0HFJ22NUASZyLtguKlkNK3rjadKHmBHsQFoYU2_lplP2fLjK4y0PPX23I93KnDgGcJxCDF2hdJ0BccfoIhFIhSN.jpg?size=100x0&quality=96&crop=172,351,1382,1382&ava=1",
          },
          data: "3 июня",
          time: "20:10",
          typeService: "Стрижка усов",
        },
      ],
    },
  ]; */