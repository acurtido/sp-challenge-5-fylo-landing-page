import Button from '../Button'
import './styles.css'

export default function Hero(props) {
    return (
        <div className="hero-container">
            <img src="images/illustration-intro.png" alt="" />
            <h1 className="hero__titulo"> All your files in one secure location, <br /> accesible anywhere</h1>
            <p className="hero__texto">Fylo stores all your most important files in one secure location. <br/> Access them wherever you need, share and collaborate with <br/> friends family, and co-workers</p>
            <Button ancho={200} texto="Get started" />
        </div>
    )
}