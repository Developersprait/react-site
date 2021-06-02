import React from 'react';
import cat1 from '../../src/static/img/1.png'
import cat2 from '../../src/static/img/2.png'
import cat3 from '../../src/static/img/3.png'
import cat4 from '../../src/static/img/4.png'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
             <div className="portfolio__section">
                <div className="row">
                 <div className="col-4">
                    <div className="portfolio__content">
                        <h6 className="portfolio__content-h6">EMPLOYEES</h6>
                        <h3 className="portfolio__content-h3">Our team.</h3>
                    </div>
                 </div>
                 <div className="col-8">
                     <div className="row">
                         <div className="col-4 pl-15">
                             <div className="portfolio__card">
                                 <div className="portfolio__card-img">
                                     <img src={cat1} alt="card"/>
                                 </div>
                             </div>
                         </div>
                         <div className="col-4 pl-15">
                             <div className="portfolio__card">
                                 <div className="portfolio__card-img">
                                     <img src={cat2} alt="card"/>
                                 </div>
                             </div>
                         </div>
                         <div className="col-4 pl-15">
                             <div className="portfolio__card">
                                 <div className="portfolio__card-img">
                                     <img src={cat3} alt="card"/>
                                 </div>
                             </div>
                         </div>
                         {/* <div className="col-4 pl-15">
                             <div className="portfolio__card">
                                 <div className="portfolio__card-img">
                                     <img src={cat4} alt="card"/>
                                 </div>
                             </div>
                         </div> */}
                     </div>
                 </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Portfolio
