import useWindowSize from '@/hooks/size';
import React from 'react';

interface Props {
    embedId: string
}

const YouTubeEmbed = ({ embedId }: Props) => {
    const size = useWindowSize();

    return (
        <div className="w-full h-full border border-red">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${embedId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                width={size.width}
                height={size.height}
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;