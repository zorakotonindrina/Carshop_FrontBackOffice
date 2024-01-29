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
function InsertionTypeCarbu() {
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Type_carburants/voir';
  const token = localStorage.getItem('token');
  
  const [type_carburant, setType_Carburants] = useState([]);

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
      setType_Carburants(data.data);
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };

  fetchData(); 
}, [apiUrl, token]);

//////////////////////////////////////////////

  const [nom_type, setNom_type] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Type_carburants';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom_type}),
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
      const apiUrl = `https://carshopbackend-production-477a.up.railway.app/carshop/Type_carburants/${id}`;
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
      const selecttype_carburant = type_carburant.find((eltype_carburant) => eltype_carburant.nom_type === selectvalue);
        if (selecttype_carburant) {
          setNom_modif(selecttype_carburant.nom_type);
          setId_modif(selecttype_carburant.id_type_carburant);
        }
      };
  
  
      const handleModifier = async (e,id_modif) => {
        console.log("miditraaa ",id_modif);
          e.preventDefault();
          const id_type_carburant = id_modif;
          const nom_type =nom_modif;
          console.log("Nom Modif " + nom_type);
          console.log("id Modif " + id_modif);
          const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Type_carburants';
          const requestOptions = {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({id_type_carburant, nom_type}),
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
                                                Insertion de Type de Carburant
                                            </h2>
                      </div>{/*/.testimonial-info*/}
                                    <form onSubmit={handleSubmit}>
                                        <div className="cate">
                                            <label htmlFor="">Carburant : </label>
                                            <input className="formbold-form-input"
                                              placeholder="Carburant"
                                              value={nom_type}
                                              onChange={(e) => setNom_type(e.target.value)}
                                            />
                                        </div>
                                        <div className="submit">
                                            <input type="submit" value="Valider" />
                                        </div>
                                    </form>
									</div>{/*/.testimonial-comment*/}
                  <div className="testimonial-comment">
                          <div className="testimonial-info">
                                    <h2>
                                        Modififier Type
                                    </h2>
                          </div>
                                    <form onSubmit = {(e)=>{handleModifier(e, id_modif)}}>
                                        <div className="cate">
                                            <label htmlFor="">Type_carburant : </label>
                                            <select value={nom_modif} onChange={handleModif}>
                                            {type_carburant.map((type_carburant, index) => (
                                              <option key={index} value={type_carburant.nom_type}>
                                                {type_carburant.nom_type}
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
                                          Liste Carburant
                                      </h2>
                            </div>
                                    <div className="tab">
                                        <table>
                                            <tr>
                                                <th>Type </th>
                                                <th>Nom Carburant</th>
                                                <th></th>
                                            </tr>
                                           
                                            <tbody>
                                            {type_carburant.map((type_carburant, index) => (
                                              <tr key={index}>
                                                <td>{type_carburant.id_type_carburant}</td>
                                                <td>{type_carburant.nom_type}</td>
                                                <td><input type="submit" value="Supprimer"  onClick={(e)=> handleSupprimer(e, type_carburant.id_type_carburant)} /></td>
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

export default InsertionTypeCarbu