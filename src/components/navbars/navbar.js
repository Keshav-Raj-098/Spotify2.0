import React from 'react';
import { useNavigate,BrowserRouter,Route,Routes } from 'react-router-dom';
import left from '../../asset/left.svg';
import right from '../../asset/right.svg';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
    console.log('hello');
    
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    

    <div>
      <div
        className="flex flex-row justify-between align-top px-5 ml-2"
        style={{ backgroundColor: '#101010', borderStartEndRadius: '6px',
          borderTopLeftRadius:"6px", width: '75vw',
          // position:"fixed",top:"12px"
         }}
        >
        <div className="flex flex-row align-middle py-5 gap-2">
          <button
            className="p-2"
            style={{ borderRadius: '50%', backgroundColor: '#050505' }}
            >
            <img src={left} alt="Left" height={15} width={15} />
          </button>
          <button
            className="p-2"
            style={{ borderRadius: '50%', backgroundColor: '#050505' }}
            >
            <img src={right} alt="Right" height={15} width={15} />
          </button>
        </div>

        <div className="flex flex-row align-middle justify-between gap-8">
              <span
                style={{
                  // backgroundColor: 'white',
                  color: 'rgb(167 167 167)',
                  fontWeight: '500',
                  
                  margin: '15px 0px',
                }}
                onClick={handleSignupClick}
                >
                Sign Up
              </span>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              fontWeight: '500',
              borderRadius: '15px',
              padding: '5px 15px',
              margin: '15px 0px',

              
            }}
            onClick={handleLoginClick}
            
            >
            Log In
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
