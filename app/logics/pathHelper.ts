export const getImageUrl = (fileName: string, extension: string = "jpg") => {
    return new URL(`./public/images/${fileName}.${extension}`, import.meta.url)
        .href;
};