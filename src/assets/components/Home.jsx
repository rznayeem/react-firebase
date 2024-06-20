import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
