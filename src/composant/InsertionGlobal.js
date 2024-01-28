import React from 'react';
import { useState } from "react";
//import { Link } from 'react-router-dom';
import '../assets/css/marque.css'
import '../template/css/style.css'
import '../template/css/bootsnav.css'
import '../template/css/flaticon.css'
import '../template/css/linearicons.css'
import '../template/css/bootstrap.min.css'
import '../template/css/animate.css'
import '../template/css/owl.theme.default.min.css'
import '../template/css/responsive.css'

import InsertionCategorie from "../composant/InsertionCategorie"
import InsertionMarque from './InsertionMarque';
import InsertionModel from './InsertionModel';
import InsertionCouleur from './InsertionCouleur';
import InsertionTypeCarbu from './InsertionTypeCarbu';

function InsertionGlobal() {

    const [component , setComponenet] = useState("0")
    const handleselect =  (event) =>{
        setComponenet(event.target.value)
    }

    return (
      <div>
        {/* clients-say strat */}
		<section id="clients-say"  className="clients-say">
			<div className="container">
				<div className="section-header">
					<h2>Faite votre insertion</h2>
                    <h3> Choix de votre insertion</h3>
                    <div className="model-select-icon">
                        <select name="form-control" id="" onChange={handleselect}>
                            <option value="0">insertion Categorie</option>
                            <option value="1">insertion Couleur </option>
                            <option value="2">insertion marque </option>
                            <option value="3">insertion Model </option>
                            <option value="4">insertion Type Carburant </option>
                        </select>
                    </div>
				</div>{/*/.section-header*/}
				
                {
                    component === "0" ? 
                    <InsertionCategorie /> : null
                }
                {
                    component === "1" ? 
                    <InsertionCouleur /> : null
                }
                {
                    component === "2" ? 
                    <InsertionMarque /> : null
                }
                {
                    component === "3" ? 
                    <InsertionModel /> : null
                }
                {
                    component === "4" ? 
                    <InsertionTypeCarbu /> : null
                }

			</div>{/*/.container*/}

		</section>{/*/.clients-say*/}	
		{/* clients-say end */}
      </div>
  )
}

export default InsertionGlobal