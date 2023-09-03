import React from "react";

function KanjiFooter( { kanji, setKanji, kanjis, setRoman, setHinted, setImageURL })  {

    const handleClick = (kanjiString) => {
        const clickedKanji = JSON.parse(kanjiString);
        setKanji(clickedKanji);
        setRoman(false);
        setHinted(false);
	setImageURL("default URL");
    }

    return(
        <footer>
            <table className="kanji-footer-table">
                <thead>
                </thead>
                <tbody className="kanji-footer-body">
                    {kanjis.map((kanji, index) => 
                        <tr>
                            <td className="kanji-footer-cell" 
                                title="Kanji-Romaji"
                                id={JSON.stringify(kanji)}
                                onClick={e => handleClick(e.target.id)}
                                key={index}
                                >
				    {index+1} ~ {kanji.kanji}
                            </td>
                        </tr>
                        )}
                </tbody>
            </table>
        </footer>
    );

}

export default KanjiFooter;
