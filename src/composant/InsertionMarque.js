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
import '../assets/css/marque.css'
import React, { useState, useEffect } from 'react';
function InsertionMarque() {
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Marques';
  const token = localStorage.getItem('token');
  
  const [marque, setMaques] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    try {
      console.log(token)
      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok) {
        throw new Error('La requête a échoué.');
      }
      const data = await response.json();
      console.log(data.data)
      setMaques(data.data);
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };

  fetchData(); 
}, [apiUrl, token]);

//////////////////////////////////////////////

  const [nom_marque, setNom_marque] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Marques';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom_marque}),
    };
	
    try {
      const response = await fetch(apiUrl, requestOptions);
		
      if (!response.ok) {
        throw new Error('La requête a échoué.');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };


  const handleSupprimer = async (e,id) => {
    console.log("miditraaa ",id);
      e.preventDefault();
      const apiUrl = `https://carshopbackend-production-477a.up.railway.app/carshop/Marques/${id}`;
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
    
      try {
        const response = await fetch(apiUrl, requestOptions);
      
        if (!response.ok) {
          throw new Error('La requête a échoué.');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Erreur lors de la requête à l\'API:', error);
      }
    };

    
  const [nom_modif, setNom_modif] = useState('');
  const [id_modif, setId_modif] = useState('');

  const handleModif = (e) => {
    const selectvalue = e.target.value;
    const selectMarque = marque.find((elmarque) => elmarque.nom_marque === selectvalue);
      if (selectMarque) {
        setNom_modif(selectMarque.nom_marque);
        setId_modif(selectMarque.id_marque);
      }
    };


    const handleModifier = async (e,id_modif) => {
      console.log("miditraaa ",id_modif);
        e.preventDefault();
        const id_marque = id_modif;
        const nom_marque =nom_modif;
        console.log("Nom Modif " + nom_marque);
        console.log("id Modif " + id_modif);
        const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Marques';
        const requestOptions = {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id_marque, nom_marque}),
        };
      
        try {
          const response = await fetch(apiUrl, requestOptions);
        
          if (!response.ok) {
            throw new Error('La requête a échoué.');
          }
    
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Erreur lors de la requête à l\'API:', error);
        }
      };

  return (
    <div>
        <div className="row">
					<div className="owl-carousel testimonial-carousel">
						<div className="col-sm-3 col-xs-12">
							<div>
								<div className="testimonial-description">
									
									<div className="testimonial-comment">
                  <div className="testimonial-info">
                                        <h2>
                                            Insertion de Marque
                                        </h2>
									</div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="cate">
                                            <label htmlFor="">Marque : </label>
                                            <input  type="text"
                                              className="formbold-form-input"
                                              placeholder="Nom Marque"
                                              value={nom_marque}
                                              onChange={(e) => setNom_marque(e.target.value)}
                                            />
                                        </div>
                                        <div className="submit">
                                          <input type="submit" value="Valider" />
                                        </div>
                                    </form>
									</div>
                  
                  <div className="testimonial-comment">
                          <div className="testimonial-info">
                                    <h2>
                                        Modififier Marque
                                    </h2>
                          </div>
                                    <form onSubmit = {(e)=>{handleModifier(e, id_modif)}}>
                                        <div className="cate">
                                            <label htmlFor="">Marque : </label>
                                            <select value={nom_modif} onChange={handleModif}>
                                            {marque.map((marque, index) => (
                                              <option key={index} value={marque.nom_marque}>
                                                {marque.nom_marque}
                                              </option>
                                              ))}
                                            </select>
                                           <p></p>
                                            <label htmlFor="">Nom  : </label>
                                            <input  type="text"
                                              className="formbold-form-input"
                                              value={nom_modif}
                                              onChange={(e) => setNom_modif(e.target.value)}
                                            />
                                        </div>
                                        <div className="submit">
                                          <input type="submit" value="Valider" />
                                        </div>
                                    </form>
									</div>
                 
									<div className="testimonial-person">
                            <div className="testimonial-info">
                                                  <h2>
                                                      Liste  Marque
                                                  </h2>
                            </div>
                                    <div className="tab">
                                        <table>
                                            <tr>
                                                <th>Marque</th>
                                                <th>Nom Marque</th>
                                                <th></th>
                                            </tr>
                                           
                                          <tbody>
                                            {marque.map((elmarque, index) => (
                                              <tr key={index}>
                                                <td>{elmarque.id_marque}</td>
                                                <td>{elmarque.nom_marque}</td>
                                                <td><input type="submit" value="Supprimer"  onClick={(e)=> handleSupprimer(e, elmarque.id_marque)} /></td>
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                    </div>
									</div>{/*/.testimonial-person*/}
                  
                  
								</div>{/*/.testimonial-description*/}
							</div>{/*/.single-testimonial-box*/}
						</div>{/*/.col*/}

					</div>{/*/.testimonial-carousel*/}
                   
				</div>{/*/.row*/}
    </div>
  )
}

export default InsertionMarque