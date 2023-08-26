import Navbar from "@/app/components/Navbar"

export default function noteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <Navbar>
      {children}
    </Navbar></>
}