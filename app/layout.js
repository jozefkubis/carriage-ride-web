import "@/app/_styles/globals.css"

// const notoSans = Noto_Sans({
//   subsets: ["latin"],
//   display: "swap",
// })

// export const metadata = {
//   title: {
//     template: "%s",
//     default: "Welcome / Warehouse",
//   },
//   description:
//     "The Warehouse is a place where you can find all the products you need.",
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
