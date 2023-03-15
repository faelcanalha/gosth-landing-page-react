// import { useLocation } from 'react-router-dom';

function NavBar() {
    // const location = useLocation();
    // const { pathname } = location;

    return (
        <nav className="navbar">
            <div className="nav">
                <a className="navbar-brand" href="/">Gosth</a>
                <ul>
                    <li><a href="/"><span className=''>Home</span></a></li>
                    <li><a href="/"><span className=''>Price</span></a></li>
                    <li><a href="/"><span className=''>Login</span></a></li>
                </ul>
            </div>
        </nav >
    );
}

export default NavBar;
