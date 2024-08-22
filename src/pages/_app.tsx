import { AppType } from "next/app";
import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { DM_Sans } from "next/font/google";
import Theming from "@/components/theme";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div lang="en" className={dmSans.className}>
      
        <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
