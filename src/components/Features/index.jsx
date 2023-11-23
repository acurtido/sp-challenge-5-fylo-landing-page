import features from '../../data/features.json';
import './styles.css'

export default function Features() {
    return <div className='features'>
        <div className='features__content'>
            {features.map((data, index) => (
                <div key={index} className='features__item'>
                    <img src={data.image} alt={data.title} />
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            ))}
        </div>
    </div>
}