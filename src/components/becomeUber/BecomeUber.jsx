import React from 'react'
import "./becomeUber.css"
import IMG1 from "../../assets/becomeUber.jpeg"

const BecomeUber = () => {
  return (
    <section id="BecomeUber">
            <h2>Become Uber Driver</h2>

            <div className="container becomeUber__container">
                <div className="becomeUber">
                    <div className="becomeUber-image">
                        <img src={IMG1} alt="Become Uber Image"/>
                    </div>
                </div>

            
                <form>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <input type="email" name="email" placeholder="Your Vehicle" required/>
                    <textarea name="message" rows="7" placeholder="Describe yourself" required></textarea>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
  )
}

export default BecomeUber