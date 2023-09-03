import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KanjiRow from './KanjiRow';

function KanjiTable({ kanjis, onDelete, onEdit }) {

    return (
            <table className="kanji-table">
                <thead>
                    <tr>
                        <th className="kanji-header">Kanji</th>
                        <th className="kanji-header">Romaji</th>
                        <th className="kanji-header">Hint</th>
                        <th className="kanji-header">Section</th>
                        <th className="kanji-header">Delete</th>
                        <th className="kanji-header">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {kanjis.map((kanji, index) => 
                        <KanjiRow
                            currKanji={kanji} 
                            onDelete={onDelete}
                            onEdit={onEdit} 
                            key={index}
                        />)}
                </tbody>
            </table>
    );
}


export default KanjiTable;