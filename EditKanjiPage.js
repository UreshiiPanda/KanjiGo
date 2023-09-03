import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditKanjiPage = ({ jlpt, toEditKanji, setKanjis }) => {
 
    const [kanji, setKanji]           = useState(toEditKanji.kanji);
    const [romaji, setRomaji]         = useState(toEditKanji.romaji);
    const [hint, setHint]             = useState(toEditKanji.hint);
    const [section, setSection]       = useState(toEditKanji.section);
    
    const redirect = useNavigate();
    
    const editKanji = async () => {

	if (jlpt !== section) {
	    // if section has changed, then we need to perform a delete and then an add since the new section is in
	    // a different Document in the DB (the DB is split by jlpt sections)
	    const responseDel = await fetch(`/delete/${toEditKanji._id}/${jlpt}`, { method: 'DELETE' });
	    if (responseDel.status === 204) {
		// the only way to get React to immediately upload the updated kanji DB is by fetching the entire DB again
		// JLPT param turns into a string here
		const responseDel = await fetch(`/get/${jlpt}`, { method: 'GET' });      
		const newKanjis = await responseDel.json();
		setKanjis(newKanjis);
	    } else {
		console.error(`Failed to update kanji with _id = ${toEditKanji._id}, status code = ${responseDel.status}`)
	    }

	    const newKanji = {kanji, romaji, hint, section};
            const responseAdd = await fetch('/create', {
                method: 'POST',
                body: JSON.stringify(newKanji),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(responseAdd.status === 201){
                alert(`A new Kanji has been successfully updated via the EditKanjiPage`);

                // the only way to get React to immediately upload the updated kanji DB is by fetching the entire DB again
	        // JLPT param turns into a string here
                const responseAdd = await fetch(`/get/${jlpt}`, { method: 'GET' });     
                const newKanjis = await responseAdd.json();
                setKanjis(newKanjis);

                redirect("/kanji-list");
            } else {
                alert(`A new Kanji has failed to update via the EditKanjiPage with status code: ${responseAdd.status}`);
                redirect("/kanji-list");
            }


	} else {
	    const sectionInt = parseInt(section);
	    const editKanji = {kanji, romaji, hint, sectionInt};
            const response = await fetch(`/update/${toEditKanji._id}`, {
                method: 'PUT',
                body: JSON.stringify(editKanji),
                headers: {'Content-Type': 'application/json'},
            });

            if (response.status === 200) {
                alert(`A Kanji has been successfully updated via the EditKanjiPage`);
                
                // the only way to get React to immediately upload the updated kanji DB is by fetching the entire DB again
	        // JLPT param turns into a string here
                const response = await fetch(`/get/${jlpt}`, { method: 'GET' });      
                const newKanjis = await response.json();
                setKanjis(newKanjis);
            } else {
                const errMessage = await response.json();
                alert(`A Kanji has failed to update via the EditKanjiPage with status code: ${response.status}. ${errMessage.Error}`);
            }
            redirect("/kanji-list");
	}
    }
    return (
        <>
            <article>
                <h2>Edit Kanji</h2>
                <p className="kanji-list-p">Here you can edit a Kanji in the Kanji Collection in Mongo DB. This will change any values you decide to 
                    update in the database, this way your changes will persist across all of your Kanji studying. Your Kanji
                    can be updated at any time via the edit icon on the Kanji List page.
                </p>
                    <fieldset>
                        <legend>What do you want to update in this Kanji?</legend>
                        <label htmlFor="newKanji">Kanji</label>
                        <input
                            type="text"
                            name="kanji"
                            value={kanji}
                            onChange={e => setKanji(e.target.value)} 
                            id="newKanji" />
                        
                        <label htmlFor="newRomaji">Romaji</label>
                        <input
                            type="text"
                            name="romaji"
                            value={romaji}
                            onChange={e => setRomaji(e.target.value)} 
                            id="newRomaji" />

                        <label htmlFor="newHint">Hint</label>
                        <input
                            type="text"
                            name="hint"
                            value={hint}
                            onChange={e => setHint(e.target.value)} 
                            id="newHint" />

                        <label htmlFor="newSection">Kanji JLPT Section</label>
                        <input
                            type="number"
                            name="section"
                            value={section}
                            onChange={e => setSection(e.target.value)} 
                            id="newSection" />

                        <button onClick={editKanji}>Edit Kanji</button>
                    </fieldset>
            </article>
        </>
    );
}


export default EditKanjiPage;
