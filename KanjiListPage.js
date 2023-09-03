import React from 'react';
import { useNavigate } from "react-router-dom";
import KanjiTable from '../components/KanjiTable';


function KanjiListPage( {jlpt, setJlpt, setKanji, kanjis, setKanjis} ) {

    const redirect = useNavigate();

    // CREATE a new single kanji
    const onCreateKanji = async () => {
        redirect("/kanji-create");
    }

    // UPDATE a single kanji
    const onEditKanji = async currKanji => {
        setKanji(currKanji);
        redirect("/kanji-edit");
    }

    // DELETE a single kanji  
    const onDeleteKanji = async _id => {
        const response = await fetch(`/delete/${_id}/${jlpt}`, { method: 'DELETE' });
        if (response.status === 204) {
            // the only way to get React to immediately upload the updated kanji DB is by fetching the entire DB again
	    // JLPT param turns into a string here
            const response = await fetch(`/get/${jlpt}`, { method: 'GET' });      
            const newKanjis = await response.json();
            setKanjis(newKanjis);
        } else {
            console.error(`Failed to delete kanji with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // DISPLAY the kanji
    return (
        <>
            <div className="titles-div">
                <h2 className='title-kanji'>Kanji List</h2>
                <h2 className='title-jlpt'>JLPT {jlpt}</h2>
            </div>
            <p className="kanji-list-p">Your current Kanji list. Each Kanji comes with its written Japanese form, 
                romaji form, a hint word for memorizing that Kanji, and the JLPT section that the Kanji is required for
            </p>
            <button className="add-kanji-button" onClick={() => onCreateKanji()}>Add Kanji</button>
            
            <KanjiTable
                kanjis={kanjis} 
                onEdit={onEditKanji} 
                onDelete={onDeleteKanji} 
            />
        </>
    );

}

export default KanjiListPage;
