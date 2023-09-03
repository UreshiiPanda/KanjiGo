import React from "react"

function HomePage() {
    return(
        <>
            <h2>About the Site</h2>
            <article id="mern-stack" className="main-text-section">
                <ul>
                    <li>
                        The purpose of this site is simple:   to help Japanese learners memorize their Kanji!
                    </li>
                    <li>
                        Select the Kanji Go tab to begin memorizing Kanji based on JLPT section
                    </li>
                    <li>
                        In the Kanji List tab you can add, edit, and delete Kanji in your personal Kanji list which is also organized by JLPT section and will list your Kanji alphabetically &#40;alphabetical by romaji&#41;
                    </li>
                    <li>
                        In the Kanji Go tab you can make use of OpenAI's Dall-E program by searching for a picture to match up with your 
                        kanji. Then you can take screenshots of your Kanji-picture pairs and load them into your app to be viewed in the Kanji Pics tab
                    </li>
                    <li>
                        Feel free to leave feedback for the site via the Contact tab
                    </li>
                </ul>
            </article>
        </>
    );
}


export default HomePage;
