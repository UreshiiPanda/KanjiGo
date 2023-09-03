import React, { useState, useEffect } from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import KanjiFooter from './components/KanjiFooter';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import KanjiListPage from './pages/KanjiListPage';
import KanjiGoPage from './pages/KanjiGoPage';
import CreateKanjiPage from './pages/CreateKanjiPage';
import EditKanjiPage from './pages/EditKanjiPage';
import IntraNav from './components/IntraNav';
import HomeHeader from './components/HomeHeader';
import ContactHeader from './components/ContactHeader';
import GalleryHeader from './components/GalleryHeader';
import KanjiListHeader from './components/KanjiListHeader';
import KanjiGoHeader from './components/KanjiGoHeader';


function App() {

  // pass shared State up to ancestor component
  const [kanji, setKanji] = useState( {
    kanji: "ご",
    romaji: "go",
    hint: "5",
    section: 1
  });
  const [kanjis, setKanjis] = useState([]);
  const [jlpt, setJlpt] = useState(1);

  const [roman, setRoman] = useState(false);
  const [hinted, setHinted] = useState(false);

  const [imageTxt, setImageTxt] = useState('');
  const [imageURL, setImageURL] = useState('default URL');

  // RETRIEVE the entire list of kanji
  // JLPT param turns into a string here
  const loadKanji = async (jlpt) => {
  const response = await fetch(`/get/${jlpt}`, { method: 'GET' });         
  const newKanjis = await response.json();
  setKanjis(newKanjis);
  }

  // LOAD all the kanji
  useEffect(() => {
    loadKanji(jlpt);
}, [jlpt]);

  return (
    <div className="app">
      <BrowserRouter>

        <section className="header-nav">
          <Routes>
            <Route path="/about" element={<HomeHeader />} />
            <Route path="/kanji-list" element={<KanjiListHeader/>} />
            <Route path="/" element={<KanjiGoHeader/>} />
            <Route path="/kanji-create" element={<KanjiGoHeader/>} />
            <Route path="/kanji-edit" element={<KanjiGoHeader/>} />
            <Route path="/projects" element={<GalleryHeader />} />
            <Route path="/contact" element={<ContactHeader />} />
          </Routes>
          <Nav setImageURL={setImageURL}/>
        </section>

        <Routes>
          <Route path="/kanji-list" element={
          <IntraNav 
            jlpt={jlpt} 
            setJlpt={setJlpt} 
            setKanjis={setKanjis} 
            setKanji={setKanji} 
            setImageURL={setImageURL}
            setRoman={setRoman}
            setHinted={setHinted}
            />} 
          />
          <Route path="/" element={
          <IntraNav 
            jlpt={jlpt} 
            setJlpt={setJlpt} 
            setKanjis={setKanjis} 
            setKanji={setKanji} 
            setImageURL={setImageURL}
            setRoman={setRoman}
            setHinted={setHinted}
            />} 
          />
        </Routes>

          <main>
            <section>
              <Routes>
                <Route path="/about" element={<HomePage />} />
                <Route path="/kanji-list" element={
                  <KanjiListPage 
                    jlpt={jlpt}  
                    setJlpt={setJlpt} 
                    setKanji={setKanji} 
                    kanjis={kanjis} 
                    setKanjis={setKanjis} 
                  />} 
                />
                <Route path="/" element={
                  <KanjiGoPage 
                    jlpt={jlpt} 
                    kanji={kanji} 
                    setKanjis={setKanjis} 
                    roman={roman}
                    setRoman={setRoman}
                    hinted={hinted}
                    setHinted={setHinted}
                    imageTxt={imageTxt}
                    setImageTxt={setImageTxt}
                    imageURL={imageURL}
                    setImageURL={setImageURL}
                  />} 
                />
                <Route path="/kanji-create" element={<CreateKanjiPage jlpt={jlpt} setKanjis={setKanjis} />} />
                <Route path="/kanji-edit" element={<EditKanjiPage jlpt={jlpt} toEditKanji={kanji} setKanjis={setKanjis}/>} />
                <Route path="/projects" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </section>
          </main>

        <Routes>
          <Route path="/about" element={<Footer />} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/projects" element={<Footer />} />
          <Route path="/kanji-list" element={
            <KanjiFooter 
              kanji={kanji} 
              setKanji={setKanji} 
              kanjis={kanjis} 
              setRoman={setRoman}
              setHinted={setHinted}
              setImageURL={setImageURL}
            />} 
          />
          <Route path="/" element={
            <KanjiFooter 
              kanji={kanji} 
              setKanji={setKanji} 
              kanjis={kanjis} 
              setRoman={setRoman}
              setHinted={setHinted}
              setImageURL={setImageURL}
            />} 
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
