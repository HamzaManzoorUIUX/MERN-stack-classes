import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div>
      <NavBar title={"Home"}/>
          Home
          <Link to="/aboutus">
<button>
about us
</button>
            </Link>  
        </div>
    );
};

export default Home;