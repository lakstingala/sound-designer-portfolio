'use client'

import About from "@/components/about"
import Contacts from "@/components/contacts"
import ImageCell from "@/components/imageCell"
import TopMenu from "@/components/topMenu"
import ModalVideo from "@/components/videoModal"
import { useState } from "react"

export default function Home() {
  const [embedId, setEmbedId] = useState("")
  return <div>
    <TopMenu />
    {/* <div className="flex flex-col md:flex-row justify-between"> */}
    <div className="grid grid-cols-1 md:grid-cols-3">
      {["1", "2", "3", "11", "21", "31"].map(x => {
        return <div key={x}>
          <ImageCell thumb={"/moana.png"} thumbAlt={""} thumbWidth={1000} thumbHeight={1000} onClick={() => {
            setEmbedId("Fun")
          }} />
        </div>
      })}
      <ModalVideo embedId={embedId} onClose={function (): void {
        setEmbedId("")
      }} />
    </div>
    <About />
    <Contacts />
  </div>
}
