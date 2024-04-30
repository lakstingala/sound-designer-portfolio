import { db } from "@/dataLayer/initFirebase";
import { ProjectData } from "@/models/project";
import { collection, query, getDocs, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProjectCell } from "./projectCell";

interface Props {
    onEdit: Dispatch<SetStateAction<ProjectData | undefined>>
}

export const ProjectList = ({ onEdit }: Props) => {
    const [project, SetProjects] = useState<ProjectData[]>([])
    const [isDeleting, setIsDeleting] = useState<ProjectData | undefined>(undefined)

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "projects"),
            (snapshot) => {
                const projects: ProjectData[] = []
                snapshot.forEach((doc) => {
                    const proj = doc.data() as ProjectData
                    projects.push(proj)
                })
                SetProjects(projects.sort((a, b) => (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0))
                )
            },
            (error) => {
                console.log(error)
            });

        return () => {
            unsubscribe()
        }
    })

    const deleteProject = (projectId: string) => {
        const cityRef = doc(db, "projects", projectId);

        deleteDoc(cityRef)
            .then(_x => {
                console.log("done")
            })
            .catch(error => alert(error))
            .finally(() => {
                setIsDeleting(undefined)
            })
    }


    return <div className="grid grid-cols-1 md:grid-cols-3">
        {project.map(x => <div key={x.id} className="relative">
            <button onClick={e => onEdit(x)} className="absolute top-[5px] right-[5px] btn btn-primary z-50">Edit</button>
            <button onClick={e => { setIsDeleting(x) }} className="absolute top-[55px] right-[5px] btn btn-primary z-50">Delete</button>
            <input className="modal-state" id="modal-1" type="checkbox" checked={isDeleting != undefined} />
            <div className="modal">
                <label className="modal-overlay" htmlFor="modal-1"></label>
                <div className="modal-content flex flex-col gap-5">
                    <label htmlFor="modal-1" onClick={e => { setIsDeleting(undefined) }} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h2 className="text-xl">Puf and its gone</h2>
                    <span>Are you sure you want to delete {isDeleting?.title} project! It will be gone forever</span>
                    <div className="flex gap-3">
                        <button onClick={e => { deleteProject(isDeleting?.id || "") }} className="btn btn-error btn-block">Delete</button>

                        <button onClick={e => { setIsDeleting(undefined) }} className="btn btn-block">Cancel</button>
                    </div>
                </div>
            </div>
            <ProjectCell key={x.id} data={x} />
        </div>)}</div>
}