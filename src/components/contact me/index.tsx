import InputComponent from "../Input";
import './contact.css'


const ContactMe = () => {

    function submitHandle(e: React.FormEvent){
        e.preventDefault()
    }



    return(
        <section id="contato" className="contact-container">
            <h1>Contato</h1>
            <div className="info">
            <form onSubmit={submitHandle} className="form-container">
                <h3>Preeencha o formulário</h3>
                <InputComponent type="text" placeHolder="Nome" label="Nome" />
                <InputComponent type="email" placeHolder="Email" label="Email" />
                <InputComponent type="text" placeHolder="Assunto" label="Assunto" />
                <div className="message">
                    <label>Mensagem</label>
                    <textarea required/>
                </div>
                    <button type="submit">Enviar</button>
            </form>
            <img src="/public/computer12.png" alt="" />
            </div>
        </section>
    )
}

export default ContactMe;