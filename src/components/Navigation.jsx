import './navigation.css'

export default function Navigation(props) {
    return (<nav className="navegacion">
        <img className="navegacion__logo" src="/icons/logo.svg" alt="" />

        <div className="navegacion__enlaces">
            <a className='navegacion__enlace' href="/">Features</a>
            <a className='navegacion__enlace ' href="/">Team</a>
            <a className='navegacion__enlace' href="/">Sign In</a>
        </div>
    </nav>)
}