import React from "react";
import { Link } from "react-router-dom";

function Nav(setImageURL) {

    return(
        <> 
            <nav> 
                <Link to="/" >Kanji Go</Link>
                <Link to="../kanji-list" >Kanji List</Link>
                <Link to="../projects" >Kanji Pics</Link>
                <Link to="../about" >About</Link>
                <Link to="../contact" >Contact</Link>
            </nav>
        </>
    );
}

export default Nav;
