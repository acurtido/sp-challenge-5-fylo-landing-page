import flecha from '/icons/icon-arrow.svg';
import './stay-productive.css';

export default function StayProductive() {
    return (
        <div className="stay-productive">
            <h2>Stay productive, wherever you are</h2>
            <p>
                Never let location be an issue when accessing your files. Fylo has you
                covered for all of your file storage needs.
            </p>
            <p>
                Securely share files and folders with friends, family and colleagues for
                live collaboration. No email attachments required.
            </p>

            <div className="stay-productive__link">
                <p className='stay-productive__link--text'>See how Fylo works</p>
                <img src={flecha} alt="arrow" />
            </div>
        </div>
    );
}