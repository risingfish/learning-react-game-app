const getCroppedImageUrl = (url: string) => {
    if (!url) return '';

    const search: string = "media/";
    const index: number = url.indexOf(search) + search.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
