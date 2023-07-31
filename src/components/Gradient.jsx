function Gradient ({children, gradient}) {
    return (
        <div className={`relative display: inline-block`}>
            <span className={`
                font-extrabold
                text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
                >{children}
            </span>
            <div className={`absolute inset-0 blur-2xl opacity-80
            bg-gradient-to-r ${gradient} animate-pulse`}>
            </div>
        </div>
    )
}

export default Gradient