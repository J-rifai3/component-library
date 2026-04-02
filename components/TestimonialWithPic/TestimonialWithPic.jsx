import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialWithPic({children, imageSrc, name, title}) {

    return (
        <div className="testimonial-with-pic">
            <div className="white-bar"></div>
            <img src={imageSrc} alt={name} className="testimonial-with-pic-image" />
            <div className="testimonial-with-pic-content-container">
                <RiDoubleQuotesL size={70} color="rgba(255, 255, 255, 0.25)" className="testimonial-with-pic-quote" />
                {children && <div className="testimonial-with-pic-content">{children}</div>} 
                {name && <div className="testimonial-with-pic-name">{name}</div>}
                {title && <div className="testimonial-with-pic-title">{title}</div>}
            </div>
        </div>
    )
}



