import noImage from '../assets/ImagePlaceholder/no-image-placeholder.webp'

/**
 * @param url
 */
const getCroppedImageUrl = (url: string): string => {
    if (!url) return <string>noImage;

    const search: string = "media/";
    const index: number = url.indexOf(search) + search.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
