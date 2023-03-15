import NavBar from "../Components/NavBar";
import Hover from 'react-3d-hover';
import Typed from 'react-typed';

function Home() {

    return (
        <>
            <NavBar />

            <section className="landing">
                <div className="container">
                    <div className="content">
                        <h1>
                            <Typed
                                strings={[
                                    'Gosth',
                                    'The Best Cheat for FiveM']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop >
                            </Typed>
                        </h1>
                        <p>Get to know now the best products for FiveM at prices that fit your budget! We offer an amazing selection of tools and resources that will enhance your gaming experience. Visit our website and see how we can help you take your gameplay to the next level!</p>
                        <button><a style={{ color: 'var(--text-low)' }} href="https://discord.gg/gosth">Discord</a></button>
                    </div>
                    <Hover scale={1.1} perspective={500} speed={1000}>
                        <img src="imgs/panel.png" alt="cheat" />
                    </Hover>


                </div>
            </section>
        </>
    );
}

export default Home;
