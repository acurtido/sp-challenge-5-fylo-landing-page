import features from '../data/features.json';
import './features.css';

export default function Features() {
    return <div className='features'>
        <div className='features__content'>
            {features.map(data => (
                <div className='features__item'>
                    <img src={data.image} alt={data.title} />
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            ))}
        </div>
    </div>
}