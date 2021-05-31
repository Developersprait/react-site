import React from 'react'

const Showcase = () => {
    const [state] = React.useState({
        h6:'Our happy clients',
        h4: 'What clients say?',
        text: "'It was the most exiting thing i've ever seen. These guys are just incredible'"
    })
    return (
        <div className="show">
           <div className="container rel">
              <div className="show___content">
                  <h1>Contact us. We will </h1>
                  <h1>bring your idea into life</h1>
              </div>
              <div className="show__card">
                  <h6 className="show__card-h6">{state.h6}</h6>
                  <h4 className="show__card-h4">{state.h4}</h4>
                  <div show__card-text> {state.text}</div>
              </div>
           </div>  
        </div>
    )
}

export default Showcase
