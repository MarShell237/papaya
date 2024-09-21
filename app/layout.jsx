import "./globals.css";
import Nav from "./components/Nav";
import Aside from "./components/Aside";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen">
        {/* <div className=" w-screen">
          <Aside></Aside>
          <div>
          <Nav className=""></Nav> */}
            {children}
          {/* </div>
        </div> */}
      </body>
    </html>
  );
}
