import React from "react"
import ReactImageGallery from "react-image-gallery";


function GalleryPage() {
    const images = [
        {
            original: "images/screenshot_neko.png",
            thumbnail: "images/screenshot_neko.png",
            originalHeight: '1000px',
        },
        {
            original: "images/screenshot_inu.png",
            thumbnail: "images/screenshot_inu.png",
            originalHeight: '1000px',
        },
        {
            original: "images/screenshot_dai.png",
            thumbnail: "images/screenshot_dai.png",
            originalHeight: '1000px',
        },
        {
            original: "images/screenshot_gen.png",
            thumbnail: "images/screenshot_gen.png",
            originalHeight: '1000px',
        },
        {
            original: "images/screenshot_motsu.png",
            thumbnail: "images/screenshot_motsu.png",
            originalHeight: '1000px',
        },



        {
            original: "images/japanese-formal-verb-conjugations.jpeg",
            thumbnail: "images/japanese-formal-verb-conjugations.jpeg",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-informal-verb-conjugations.jpeg",
            thumbnail: "images/japanese-informal-verb-conjugations.jpeg",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-particles-romaji-beginners.jpeg", 
            thumbnail: "images/japanese-particles-romaji-beginners.jpeg",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-particles-romaji-beginners-2.jpeg", 
            thumbnail: "images/japanese-particles-romaji-beginners-2.jpeg",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-hiragana-beginners.jpeg", 
            thumbnail: "images/japanese-hiragana-beginners.jpeg",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-hiragana-beginners-2.jpeg", 
            thumbnail: "images/japanese-hiragana-beginners-2.jpeg",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-sentence-endings-informal-no.jpeg", 
            thumbnail: "images/japanese-sentence-endings-informal-no.jpeg",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-sentence-endings-informal-ne-yo.jpeg", 
            thumbnail: "images/japanese-sentence-endings-informal-ne-yo.jpeg",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-sentence-endings-informal-janai.jpeg", 
            thumbnail: "images/japanese-sentence-endings-informal-janai.jpeg",
            originalHeight: '1000px',
        },
        {
            original: "images/japanese-sentence-endings-informal-njanai.jpeg", 
            thumbnail: "images/japanese-sentence-endings-informal-njanai.jpeg",
            originalHeight: '1000px',
        },
    ]

    return(
        <>
            <h2>Kanji Picture Gallery</h2>
            <article>                 
                <ReactImageGallery items={images} className="react-image-gallery"/>
            </article>
        </>

    );
}


export default GalleryPage;
