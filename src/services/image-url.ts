const getCroppedImageUrl = (url: string) => {
    const search: string = 'media/';
    const index: number = url.indexOf(search) + search.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}


// https://media.rawg.io/media/crop/600/400/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg

export default getCroppedImageUrl;