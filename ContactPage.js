import React, { useState } from "react"
import { useNavigate } from "react-router-dom";


function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [radio, setRadio] = useState('');
    const [checkbox1, setCheckbox1] = useState();
    const [checkbox2, setCheckbox2] = useState();
    const [checkbox3, setCheckbox3] = useState();
    const [checkbox4, setCheckbox4] = useState();
    const [select, setSelect] = useState('Yes');
    const [textArea, setTextArea] = useState('');

    const redirect = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
	let checkboxes = [];
	if (checkbox1 !== null) {
	    checkboxes.push(checkbox1)
	}
	if (checkbox2 !== null) {
	    checkboxes.push(checkbox2)
	}
	if (checkbox3 !== null) {
	    checkboxes.push(checkbox3)
	}
	if (checkbox4 !== null) {
	    checkboxes.push(checkbox4)
	}
        const userInput = {
            name: name,
            email: email,
            radio: radio,
            checkbox: checkboxes,
            select: select,
            textArea: textArea,
        };


        const response = await fetch('/contactForm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInput)
        });
	const email_address = await response.json();

	if (response.status === 200) {
	    console.log("email address: ", email_address.address);
	    alert(`Form submission successful, email sent to Ethereal mail at the following address: ${email_address.address}`);
	    redirect("/");
        } else {
	    console.error("Failed to receive user Contact input");
	    alert("Failed to receive user Contact input");
	};
    };

    return (
        <>
            <h2>Contact Form</h2>
            <p className="kanji-list-p">
                This is an online Form that you can fill out to leave feedback for this website. Please fill in your
                information with any additional comments you'd like to make. Fields outlined in red are required for
                submitting the form.
            </p>

            <article>
                <form>
                    <fieldset>
                        <legend>
                            Name Input
                        </legend>
                            <label htmlFor="nameField">Please provide your name:</label>
                            <input 
                                type="text" 
                                id="nameField"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                name="nameField"
                                className="required"
                                placeholder="firstname lastname" 
                                minLength="3"
                                maxLength="100"
                                tabIndex="1"
                                autoFocus
                                required
                            />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Email Input
                        </legend>
                        <label htmlFor="emailField">Please provide your email:</label>
                        <input 
                            type="email" 
                            id="emailField"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name="emailField"
                            className="required"
                            placeholder="my_email@mail.com" 
                            minLength="3"
                            maxLength="100"
                            tabIndex="2"
                            pattern="[^ @]+@[^ @]+.[a-z]+"
                            required
                        />
                    </fieldset>
                    <fieldset className="radio-field">
                        <legend className="radio-checkbox-legend">
                            What's the most difficult part about learning Japanese?
                        </legend>
                        <article className="radio-article">
                            <label htmlFor="radioKanjiField" className="radio-label">Kanji</label>
                            <input 
                                type="radio"
                                id="radioKanjiField"
                                value="Kanji"
                                onChange={e => setRadio(e.target.value)}
                                name="radioField" 
                                tabIndex="3"          
                            />
                        </article>  
                        <article className="radio-article">
                            <label htmlFor="radioGrammarField" className="radio-label">Grammar</label>     
                            <input
                                type="radio" 
                                id="radioGrammarField"
                                value="Grammar"
                                onChange={e => setRadio(e.target.value)}
                                name="radioField" 
                                tabIndex="3" 
                            />
                        </article>
                        <article className="radio-article">
                            <label htmlFor="radioListeningField" className="radio-label">Listening</label>
                            <input
                                type="radio" 
                                id="radioListeningField"
                                value="Listening"
                                onChange={e => setRadio(e.target.value)}
                                name="radioField" 
                                tabIndex="3" 
                            />
                        </article>
                        <article className="radio-article">
                            <label htmlFor="radioSpeakingField" className="radio-label">Speaking</label>
                            <input
                                type="radio" 
                                id="radioSpeakingField"
                                value="Speaking"
                                onChange={e => setRadio(e.target.value)}
                                name="radioField" 
                                tabIndex="3" 
                            />
                        </article>
                    </fieldset>
                    <fieldset className="checkbox-field">
                        <legend className="radio-checkbox-legend">
                            What methods for learning Japanese have been useful to you?
                        </legend>
                            <article className="checkbox-article">
                            <label htmlFor="checkboxReadingField" className="check-label">Reading</label>
                            <input 
                                id="checkboxReadingField"
                                type="checkbox" 
                                value="Reading"
                                onChange={e => setCheckbox1(e.target.value)}
                                name="checkboxField"
                                tabIndex="4"
                            />
                        </article>
                        <article className="checkbox-article">
                            <label htmlFor="checkboxAnimeField" className="check-label">Anime</label>
                            <input 
                                id="checkboxAnimeField"
                                type="checkbox" 
                                value="Anime"
                                onChange={e => setCheckbox2(e.target.value)}
                                name="checkboxField" 
                                tabIndex="5"
                            />
                        </article>
                        <article className="checkbox-article">
                            <label htmlFor="checkboxExchangeField" className="check-label">Language Exchange</label>
                            <input 
                                id="checkboxExchangeField"
                                type="checkbox" 
                                value="Language Exchange"
                                onChange={e => setCheckbox3(e.target.value)}
                                name="checkboxField" 
                                tabIndex="6"
                            />
                        </article>
                        <article className="checkbox-article">
                            <label htmlFor="checkboxAppsField" className="check-label">Apps</label>
                            <input 
                                id="checkboxAppsField"
                                type="checkbox" 
                                value="Apps"
                                onChange={e => setCheckbox4(e.target.value)}
                                name="checkboxField" 
                                tabIndex="7"
                            />
                        </article>
                    </fieldset>
                    <fieldset>
                        <legend>
                            How was your experience on this site?
                        </legend>
                        <label htmlFor="selectField">Did you find this site helpful?</label>
                        <select 
                            name="selectField" 
                            id="selectField" 
                            value={select}
                            onChange={e => setSelect(e.target.value)} 
                            tabIndex="8"
                            >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Somewhat">Somewhat</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Additional Feedback
                        </legend>
                            <label htmlFor="textareaField">Please provide any additional feedback here:</label>
                            <textarea 
                                id="textareaField"
                                name="textareaField"
                                value={textArea}
                                onChange={e => setTextArea(e.target.value)}
                                placeholder="enter your comments"
                                className="required"
                                minLength="3"
                                maxLength="100"
                                tabIndex="9"
                                required
                            ></textarea>
                        <button 
                            onClick={e => {
                                submitHandler(e)
                                }}
                            >Submit
                        </button>
                    </fieldset>
                </form>
            </article>

        </>
    );
}


export default ContactPage;
