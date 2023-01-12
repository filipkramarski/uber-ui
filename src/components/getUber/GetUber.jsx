import React from 'react'
import './getUber.css'
import IMG1 from "../../assets/getUber.jpg"

const GetUber = () => {
  return (
    <section id="getUber">
            <h2>Get Uber Driver</h2>

            <div className="container getUber__container">
                <form>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <input type="email" name="email" placeholder="From" required/>
                    <input type="email" name="email" placeholder="To" required/>
                    <button type="submit" className="btn btn-primary">Check</button>
                </form>

                <div className="getUber">
                    <div className="getUber-image">
                        <img src={IMG1} alt="GetUber Image"/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default GetUber