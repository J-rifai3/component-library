import { GiTreehouse } from "react-icons/gi";
import { HiOutlineSlash } from "react-icons/hi2";

export default function TestimonialNoPic({children, name, title}) {

    return (
        <div className="testimonial-no-pic">
            <div className="testimonial-no-pic-work-container">
                <GiTreehouse size={30} className="testimonial-no-pic-work-icon"/>
                <p className="testimonial-no-pic-work">Work<span className="testimonial-no-pic-work-span">cation</span></p>
            </div>

            {children && <div className="testimonial-no-pic-content">"{children}"</div>} 

            <div className="testimonial-title-container">
                {name && <div className="testimonial-no-pic-name">{name}</div>}
                <HiOutlineSlash size={30} className="testimonial-no-pic-slash"/>
                {title && <div className="testimonial-no-pic-title">{title}</div>}
            </div>
        </div>
    )
}

