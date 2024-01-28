import '../template/css/style.css'
import '../template/css/bootsnav.css'
import '../template/css/flaticon.css'
import '../template/css/linearicons.css'
import '../template/css/bootstrap.min.css'
import '../template/css/animate.css'
import '../template/css/owl.theme.default.min.css'
import '../template/css/responsive.css'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function DetailCar() {
	const { id } = useParams();
    const apiUrl = `https://carshopbackend-production-477a.up.railway.app/carshop/Detail_annonces/${id}`;
  const [detail_annonce, setDetail_annonces] = useState();

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

if (!detail_annonce) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
        {/*new-cars start */}
		<section id="new-cars" className="new-cars">
			<div className="container">
				<div className="section-header">
					<p>Voir <span>Les</span> Detail du Voiture</p>
					<h2>Validation des annonces</h2>
				</div>{/*/.section-header*/}
				<div className="new-cars-content">
					<div className="owl-carousel owl-theme" id="new-cars-carousel">
						<div className="new-cars-item">
							<div className="single-new-cars-item">
								<div className="row">
									<div className="col-md-7 col-sm-12">
										<div className="new-cars-img">
											<img src="../template/images/new-cars-model/ncm1.png" alt="img"></img>
										</div>{/*/.new-cars-img*/}
									</div>
									<div className="col-md-5 col-sm-12">
										<div className="new-cars-txt">
											<h2><a href="index.html">{detail_annonce.marque} {detail_annonce.modele} <span> {detail_annonce.matriculation}</span></a></h2>
											<h3><span>Annonceur : {detail_annonce.nom} {detail_annonce.prenom}</span></h3>
											<h4><span>Date Annonce :  {detail_annonce.date_annonce}</span></h4>
											<p> Model :  {detail_annonce.modele}</p>
											<p> Marque :  {detail_annonce.marque}</p>
											<p> Carburant : {detail_annonce.types}</p>
											<p> Categorie :  {detail_annonce.categorie}</p>
											<p> Couleur :  {detail_annonce.couleur}</p>
											<p> Kilometrage : {detail_annonce.kilometrage} </p>
											<p> Consommation : {detail_annonce.consommation}</p>
											<p> Capacite Reservoir : {detail_annonce.capacite_reservoir}</p>
											<p> Fabrication : {detail_annonce.annee} </p>
											<p> Place : {detail_annonce.nombre_place}</p>
											<p> Prix de Vente : {detail_annonce.prix} </p>

											<p className="new-cars-para2">
												<h4> Description :  {detail_annonce.descriptions} </h4> 
											</p>
											<button className="welcome-btn new-cars-btn" onclick="window.location.href='index.html'" style={{ marginRight: '10px' }}>
												Accepter
											</button>
											<button className="welcome-btn new-cars-btn" onclick="window.location.href='index.html'" style={{ marginRight: '10px' }}>
												Refuser
											</button>
										</div>{/*/.new-cars-txt*/}	
									</div>{/*/.col*/}
								</div>{/*/.row*/}
							</div>{/*/.single-new-cars-item*/}
						</div>{/*/.new-cars-item*/}
					</div>{/*/index.htmlnew-cars-carousel*/}
				</div>{/*/.new-cars-content*/}
			</div>{/*/.container*/}

		</section>{/*/.new-cars*/}
		{/*new-cars end */}
    </div>
  )
}

export default DetailCar