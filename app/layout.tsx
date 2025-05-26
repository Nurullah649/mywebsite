import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "AI & Robotics Engineer Portfolio",
  description: "Personal portfolio website for a Computer Engineering student specializing in AI and Robotics",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'