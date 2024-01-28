import '../template/css/style.css'
import '../template/css/bootsnav.css'
import '../template/css/flaticon.css'
import '../template/css/linearicons.css'
import '../template/css/bootstrap.min.css'
import '../template/css/animate.css'
import '../template/css/owl.theme.default.min.css'
import '../template/css/responsive.css'

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

  return (
    <div>
        <div className="row">
					<div className="owl-carousel testimonial-carousel">
						<div className="col-sm-3 col-xs-12">
							<div className="single-testimonial-box">
								<div className="testimonial-description">
									<div className="testimonial-info">
                                        <h2>
                                            Insertion de Type de Carburant
                                        </h2>
									</div>{/*/.testimonial-info*/}
									<div className="testimonial-comment">
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
									<div className="testimonial-person">
                                    <div className="tab">
                                        <table>
                                            <tr>
                                                <th>Type </th>
                                                <th>Nom Carburant</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                           
                                            <tbody>
                                            {type_carburant.map((type_carburant, index) => (
                                              <tr key={index}>
                                                <td>{type_carburant.id_type_carburant}</td>
                                                <td>{type_carburant.nom_type}</td>
                                                <td><input type="submit" value="Modifier" /></td>
                                                <td><input type="submit" value="Supprimer" /></td>
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