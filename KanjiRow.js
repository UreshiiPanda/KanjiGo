import React from "react";
import { TiDelete, TiEdit } from "react-icons/ti";


function KanjiRow( {currKanji, onDelete, onEdit} ) {

    return(
        <tr>
            <td className="kanji-cell" title="Kanji">{currKanji.kanji}</td>
            <td className="kanji-cell" title="Romaji">{currKanji.romaji}</td>
            <td className="kanji-cell" title="Study Hint">{currKanji.hint}</td>
            <td className="kanji-cell" title="JLPT Section">{currKanji.section}</td>

            <td><TiDelete onClick={() => onDelete(currKanji._id)} className="delete-kanji-icon" title="delete-kanji" /></td>
            <td><TiEdit onClick={() => onEdit(currKanji)} className="edit-kanji-icon" title="edit-kanji" /></td>
        </tr>
    )
}

export default KanjiRow;