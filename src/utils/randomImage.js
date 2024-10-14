export default function randomImage(w,h){
    const antCache = Math.floor(Math.random() * 101);
    return `https://picsum.photos/${w}/${h}?antCache=${antCache}` 
}