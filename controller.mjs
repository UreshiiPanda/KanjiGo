import 'dotenv/config';
import express from 'express';
// import the export obj from model.mjs and name it kanjiModels
import * as kanjiModels from './model.mjs';
import { Configuration, OpenAIApi } from 'openai';
import NodeMailer from 'nodemailer';

'use strict';
const PORT = process.env.PORT;
const app = express();
const config = new Configuration({apiKey: process.env.OPENAI_API_KEY});
const openai = new OpenAIApi(config);
const nodemailer = NodeMailer;

app.use(express.json());


let htmlTop = `
    <section className="header-nav">
        <header className="header-name">
            <h2 className="name-en">CONFIRMATION</h2>
            <h3 className="name-ja" lang="ja">コンフルメーション</h3>
        </header>
        <nav>
            <a href="index.html">Kanji Go</a>
            <a href="contact.html">Kanji List</a>
            <a href="gallery.html">Kanji Pics</a>
            <a href="order.html">About</a>
            <a href="staff.html">Contact</a>
        </nav>
    </section>
`

let htmlBottom = `
    <footer>
        <p className="footer-p">
            &copy; Kanji Go 2023
        </p>
    </footer>
`   


app.post("/contactForm", (req, res) => {
    const userInput = req.body;
    console.log("user input: ", userInput);
    console.log("req body: ", req.body);

    let contact_res =  `
        ${htmlTop}
            <h2> Here's Your Form Response: </h2>
            <section class="response-section">
                <article class="response-article">
                    Your Name: <span class="single-response"> ${userInput.name} </span>
                </article>
                <article class="response-article">
                    Your Email: <span class="single-response"> ${userInput.email} </span>
                </article>
                <article class="response-article">
                    What I find most difficult about learning Japanese: <span class="single-response"> ${userInput.radio} </span>
                </article>
                <article class="response-article">
                    The Japanese methods that have been useful for me: <span class="single-response"> ${userInput.checkbox} </span>
                </article>
                <article class="response-article">
                    I found this site useful: <span class="single-response"> ${userInput.select} </span>
                </article>
                <article class="response-article">
                    My comments: <span class="single-response"> ${userInput.textArea} </span>
                </article>
            </section>
        ${htmlBottom}
    `  


    // nodemailer is setup to send email to Ethereal fake mail service
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }

        console.log('Credentials obtained, sending message...');

        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });

        // Message object
        let message = {
            from: '猫 <cat@fake.com>',
            to: '猫 <cat@fake.com>',
            subject: 'Nodemailer Kanji Go Contact Form',
            html: contact_res
        };

        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }

	    res.send( { "address": nodemailer.getTestMessageUrl(info) });
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });



});





//  CREATE CONTROLLER     ######################################
// define a Create route
app.post('/create', (req, res) => {
    kanjiModels.createKanjiDoc(
        req.body.kanji,
        req.body.romaji, 
        req.body.hint,
        req.body.section
        )
        .then(new_kanji => {
            res.status(201).json(new_kanji);
            console.log(`CREATE:   A new Kanji was successfully added to JLPT section ${req.body.section}`);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json( { Error: "The new Kanji creation failed due to invalid user input."} );
        });
});


//  RETRIEVE CONTROLLERS     ######################################
// define a Retrieve route
app.get('/get/:jlpt', (req, res) => {
    kanjiModels.getKanji(req.params.jlpt)
        .then(retrieved_kanji => {
            if (retrieved_kanji !== null && retrieved_kanji !== undefined) {    
                // console.log("here is response: ", retrieved_kanji);
                res.json(retrieved_kanji);
                console.log("RETRIEVE:  An existing Kanji was successfully retrieved.");
            } else {
                console.log("here is response: ", retrieved_kanji);
                res.status(404).json( { Error: "The Kanji was not found or was undefined"} );
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json( {Error: "The Kanji document retrieval failed due to invalid user input."} );
        });
});

// RETRIEVE OpenAI Dall-E IMAGES
app.get('/get/img/:imageInput', async (req, res) => {
    try {
        const response = await openai.createImage({
            prompt: req.params.imageInput,
            n: 1,
            size: "256x256",
        });
        const image_url = response.data.data[0].url;
        console.log("Dall-E Image URL: ", image_url);
        res.json(image_url);
    }
    catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
    }
});


//  UPDATE CONTROLLER     ######################################
// define an Update route
app.put('/update/:_id', (req, res) => {
    kanjiModels.updateKanji(
        req.params._id,
        req.body.kanji,
        req.body.romaji, 
        req.body.hint,
        req.body.sectionInt
        )
        .then(update_kanji => {
            res.json(update_kanji);
            console.log("UPDATE:  An existing Kanji document was successfully updated.");
        })
        .catch(error => {
            console.error(error);
            res.status(400).json( {Error: "The Kanji document update failed due to invalid user input."} );
        });
});


//  DELETE CONTROLLER     ######################################
// define a Delete route
app.delete('/delete/:_id/:jlpt', (req, res) => {
    kanjiModels.deleteKanjiById(req.params._id, req.params.jlpt)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
                console.log("DELETE:  An existing Kanji document was successfully deleted.");
            } else {
                res.status(404).json( {Error: "The Kanji document was not found."});
            }
        })
        .catch(error => {
            console.error(error);
            res.send( {Error: "The Kanji document deletion by ID failed."});
        });
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

