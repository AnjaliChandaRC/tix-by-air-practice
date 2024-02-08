import Siderbar from "@/componets/dashboards/common/sidebar/Siderbar";

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
