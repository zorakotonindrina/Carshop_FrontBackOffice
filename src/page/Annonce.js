import React from 'react'
import Header from "../composant/Header";
import ListeVoiture from '../composant/ListeVoiture';
import Footer from '../composant/Footer';



function Annonce() {
  return (
    <div>
        <Header />
        <ListeVoiture/>
        <Footer/>
    </div>
  )
}

export default Annonce