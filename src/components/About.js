import React from 'react'
import '../style/about.css'
import face from"../img/facenew.png"

const About = () => {
  return (
    <div className='cnt'>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae ab facilis.
        </p>
        <div className="blocks">
            <div className="left block">
                <img src={face} alt="" />
               <div className="hh">  <h1> The iorn  <br/>  man of india </h1> </div> 
            </div>
            <div className="right block">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente corporis eum, porro minima in.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos, minima dolores consequuntur cumque vero temporibus iusto nisi minus error, nihil provident quidem accusantium quasi ipsam quis modi. Aliquid atque voluptatem ut, adipisci, eius porro voluptate magni incidunt vero at, blanditiis accusamus sapiente corrupti. Quo aspernatur suscipit ad totam provident?</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
