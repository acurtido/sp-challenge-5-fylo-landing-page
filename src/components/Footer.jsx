import './footer.css';
import imagenFooter from '/icons/logo.svg'
import imagenLocation from '/icons/icon-location.svg'
import imagenPhone from '/icons/icon-phone.svg'
import imagenEmail from '/icons/icon-email.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <img src={imagenFooter} alt="imagen-footer" />
            <div className='footer__content'>
                <div className='footer__location'>
                    <div className="footer__info">
                        <img src={imagenLocation} alt="imagen-location" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam reiciendis officiis vel blanditiis, rerum consequatur ut. Reprehenderit aliquid, alias consectetur iusto ipsum quisquam dicta, quo mollitia eligendi atque debitis ex!</p>
                    </div>
                </div>
                <div className='footer__contact'>
                    <div className="footer__info">
                        <img src={imagenPhone} alt="" />
                        <p> +1-543-123-4567 </p>
                    </div>
                    <div className="footer__info">
                        <img src={imagenEmail} alt="" />
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <div className='footer__links'>
                    <ul>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <li>Contact Us</li>
                        <li>Term</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className='footer__socials'>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}