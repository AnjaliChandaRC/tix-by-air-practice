import Siderbar from "@/componets/dashboards/common/sidebar/Siderbar";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Siderbar />
        {children}
      </body>
    </html>
  );
}
