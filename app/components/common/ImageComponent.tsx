import React from 'react'
import { getImageUrl } from '../../logics/pathHelper';

type imageProps = {
    imageName: string;
    extensionName?: string;
    classText?: string;
}

export default function imgLessonDesk({ imageName, extensionName = "jpg", classText }: imageProps) {
    return (
        <img
            src={getImageUrl(imageName , extensionName)}
            className={`w-full h-[auto] delay-[250ms] duration-[400ms]`}
        />
    );
}
