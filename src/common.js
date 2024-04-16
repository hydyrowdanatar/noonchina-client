import i18n from "./plugins/react.i18next";

export const homeAbout = [
  {
    id: 1,
    cover: "/public/aboutUsIcons/chinaLang.png",
    title: "LLD",
    desc: "LLDp1",
  },
  {
    id: 2,
    cover: "/public/aboutUsIcons/bachelor.png",
    title: "BACHELOR",
    desc: "BACHELORp1",
  },
  {
    id: 3,
    cover: "/public/aboutUsIcons/magister.png",
    title: "MAGISTER",
    desc: "MAGISTERp1",
  },
  {
    id: 4,
    cover: "/public/aboutUsIcons/collage.png",
    title: "COLLEGE",
    desc: "COLLEGEp1",
  },
];

export const awrapper = [
  {
    data: "90+",
    title: "universities",
  },

  {
    // cover: "https://img.icons8.com/ios/80/ffffff/athlete.png",
    data: "400+",
    title: "Students",
  },
  {
    // cover:
    //   "https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png",
    data: "50+",
    title: "City",
  },
  {
    // cover: "https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png",
    data: "65+",
    title: "Majors",
  },
];

export const online = [
  {
    id: 1,
    cover: "/public/whyWeIcons/users.png",
    courseName: "box1T",
    course: "box1P",
  },
  {
    id: 2,
    cover: "/public/whyWeIcons/star.png",
    courseName: "box2T",
    course: "box2P",
  },
  {
    id: 3,
    cover: "/public/whyWeIcons/document.png",
    courseName: "box3T",
    course: "box3P",
  },
  {
    id: 4,
    cover: "/public/whyWeIcons/plane.png",
    courseName: "box4T",
    course: "box4P",
  },
  {
    id: 5,
    cover: "/public/whyWeIcons/home.png",
    courseName: "box5T",
    course: "box5P",
  },
  {
    id: 6,
    cover: "/public/whyWeIcons/statistics.png",
    courseName: "box6T",
    course: "box6P",
  },
];

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  window.localStorage.setItem("language", lng);
};

export const base_url = "http://localhost:1337";
