export const makeSizeForImage = (img, w, h) => {
    const splitImg = img.split("/");
    const addSize = splitImg.find((el) => el === "upload");
    const concatSize = `${addSize}/w_${w},h_${h},c_fill`;
    const startPath = splitImg.slice(0, 5);
    const endPath = splitImg.slice(-3);
    const newImagePath = [...startPath, concatSize, ...endPath].join("/");
    return newImagePath;
};