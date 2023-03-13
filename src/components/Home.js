import React from 'react'
import '../style/home.css'
import img from '../img/home.webp'
import Navbar from './Navbar'


const Home = () => {
    return (
        <div className="main">
            <Navbar/>
            <img src={img} alt="" />
            <div className="overlay">

                <div className="content">
                    <h1>sardar patel</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas velit fuga repellat inventore expedita obcaecati rerum autem deserunt harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium optio, iure libero porro repudiandae delectus est debitis dolore ex veniam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto autem ratione reprehenderit explicabo quasi odio?</h4>
                    <div className="btn">
                        <button className='btn-black'>Explore more</button>
                        <button> about</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
