import { db } from "@/dataLayer/initFirebase";
import { ProjectData } from "@/models/project";
import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export const ProjectList = () => {
    const [project, SetProjects] = useState<ProjectData[]>([])

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "projects"),
            (snapshot) => {
                const projects: ProjectData[] = []
                snapshot.forEach((doc) => {
                    const proj = doc.data() as ProjectData
                    projects.push(proj)
                })
                SetProjects(projects)
            },
            (error) => {
                console.log(error)
            });

        return () => {
            unsubscribe()
        }
    })



    return <div>Project list
        <div>{project.map(x => <p key={x.id}>{x.title}</p>)}</div>
    </div>
}