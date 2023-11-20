import features from '../data/features.json';

export default function Features() {
    return <>
        {features.map(data => (
            <div>
                <img src={data.image} alt={data.title} />
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
        ))}
    </>
}