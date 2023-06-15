import { Link } from "react-router-dom";

 const Header = () => {
  return (
      <>
          <h1 className='text-3xl text-center font-bold mb-8'>
              <Link to='/'>Our Projects</Link>
          </h1>
      </>
  );
}

export default Header