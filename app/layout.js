import Navigation from "../components/navigation";
import "../styles/global.css";

export const metadata = {
  title: {
    template: "%s | 이런게 된다.",
    default: "기본 값",
  },
  description: "이건 설명입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
