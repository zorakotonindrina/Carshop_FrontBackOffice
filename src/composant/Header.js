import React from 'react'
import { Link } from 'react-router-dom';
import '../template/css/style.css'
import '../template/css/bootsnav.css'
import '../template/css/flaticon.css'
import '../template/css/linearicons.css'
import '../template/css/bootstrap.min.css'
import '../template/css/animate.css'
import '../template/css/owl.theme.default.min.css'
import '../template/css/responsive.css'


function Header() {
	// const [setComponenet] = useState("0")
	// const handleselect =  (event) =>{
    //     setComponenet(event.target.value)
    // }
  return (
    <div>
 
        {/*welcome-hero start */}
		<section id="home" className="welcome-hero">

			{/* top-area Start */}
			<div className="top-area">
				<div className="header-area">
					{/* Start Navigation */}
				    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

				        <div className="container">

				            {/* Start Header Navigation */}
				            <div className="navbar-header">
				                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
				                    <i className="fa fa-bars"></i>
				                </button>
				                <a className="navbar-brand" href="index.html">carvilla<span></span></a>

				            </div>{/*/.navbar-header*/}
				            {/* End Header Navigation */}

				            {/* Collect the nav links, forms, and other content for toggling */}
				            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
				                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
								
				                    <li className="scroll"><Link to="/firstpage">Liste Annonce</Link></li>
				                    <li className="scroll"><Link to="/details/:id">Detail Voiture</Link></li>
				                    <li className="scroll"><Link to="/insertion">Insertion</Link></li>
				                    <li className="scroll"><a href="#contact">Statistique</a></li>
									<li className="scroll"><a href="/deconnecter">Deconnecter</a></li>
				                </ul>{/*/.nav */}
				            </div>{/* /.navbar-collapse */}
				        </div>{/*/.container*/}
				    </nav>{/*/nav*/}
				    {/* End Navigation */}
				</div>{/*/.header-area*/}
			    <div className="clearfix"></div>

			</div>{/* /.top-area*/}
			{/* top-area End */}

			<div className="container">
				<div className="welcome-hero-txt">
					<h2>Vente de Voiture d'occasion</h2>
					<p>
						Retrouver ici les voitures d'occasion a prix abordable. 
					</p>
					<button className="welcome-btn" onclick="window.location.href='#'">contact us</button>
				</div>
			</div>
			
		</section>{/*/.welcome-hero*/}
		{/*welcome-hero end */}


		


    </div>
  )
}

export default Header