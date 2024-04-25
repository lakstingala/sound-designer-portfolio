import ImageCell from "@/components/imageCell"
import { ProjectData } from "@/models/project"

interface Props {
    data: ProjectData
}

export const ProjectCell = ({ data }: Props) => {
    return <ImageCell thumb={data.imageUrl} thumbAlt={""} thumbWidth={900} thumbHeight={900} onClick={function (): void {
        throw new Error("Function not implemented.")
    }} />
}