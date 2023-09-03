import React from "react";


function IntraNav( {jlpt, setJlpt, setKanjis, setKanji, setImageURL, setRoman, setHinted} ) {

    // set the current JLPT section
    const changeJlpt = async (newJlpt) => {
        setJlpt(newJlpt);
        loadKanji(newJlpt);
        setKanji({
            kanji: "ご",
            romaji: "go",
            hint: "5",
            section: 1
        });
        setImageURL("default URL");
        setRoman(false);
        setHinted(false);
    }

    // RETRIEVE the entire list of kanji for the current JLPT section
    // JLPT param turns into a string here
    const loadKanji = async (jlpt) => {
        const response = await fetch(`/get/${jlpt}`, { method: 'GET' });     
        const newKanjis = await response.json();
        setKanjis(newKanjis);
    }

    
    return (

    <nav className="intra-nav">
        <a id={ jlpt===1 ? "active" : null} onClick={() => changeJlpt(1)}>JLPT <br></br> N1</a>
        <a id={ jlpt===2 ? "active" : null} onClick={() => changeJlpt(2)}>JLPT <br></br> N2</a>
        <a id={ jlpt===3 ? "active" : null} onClick={() => changeJlpt(3)}>JLPT <br></br> N3</a>
        <a id={ jlpt===4 ? "active" : null} onClick={() => changeJlpt(4)}>JLPT <br></br> N4</a>
        <a id={ jlpt===5 ? "active" : null} onClick={() => changeJlpt(5)}>JLPT <br></br> N5</a>
    </nav>

    );
}

export default IntraNav;

