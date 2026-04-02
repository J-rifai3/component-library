import { HiOutlineCloudUpload } from "react-icons/hi";
export default function Card({ children, header }) {
    
    return (
        <>
            <div className="popup">
                <HiOutlineCloudUpload size={27} />
            </div>
        
            <div className="card">
                {header && <div className="card-header">{header}</div>}
                {children && <div className="card-body">{children}</div>}
            </div>
        </>
    )
}