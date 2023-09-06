import './home.css'

const Home = () => {
    return (
        <section id='inicio' className="home-container" >
            <div className="presents-container">
                <h4>Oi! meu nome é</h4>
                <div>
                    <h1>Victor</h1>
                    <h1 className="color">Siqueira</h1>
                </div>
                <h6>Desenvolvedor Web</h6>
            </div>
            <img src="/public/foguete.png"/>
        </section>
    )
}

export default Home;