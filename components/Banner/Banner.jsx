import { BsCheckCircleFill, BsExclamationTriangleFill } from "react-icons/bs";
import { FaCircleXmark } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";


export default function Banner({ type, children, ...rest}) {
    let typeClass = type ? `${type}` : "";
    const iconClass = type ? `banner-icon-${type}` : "";
    let header = "undefined";
    let icon = null;
    let bold = "";
    
    
    switch (type) {
        case "success":
            header = "Congratulations!";
            icon = <BsCheckCircleFill />;
            break;
        case "warning":
            header = "Attention";
            icon = <BsExclamationTriangleFill />;
            break;
        case "error":
            header = "There is a problem with your application";
            icon = <FaCircleXmark />;
            if (!children) {
                bold = "bold";
            }
            break;
        case "neutral":
            header = "Update available";
            icon = <HiMiniInformationCircle />;
            break;
        default:
            break;
    }
    
    return (
            
            <div className={`banner ${typeClass}`}>
                <div className={`banner-icon ${iconClass}`}>
                    {icon}
                </div>
                <div className="banner-content">        
                    <div className={`banner-header ${bold}`}>
                        {header}
                    </div>
                    {children && <div className={`banner-desc`}>
                        {children}
                    </div>}
                </div>
            </div>

    )
}