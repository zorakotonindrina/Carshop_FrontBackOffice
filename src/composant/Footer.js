import React from 'react'
import '../template/css/style.css'
import '../template/css/bootsnav.css'
import '../template/css/flaticon.css'
import '../template/css/linearicons.css'
import '../template/css/bootstrap.min.css'
import '../template/css/animate.css'
import '../template/css/owl.theme.default.min.css'
import '../template/css/responsive.css'

function Footer() {
  return (
    <div>
        {/*contact start*/}
		<footer id="contact"  className="contact">
			<div className="container">
				<div className="footer-top">
					<div className="row">
						<div className="col-md-3 col-sm-6">
							<div className="single-footer-widget">
								<div className="footer-logo">
									<a href="index.html">CARSHOP</a>
								</div>
								<p>
									Vente de voiture d'occasion.
								</p>
								<div className="footer-contact">
									<p>info@themesine.com</p>
									<p>+1 (885) 2563154554</p>
								</div>
							</div>
						</div>
						<div className="col-md-2 col-sm-6">
							<div className="single-footer-widget">
								<h2>about devloon</h2>
								<ul>
									<li><a href="index.html">about us</a></li>
									<li><a href="index.html">career</a></li>
									<li><a href="index.html">terms <span> of service</span></a></li>
									<li><a href="index.html">privacy policy</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 col-xs-12">
							<div className="single-footer-widget">
								<h2>top brands</h2>
								<div className="row">
									<div className="col-md-7 col-xs-6">
										<ul>
											<li><a href="index.html">BMW</a></li>
											<li><a href="index.html">lamborghini</a></li>
											<li><a href="index.html">camaro</a></li>
											<li><a href="index.html">audi</a></li>
											<li><a href="index.html">infiniti</a></li>
											<li><a href="index.html">nissan</a></li>
										</ul>
									</div>
									<div className="col-md-5 col-xs-6">
										<ul>
											<li><a href="index.html">ferrari</a></li>
											<li><a href="index.html">porsche</a></li>
											<li><a href="index.html">land rover</a></li>
											<li><a href="index.html">aston martin</a></li>
											<li><a href="index.html">mersedes</a></li>
											<li><a href="index.html">opel</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-3 col-sm-6">
							<div className="single-footer-widget">
								<h2>news letter</h2>
								<div className="footer-newsletter">
									<p>
										Subscribe to get latest news  update and informations
									</p>
								</div>
								<div className="hm-foot-email">
									<div className="foot-email-box">
										<input type="text" className="form-control" placeholder="Add Email"></input>
									</div>{/*/.foot-email-box*/}
									<div className="foot-email-subscribe">
										<span><i className="fa fa-arrow-right"></i></span>
									</div>{/*/.foot-email-icon*/}
								</div>{/*/.hm-foot-email*/}
							</div>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="row">
						<div className="col-sm-6">
							<p>
								&copy; copyright.designed and developed by <a href="https://www.themesine.com/">themesine</a>.
							</p>{/*/p*/}
						</div>
						<div className="col-sm-6">
							<div className="footer-social">
								<a href="index.html"><i className="fa fa-facebook"></i></a>	
								<a href="index.html"><i className="fa fa-instagram"></i></a>
								<a href="index.html"><i className="fa fa-linkedin"></i></a>
								<a href="index.html"><i className="fa fa-pinterest-p"></i></a>
								<a href="index.html"><i className="fa fa-behance"></i></a>	
							</div>
						</div>
					</div>
				</div>{/*/.footer-copyright*/}
			</div>{/*/.container*/}

			<div id="scroll-Top">
				<div className="return-to-top">
					<i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div>
				
			</div>{/*/.scroll-Top*/}
			
        </footer>{/*/.contact*/}
		{/*contact end*/}

    </div>
  )
}

export default Footer