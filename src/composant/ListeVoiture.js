import React from 'react'
import { Link } from 'react-router-dom'
import '../template/css/style.css'
import '../template/css/bootsnav.css'
import '../template/css/flaticon.css'
import '../template/css/linearicons.css'
import '../template/css/bootstrap.min.css'
import '../template/css/animate.css'
import '../template/css/owl.theme.default.min.css'
import '../template/css/responsive.css'

function ListeVoiture() {
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
						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-featured-cars">
								<div className="featured-img-box">
									<div className="featured-cars-img">
										<img src="../template/images/featured-cars/fc1.png" alt="cars"></img>
									</div>
									<div className="featured-model-info">
										<p>
											model: 2017
											<span className="featured-mi-span"> 3100 mi</span> 
											<span className="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div className="featured-cars-txt">
									<h2><a href="index.html">BMW 6-series gran coupe</a></h2>
									<h3>Prix : $89,395</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
									<button className="welcome-btn new-cars-btn" onclick="window.location.href='index.html'">
									<Link to="/details/1" className='details' ><span>Voir details</span></Link>
									</button>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-featured-cars">
								<div className="featured-img-box">
									<div className="featured-cars-img">
										<img src="../template/images/featured-cars/fc1.png" alt="cars"></img>
									</div>
									<div className="featured-model-info">
										<p>
											model: 2017
											<span className="featured-mi-span"> 3100 mi</span> 
											<span className="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div className="featured-cars-txt">
									<h2><a href="index.html">chevrolet camaro <span>wmv20</span></a></h2>
									<h3>$66,575</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
									<button className="welcome-btn new-cars-btn" onclick="window.location.href='index.html'">
									<Link to="/details/1" className='details' ><span>Voir details</span></Link>
									</button>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-featured-cars">
								<div className="featured-img-box">
									<div className="featured-cars-img">
										<img src="../template/images/featured-cars/fc1.png" alt="cars"></img>
									</div>
									<div className="featured-model-info">
										<p>
											model: 2017
											<span className="featured-mi-span"> 3100 mi</span> 
											<span className="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div className="featured-cars-txt">
									<h2><a href="index.html">lamborghini <span>v520</span></a></h2>
									<h3>$125,250</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
									<button className="welcome-btn new-cars-btn" onclick="window.location.href='index.html'">
									<Link to="/details/1" className='details' ><span>Voir details</span></Link>
									</button>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-featured-cars">
								<div className="featured-img-box">
									<div className="featured-cars-img">
										<img src="../template/images/featured-cars/fc1.png" alt="cars"></img>
									</div>
									<div className="featured-model-info">
										<p>
											model: 2017
											<span className="featured-mi-span"> 3100 mi</span> 
											<span className="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div className="featured-cars-txt">
									<h2><a href="index.html">audi <span> a3</span> sedan</a></h2>
									<h3>$95,500</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
									<button className="welcome-btn new-cars-btn" onclick="window.location.href='index.html'">
									<Link to="/details/1" className='details' ><span>Voir details</span></Link>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>{/*/.container*/}

		</section>{/*/.featured-cars*/}
		{/*featured-cars end */}
    </div>
  )
}

export default ListeVoiture