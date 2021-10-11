import '../assets/styles/Button.css'

const Button = ({text}) => {
    
    return (
        <>
            <input type="button" value={text} className="button"/>
        </>
    )
}

export default Button