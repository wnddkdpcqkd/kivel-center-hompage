import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
      backgroundImage: {
        mainImage: "url('../assets/images/MainImage.png')",
        centerDeskImage: "url('../assets/images/centerDesk.png')",
      },
      colors: {
        neutral: {
          10: "#F3F6FC",
          20: "#E8ECF4",
          30: "#DDE2EC",
          40: "#BCC6D6",
          50: "#98A1B0",
          60: "#636C7B",
          80: "#434A56",
          90: "#272C35",
        },
        primary: {
          10: "#FFF8F5",
          20: "#FFEDE8",
          30: "#FFD9CE",
          40: "#FFB7A0",
          60: "#FF8F6C",
          70: "#FF693A",
          80: "#DB4719",
        },
        yellow: {
          10: "#FFF8E9",
          20: "#FFE8B9",
          30: "#FFD787",
          70: "#FFBC39",
          80: "#F2A000",
        },
        purple: {
          10: "#F7F2FF",
          20: "#EBE1F9",
          30: "#D1B9F5",
          70: "#9C5BFA",
          80: "#7225E1",
        },
        mint: {
          10: "#EBF7F6",
          20: "#DAF2F2",
          30: "#A5E6E4",
          70: "#2AC1BC",
          80: "#0BAAA5",
        },
        indigo: "#2C4063",
        pastelPurple: "#A07DFF",
        pastelBlue: "#8EA1FF",
        skyBlue: "#528EF9",
        lightMint: "#00D4D0",
        pink: "#FFA3DA",
        warning: "#F65742",
      },
      boxShadow: {
        "custom-10": "3px 3px 40px 0px rgba(152, 161, 176, 0.10)",
        "custom-20": "3px 3px 40px 0px rgba(152, 161, 176, 0.15)",
      },
      extend: {
        height: ["group-focus"],
        // 다른 필요한 variant들을 추가할 수도 있습니다.
      },
      backgroundColor: {
        "transparent-white": "rgba(255, 255, 255, 0)",
      },
    },
  },
  plugins: [],
};
export default config;
