import React from 'react'
import '../template/css/style.css'
import '../template/css/bootsnav.css'
import '../template/css/flaticon.css'
import '../template/css/linearicons.css'
import '../template/css/bootstrap.min.css'
import '../template/css/animate.css'
import '../template/css/owl.theme.default.min.css'
import '../template/css/responsive.css'

function DetailCar() {
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
											<h2><a href="index.html">chevrolet camaro <span> za100</span></a></h2>
											<h3><span>Annonceur : </span></h3>
											<h4><span>Date Annonce : </span></h4>
											<p> Model : </p>
											<p> Marque : </p>
											<p> Carburant : </p>
											<p> Categorie : </p>
											<p> Vitesse : </p>
											<p> Kilometrage : </p>
											<p> Fabrication : </p>
											<p> Place : </p>
											<p> Prix de Vente : </p>

											<p className="new-cars-para2">
												<h4> Description : </h4>Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. 
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