import React from 'react';
import logo from '../assets/png-transparent-akatsuki-logo-removebg-preview.png';

const Header: React.FC = () => {
  return (
<>
    <header className="flex justify-between items-center bg-black text-white p-4">
    <div className='flex items-center p-3'>
        <img className='h-25 'src={logo} alt=" akatsuki logo" />
        <h1 className="text-2xl font-bold">AnimeBazaar</h1>
    </div>
    <div>
        <nav>
            <ul className="flex space-x-4">
                <li>  one              </li>
                <li>  one              </li>
                <li>  one              </li>
                <li>  one              </li>
            </ul>
        </nav>
    </div>
    <div>
        
    </div>

    </header>
</>
  );
};

export default Header;
