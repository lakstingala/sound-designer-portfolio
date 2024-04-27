import { db } from "@/dataLayer/initFirebase";
import { ProjectData } from "@/models/project";
import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProjectCell } from "./projectCell";

interface Props {
    onEdit: Dispatch<SetStateAction<ProjectData | undefined>>
}

export const ProjectList = ({ onEdit }: Props) => {
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



    return <div className="grid grid-cols-1 md:grid-cols-3">
        <div>{project.map(x => <div className="relative">
            <button onClick={e => onEdit(x)} className="absolute top-[0] right-[0] btn btn-primary z-50">Edit</button>
            <ProjectCell key={x.id} data={x} />
        </div>)}</div>
    </div>
}