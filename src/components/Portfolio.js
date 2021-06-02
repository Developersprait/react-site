import React from 'react';
import cat1 from '../../src/static/img/1.png'
import cat2 from '../../src/static/img/2.png'
import cat3 from '../../src/static/img/4.png'

const Portfolio = () => {
    const [state] = React.useState([
        {id:1, image: cat1, name:'Great Gatsby', description:'Shy cat'},
        {id:2, image: cat2, name:'Big Brother', description:'The biggest of us'},
        {id:3, image: cat3, name:'Gorgeous Mark', description:'Project Manager'}
    ]);
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
                         {state.map(user =>(
                             <div className="col-4 pl-15" key={user.id}>
                             <div className="portfolio__card">
                                 <div className="portfolio__card-img">
                                     <img src={user.image} alt="card"/>
                                 </div>
                                 <div className="portfolio__card-name">
                                     {user.name}
                                 </div>
                                 <div className="portfolio__card-description"><p >
                                      {user.description}</p></div>
                             </div>
                         </div>
                         ))}
                         
                     </div>
                 </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Portfolio
