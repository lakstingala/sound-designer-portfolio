'use client'

import About from "@/components/about"
import Contacts from "@/components/contacts"
import ImageCell from "@/components/imageCell"
import TopMenu from "@/components/topMenu"
import ModalVideo from "@/components/videoModal"
import { ProjectData } from "@/models/project"
import { useState } from "react"

export default async function Home() {
  const [embedId, setEmbedId] = useState("")
  const images = await getData() as ProjectData[]
  return <div>
    <TopMenu />
    {/* <div className="flex flex-col md:flex-row justify-between"> */}
    <div className="grid grid-cols-1 md:grid-cols-3">
      {images?.sort((a, b) => (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0)).map(x => {
        return <div key={x.id}>
          <ImageCell thumb={x.imageUrl} thumbAlt={""} thumbWidth={1000} thumbHeight={1000} onClick={() => {
            setEmbedId(x.videoUrl)
          }} title={x.title} description={x.description} />
        </div>
      })}
      <button onClick={async e => console.log(await getData())}>Get data</button>
      <p>{embedId}</p>
      <ModalVideo embedId={embedId} onClose={() => { setEmbedId("") }} />
    </div>
    <About />
    <Contacts />
  </div>
}

async function getData() {
  const res = await fetch('https://getprojects-ekeffyda6a-ey.a.run.app/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}