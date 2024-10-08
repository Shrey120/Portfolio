import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Shreyash_Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={jetBrainsMono.variable}>
        <ToastContainer
          position='bottom-right' // Positioning the toast
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme='dark' // Choose your theme
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
