import './input.css'

const InputComponent = (prop: {label: string, type: string, placeHolder: string}) => {
    return (
        <div className="input-container">
            <label>{prop.label}</label>
            <input type={prop.type} placeholder={prop.placeHolder} required/>
        </div>
    )
}

export default InputComponent;