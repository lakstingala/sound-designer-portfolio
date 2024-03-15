'use client'

import ImageCell from "@/components/imageCell"
import TopMenu from "@/components/topMenu"
import ModalVideo from "@/components/videoModal"
import { useState } from "react"

export default function Home() {
  const [embedId, setEmbedId] = useState("")
  return <div>
    <TopMenu />
    <div className="flex flex-col md:flex-row justify-between">
      {["1", "2", "3"].map(x => {
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
  </div>
}
