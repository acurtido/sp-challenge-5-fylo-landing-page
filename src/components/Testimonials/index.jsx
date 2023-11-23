import testimonials from "../../data/testimonials.json";
import './styles.css'

export default function Testimonials() {
    return (
        <div className="testimonials">
            <div className="testimonials__content">
                {testimonials.map((testimonial, index) => {
                    return (
                        <div className="testimonials__item" key={index}>
                            <p className="testimonial__quote">{testimonial.quote}</p>
                            <div className="testimonial__info">
                                <img className="testimonial__image" src={testimonial.image} alt="" />
                                <div className="testimonial__text">
                                    <h2 className="testimonial__name">{testimonial.name}</h2>
                                    <h3 className="testimonial__title">{testimonial.title}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}