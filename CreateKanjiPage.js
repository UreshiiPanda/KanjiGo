import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CreateKanjiPage = ( { jlpt, setKanjis }) => {

    const [kanji, setKanji]           = useState('');
    const [romaji, setRomaji]         = useState('');
    const [hint, setHint]             = useState('');
    const [section, setSection]       = useState('');
    
    const redirect = useNavigate();

    const addKanji = async () => {
        const newKanji = {kanji, romaji, hint, section};
        const response = await fetch('/create', {
            method: 'POST',
            body: JSON.stringify(newKanji),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`A new Kanji has been successfully created via the CreateKanjiPage`);

            // the only way to get React to immediately upload the updated kanji DB is by fetching the entire DB again
	    // JLPT param turns into a string here
            const response = await fetch(`/get/${jlpt}`, { method: 'GET' });     
            const newKanjis = await response.json();
            setKanjis(newKanjis);

            redirect("/kanji-list");
        } else {
            alert(`A new Kanji has failed to create via the CreateKanjiPage with status code: ${response.status}`);
            redirect("/kanji-list");
        }
    };


    return (
        <>
        <article>
            <h2>Add New Kanji</h2>
            <p className="kanji-list-p">Here you can add a new Kanji to the Kanji Collection in MongoDB. This will save your new Kanji to the
                database so that it'll still be here when you return. You can always delete the Kanji from the database 
                with the delete icon on the Kanji List page.
            </p>
                <fieldset>
                    <legend>Which Kanji do you want to add?</legend>
                    <label htmlFor="newKanji">Kanji</label>
                    <input
                        type="text"
                        name="kanji"
                        placeholder="New Kanji"
                        value={kanji}
                        onChange={e => setKanji(e.target.value)} 
                        id="newKanji" />
                    
                    <label htmlFor="newRomaji">Romaji</label>
                    <input
                        type="text"
                        name="romaji"
                        value={romaji}
                        placeholder="New Romaji"
                        onChange={e => setRomaji(e.target.value)} 
                        id="newRomaji" />

                    <label htmlFor="newHint">Hint</label>
                    <input
                        type="text"
                        name="hint"
                        placeholder="Hint word for the Kanji"
                        value={hint}
                        onChange={e => setHint(e.target.value)} 
                        id="newHint" />

                    <label htmlFor="newSection">Kanji JLPT Section</label>
                    <input
                        type="number"
                        name="section"
                        value={section}
                        placeholder={jlpt}
                        onChange={e => setSection(e.target.value)} 
                        id="newSection" />

                    <button onClick={addKanji}>Add Kanji</button>
                </fieldset>
            </article>
        </>
    );
}

export default CreateKanjiPage;
