export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: ({ colors }) => ({
      ...colors,
      primary: "#191E36",
      grey: "#AEB3CB",
      darkGray: "#343F5B",
      lightGray: "#98A2B3",
      divider: "#E5E7E7",
      Light: "#EDF1F4",
      softLight: "#F7FCFC",
      Dark: "#0A0D2C",
      darkBlue: "#232E40",
      Gray: {
        main: "#878787",
        Gray15: "#76799326",
      },
      Purple: {
        main: "#1B779B",
        light: "#4b95b2",
        hover: "#5d9ab3",
      },
      Navy: {
        main: "#0F172A",
        light: "#848d9c",
        hover: "#848d9c",
      },
      Green: {
        main: "#008D0F",
        light: "#33A63C",
        hover: "#006B0C",
      },
      Orange: {
        main: "#FF9E2B",
        light: "#FFC268",
        hover: "#CC7E22",
      },
      Red: {
        main: "#EE3939",
        light: "#F46A6A",
        hover: "#C12C2C",
      },
      success: {
        main: "#5CCD70",
        light: "#5CCD7033",
        hover: "#4BBC60",
      },
      secondary: {
        main: "#9747FF",
        light: "#9747FF33",
        hover: "#8636EE",
        tabhover: "#9747FF10",
      },
      error: {
        main: "#FF4B55",
        light: "#FF4B5533",
        hover: "#EE3A44",
      },
      inherit: {
        light: "#EDF1F4",
        dark: "#d6d9de",
      },
      warning: {
        main: "#DAB356",
        light: "#DAB35633",
        hover: "#C0A245",
      },
    }),
    extend: {
      boxShadow: {
        paper: "0px 25px 25px 0px rgba(0, 0, 0, 0.15)",
        custom:
          " 0px 2px 1px -1px rgba(0, 0, 0, 0.1),0px 1px 1px 0px rgba(0, 0, 0, 0.07), 0px 1px 3px 0px rgba(0, 0, 0, 0.06) ",
      },
      maxWidth: {
        xl: "1480px",
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
