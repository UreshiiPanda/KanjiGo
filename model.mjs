import mongoose from 'mongoose';
import 'dotenv/config';


// Connect to MongoDB Atlas cluster
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

// this is a variable for connecting to the DB
const kanji_db = mongoose.connection;


// connect to the DB using your DB variable via .once()
// Confirm that the database has connected, print success to console
kanji_db.once("open", (error) => {
    if (error) {
        res.status(500).json( {Error: "Cannot connect to MongoDB Atlas."} );
    } else {
    console.log("Successfully connected to MongoDB Atlas using Mongoose.");
    }
});


// Define the Collection's Schema
const kanjiSchema = mongoose.Schema({
    kanji: { type: String, required: true, default: "漢字" },
    romaji: { type: String, required: true, default: "kanji" },
    hint: { type: String, required: true, default: "chinese character" },
    section: { type: Number, required: true, default: 0 }
});


// define a Model variable for a Document
// this passes in a name (for the Collection) and the schema that the Documents in that Collection will follow
const n1 = mongoose.model("N1 Kanji", kanjiSchema);
const n2 = mongoose.model("N2 Kanji", kanjiSchema);
const n3 = mongoose.model("N3 Kanji", kanjiSchema);
const n4 = mongoose.model("N4 Kanji", kanjiSchema);
const n5 = mongoose.model("N5 Kanji", kanjiSchema);


//   CREATE MODELS     ##########################################
// define a model to create a Document in your new Collection
const createKanjiDoc = async (kanji, romaji, hint, section) => {
    // create an instance of the kanji Model from above, based on JLPT section
    switch(section) {
        case "1":
            const n1Kanji = new n1({ 
                kanji: kanji,
                romaji: romaji,
                hint: hint,
                section: section
            });
            // call save to persist/save this obj as a Document in MongoDB
            return n1Kanji.save();
        case "2":
            const n2Kanji = new n2({ 
                kanji: kanji,
                romaji: romaji,
                hint: hint,
                section: section
            });
            // call save to persist/save this obj as a Document in MongoDB
            return n2Kanji.save();
        case "3":
            const n3Kanji = new n3({ 
                kanji: kanji,
                romaji: romaji,
                hint: hint,
                section: section
            });
            // call save to persist/save this obj as a Document in MongoDB
            return n3Kanji.save();
        case "4":
            const n4Kanji = new n4({ 
                kanji: kanji,
                romaji: romaji,
                hint: hint,
                section: section
            });
            // call save to persist/save this obj as a Document in MongoDB
            return n4Kanji.save();
        case "5":
            const n5Kanji = new n5({ 
                kanji: kanji,
                romaji: romaji,
                hint: hint,
                section: section
            });
            // call save to persist/save this obj as a Document in MongoDB
            return n5Kanji.save();

        default:
            console.log("defaulting on the kanji DB creation");
            break;
    }
}


//  RETRIEVE MODELS     #########################################
// define a model to retrieve Docs from the Collection via a filter
// Retrieve based on a filter and return a promise.
const getKanji = async (jlpt) => {
    switch (jlpt) {
        case "1":
            const query1 = n1.find();
            console.log("retrieving from Kanji N1 DB");
            return query1.exec();
        case "2":
            const query2 = n2.find();
            console.log("retrieving from Kanji N2 DB");
            return query2.exec();
        case "3":
            const query3 = n3.find();
            console.log("retrieving from Kanji N3 DB");
            return query3.exec();
        case "4":
            const query4 = n4.find();
            console.log("retrieving from Kanji N4 DB");
            return query4.exec();
        case "5":
            const query5 = n5.find();
            console.log("retrieving from Kanji N5 DB");
            return query5.exec();
        default:
            console.log("defaulting on the DB retrieval");
            break;
    }
}


//  UPDATE MODELS      ##############################################
// define a model to update a Doc
// replaceOne()   this can only replace an entire Doc
// updateOne()    this allows for updating fields within the Doc
const updateKanji = async (_id, kanji, romaji, hint, section) => {
    switch (section) {
        case 1:
            const result1 = await n1.replaceOne( 
                {_id: _id },
                { kanji: kanji, romaji: romaji, hint: hint, section: section}
                );
            return {
                _id: _id,
                kanji: kanji, 
                romaji: romaji, 
                hint: hint, 
                section: section
            }
        case 2:
            const result2 = await n2.replaceOne( 
                {_id: _id },
                { kanji: kanji, romaji: romaji, hint: hint, section: section}
                );
            return {
                _id: _id,
                kanji: kanji, 
                romaji: romaji, 
                hint: hint, 
                section: section
            }
        case 3:
            const result3 = await n3.replaceOne( 
                {_id: _id },
                { kanji: kanji, romaji: romaji, hint: hint, section: section}
                );
            return {
                _id: _id,
                kanji: kanji, 
                romaji: romaji, 
                hint: hint, 
                section: section
            }
        case 4:
            const result4 = await n4.replaceOne( 
                {_id: _id },
                { kanji: kanji, romaji: romaji, hint: hint, section: section}
                );
            return {
                _id: _id,
                kanji: kanji, 
                romaji: romaji, 
                hint: hint, 
                section: section
            }
        case 5:
            const result5 = await n5.replaceOne( 
                {_id: _id },
                { kanji: kanji, romaji: romaji, hint: hint, section: section}
                );
            return {
                _id: _id,
                kanji: kanji, 
                romaji: romaji, 
                hint: hint, 
                section: section
            }
        default:
            console.log("defaulting on the Kanji update Model");
    }
    // return result1.modifiedCount;
};


//  DELETE MODELS       ##############################################
// define a model to delete a single Doc based on the ID
const deleteKanjiById = async (_id, jlpt) => {
    switch (jlpt) {
        case "1":
            const result1 = await n1.deleteOne( {_id: _id } );
            return result1.deletedCount;
        case "2":
            const result2 = await n2.deleteOne( {_id: _id } );
            return result2.deletedCount;
        case "3":
            const result3 = await n3.deleteOne( {_id: _id } );
            return result3.deletedCount;
        case "4":
            const result4 = await n4.deleteOne( {_id: _id } );
            return result4.deletedCount;
        case "5":
            const result5 = await n5.deleteOne( {_id: _id } );
            return result5.deletedCount;
        default:
            console.log("Defaulting on the kanji delete Model");
    }
};
 

// Export these Model variables for use in the Controller file
export { createKanjiDoc, getKanji, updateKanji, deleteKanjiById }
