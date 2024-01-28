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
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
function InsertionMarque() {
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Marques/voir';
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
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Marques/insert';
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


  return (
    <div>
        <div className="row">
					<div className="owl-carousel testimonial-carousel">
						<div className="col-sm-3 col-xs-12">
							<div className="single-testimonial-box">
								<div className="testimonial-description">
									<div className="testimonial-info">
                                        <h2>
                                            Insertion de Marque
                                        </h2>
									</div>
									<div className="testimonial-comment">
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
									<div className="testimonial-person">
                                    <div className="tab">
                                        <table>
                                            <tr>
                                                <th>Nom Marque</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                           
                                          <tbody>
                                            {marque.map((marque, index) => (
                                              <tr key={index}>
                                                <td>{marque.nom_marque}</td>
                                                <td></td>
                                                <td></td>
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