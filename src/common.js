import i18n from "./plugins/react.i18next";

export const homeAbout = [
  {
    id: 1,
    cover: "/aboutUsIcons/chinaLang.png",
    title: "LLD",
    desc: "LLDp1",
  },
  {
    id: 2,
    cover: "/aboutUsIcons/bachelor.png",
    title: "BACHELOR",
    desc: "BACHELORp1",
  },
  {
    id: 3,
    cover: "/aboutUsIcons/magister.png",
    title: "MAGISTER",
    desc: "MAGISTERp1",
  },
  {
    id: 4,
    cover: "/aboutUsIcons/collage.png",
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
    cover: "/whyWeIcons/users.png",
    courseName: "box1T",
    course: "box1P",
  },
  {
    id: 2,
    cover: "/whyWeIcons/star.png",
    courseName: "box2T",
    course: "box2P",
  },
  {
    id: 3,
    cover: "/whyWeIcons/document.png",
    courseName: "box3T",
    course: "box3P",
  },
  {
    id: 4,
    cover: "/whyWeIcons/plane.png",
    courseName: "box4T",
    course: "box4P",
  },
  {
    id: 5,
    cover: "/whyWeIcons/home.png",
    courseName: "box5T",
    course: "box5P",
  },
  {
    id: 6,
    cover: "/whyWeIcons/statistics.png",
    courseName: "box6T",
    course: "box6P",
  },
];

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  window.localStorage.setItem("language", lng);
};

export const base_url = "http://95.85.121.153:1339";
