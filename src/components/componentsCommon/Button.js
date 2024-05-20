const Button = ({ text, type = "button", loading }) => {
    return (
        <button
            type={type}
            className={
                `
                    flex items-center justify-center bg-buttons-primary text-white text-sm  px-5 rounded-sm transition-all duration-1000 
                    hover:bg-buttons-hover_primary hover:rounded-lg 
                    ${loading ? "cursor-not-allowed rounded-xl hover:bg-buttons-hover_primary hover:rounded-xl h-10 w-20" : "h-10 w-32"}
                `
            }
        >
            <span 
                className={`transition-all ${loading ? 'opacity-0 invisible' : 'opacity-100 visible delay-300'}`}>{text}</span>
            <div
                className={
                    `
                        transition-all delay-200
                        absolute h-7 w-7 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white
                        ${loading ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `
                }
                role="status">
            </div>
        </button>

    )
}

export default Button;