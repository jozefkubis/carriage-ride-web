import "@/app/_styles/globals.css"
import Header from "./_components/Header"

// const notoSans = Noto_Sans({
//   subsets: ["latin"],
//   display: "swap",
// })

export const metadata = {
  title: {
    template: "%s",
    default: "Vitajte / Carriage Ride",
  },
  description:
    "Carriage Ride sú nezabudnuteľné romantické jazdy krásnou prírodou, alebo mestom.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
