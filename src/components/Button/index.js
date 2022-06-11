import './Button.css'

export default function Button({name,type}) {
    return (
        <button className={type}>{name}</button>
    )
}