import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div>
      <NavBar title={"Home"}/>
          Home
          <Link to="/ctf">
<button>
CTF
</button>
            </Link>  
          <Link to="/ftc">
<button>
FTC
</button>
            </Link>  
        </div>
    );
};

export default Home;