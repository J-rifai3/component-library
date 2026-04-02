export default function Badge({ children, type, color, ...rest}) {
    
    const colorClass = color ? `${color}` : ""
    const typeClass = type === "pill" ? `${type}`: ""
    
    return (
        <div className={`badge ${colorClass} ${typeClass}`}>
            {children}
        </div>
    )
    
}