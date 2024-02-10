import Sidebar from "@/components/dashboards/common/sidebar/SideBar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        < Sidebar />
        {children}
      </body>
    </html>
  );
}
