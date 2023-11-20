import flecha from '/icons/icon-arrow.svg';
import stayProductiveImage from '/images/illustration-stay-productive.png';
import './stay-productive.css'

export default function StayProductive() {
    return (
        <div className="stay-productive">
            <img className='stay-productive__img' src={stayProductiveImage} alt="stay-productive" />

            <div className='stay-productive__text'>
                <h2>Stay productive, <br/> wherever you are</h2>
                <p>
                    Never let location be an issue when accessing your files. Fylo has you
                    covered for all of your file storage needs.
                </p>
                <p>
                    Securely share files and folders with friends, family and colleagues for
                    live collaboration. No email attachments required.
                </p>

                <div className="stay-productive__link">
                    <p className='stay-productive__link--text'> See how Fylo works </p>
                    <img src={flecha} alt="flecha" />
                </div>
            </div>

        </div>
    );
}