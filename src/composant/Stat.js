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
function Stat() {
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Stats/categorie';
  const token = localStorage.getItem('token');
  
  const [stat_categorie, setStat_categorie] = useState([]);

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
      setStat_categorie(data.data);
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };

  fetchData(); 
}, [apiUrl, token]);


  return (
    <div>
        <div className="row">
					<div className="owl-carousel testimonial-carousel">
						<div className="col-sm-3 col-xs-12">
							<div>
								<div className="testimonial-description">
		

                 
									<div className="testimonial-person">
                                    <div className="testimonial-info">
                                                        <h2>
                                                            Statistiques De vente par categorie 
                                                        </h2>
                                    </div>{/*/.testimonial-info*/}
                                    <div className="tab">
                                        <table>
                                                            <tr>
                                                                <th>Categorie</th>
                                                                <th>Nombre</th>
                                                            </tr>
                                            
                                            <tbody>
                                                            {stat_categorie.map((stat_categorie, index) => (
                                                            <tr key={index}>
                                                                <td>{stat_categorie.categorie}</td>
                                                                <td>{stat_categorie.nombre}</td>
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

export default Stat