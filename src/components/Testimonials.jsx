import testimonials from "../data/testimonials.json";
import './testimonials.css';

export default function Testimonials() {
    return (
        testimonials.map((testimonial, index) => {
            return (
                <div className="testimonial" key={index}>
                    <p className="testimonial__quotes">{testimonial.quote}</p>
                    <div className="testimonials__info">
                        <img className="testimonial__image" src={testimonial.image} alt="" />
                        <h2 className="testimonial__name">{testimonial.name}</h2>
                        <h3 className="testimonial__title">{testimonial.title}</h3>
                    </div>
                </div>
            )
        }))
}