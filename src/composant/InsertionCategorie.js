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
function InsertionCategorie() {
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Categories';
  const token = localStorage.getItem('token');
  
  const [categorie, setCategories] = useState([]);

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
      setCategories(data.data);
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };

  fetchData(); 
}, [apiUrl, token]);

//////////////////////////////////////////////

  const [nom_categorie, setNom_Categorie] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Categories';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom_categorie}),
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
      const apiUrl = `https://carshopbackend-production-477a.up.railway.app/carshop/Categories/${id}`;
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
      const selectcategorie = categorie.find((elcategorie) => elcategorie.nom_categorie === selectvalue);
        if (selectcategorie) {
          setNom_modif(selectcategorie.nom_categorie);
          setId_modif(selectcategorie.id_categorie);
        }
      };
  
  
      const handleModifier = async (e,id_modif) => {
        console.log("miditraaa ",id_modif);
          e.preventDefault();
          const id_categorie = id_modif;
          const nom_categorie =nom_modif;
          console.log("Nom Modif " + nom_categorie);
          console.log("id Modif " + id_modif);
          const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Categories';
          const requestOptions = {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({id_categorie, nom_categorie}),
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
                          Insertion de Categorie
                      </h2>
									</div>{/*/.testimonial-info*/}
                        <form onSubmit={handleSubmit}>
                          <div className="cate">
                              <label htmlFor="">Categorie : </label>
                              <input className="formbold-form-input"
                                              placeholder="Categorie"
                                              value={nom_categorie}
                                              onChange={(e) => setNom_Categorie(e.target.value)}
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
                                        Modififier Categorie
                                    </h2>
                          </div>
                                    <form onSubmit = {(e)=>{handleModifier(e, id_modif)}}>
                                        <div className="cate">
                                            <label htmlFor="">Categorie : </label>
                                            <select value={nom_modif} onChange={handleModif}>
                                            {categorie.map((categorie, index) => (
                                              <option key={index} value={categorie.nom_categorie}>
                                                {categorie.nom_categorie}
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
                                              Liste Categorie
                                          </h2>
                    </div>{/*/.testimonial-info*/}
                      <div className="tab">
                          <table>
                              <tr>
                                  <th>Categorie</th>
                                  <th>Nom Categorie</th>
                                  <th></th>
                              </tr>
                              
                              <tbody>
                                            {categorie.map((categorie, index) => (
                                              <tr key={index}>
                                                <td>{categorie.id_categorie}</td>
                                                <td>{categorie.nom_categorie}</td>
                                                <td><input type="submit" value="Supprimer"  onClick={(e)=> handleSupprimer(e, categorie.id_categorie)} /></td>
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

export default InsertionCategorie