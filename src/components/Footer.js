import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="contact-links-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>

                    <a href="#"><i class="fab fa-twitter"></i></a>

                    <a href="#"><i class="fab fa-discord"></i></a>

                    <a href="#"><i class="fab fa-linkedin-in"></i></a>

                </div>
                <div className="credit">

                    <p className="text">&copy; vishal londhe website 2021</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
