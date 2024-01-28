import { Link } from 'react-router-dom'
import '../template/css/style.css'
import '../template/css/bootsnav.css'
import '../template/css/flaticon.css'
import '../template/css/linearicons.css'
import '../template/css/bootstrap.min.css'
import '../template/css/animate.css'
import '../template/css/owl.theme.default.min.css'
import '../template/css/responsive.css'
import React, { useState, useEffect } from 'react';
function ListeVoiture() {
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Detail_annonces/nonvalides';
  const [detail_annonce, setDetail_annonces] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok) {
        throw new Error('La requête a échoué.');
      }
      const data = await response.json();
      console.log(data.data)
      setDetail_annonces(data.data);
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };

  fetchData(); 
}, [apiUrl]);

//////////////////////////////////////////////

 
  return (
    <div>
        {/*featured-cars start */}
		<section id="featured-cars" className="featured-cars">
			<div className="container">
				<div className="section-header">
					<p>Retrouver <span>Ce Qui</span> Vous plait</p>
					<h2>Liste Annonce Non Valide De Voiture</h2>
				</div>{/*/.section-header*/}
				<div className="featured-cars-content">
					<div className="row">
					{detail_annonce.map((detail_annonce, index) => (
						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-featured-cars">
								<div className="featured-img-box">
									<div className="featured-cars-img">
										<img src="../template/images/featured-cars/fc1.png" alt="cars"></img>
									</div>
									<div className="featured-model-info">
										<p>
										{detail_annonce.matriculation}
											<span className="featured-mi-span"> {detail_annonce.nom} {detail_annonce.prenom}</span> 
											<span className="featured-hp-span"> {detail_annonce.date_annonce}</span>
											{detail_annonce.annee}
										</p>
									</div>
								</div>
								<div className="featured-cars-txt">
									<h2> {detail_annonce.marque} {detail_annonce.modele} {detail_annonce.categorie}</h2>
									<h3>Prix : {detail_annonce.prix}</h3>
									<p>
									{detail_annonce.descriptions}
									</p>
									<button className="welcome-btn new-cars-btn" onclick="window.location.href='index.html'">
										<Link to={`/details/${detail_annonce.id_annonce}`} className='details' ><span>Voir details</span></Link>
									</button>
								</div>
							</div>
						</div>
						
					))}	
						
					</div>
				</div>
			</div>{/*/.container*/}

		</section>{/*/.featured-cars*/}
		{/*featured-cars end */}
    </div>
  )
}

export default ListeVoiture