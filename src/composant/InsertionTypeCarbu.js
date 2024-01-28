import React from 'react'
//import { Link } from 'react-router-dom';
import '../template/css/style.css'
import '../template/css/bootsnav.css'
import '../template/css/flaticon.css'
import '../template/css/linearicons.css'
import '../template/css/bootstrap.min.css'
import '../template/css/animate.css'
import '../template/css/owl.theme.default.min.css'
import '../template/css/responsive.css'


function InsertionTypeCarbu() {
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
                                    <form>
                                        <div className="cate">
                                            <label htmlFor="">Carburant : </label>
                                            <input className='categorie' type="text" name="" id="" />
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
                                                <th>Categorie</th>
                                                <th>Nom Categorie</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                           
                                            <tr className="tr">
                                                <td>1</td>
                                                <td>Exemple</td>
                                                <td><input type="submit" value="Modifier" /></td>
                                                <td><input type="submit" value="Supprimer" /></td>
                                            </tr>
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