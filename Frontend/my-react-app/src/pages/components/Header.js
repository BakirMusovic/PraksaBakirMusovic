import React from 'react';
import BlackHeader from './BlackHeader';
import WhiteHeader from './WhiteHeader';

const Header = () => {
    return (
        <div className="header">
            <BlackHeader />
            <WhiteHeader />
        </div>
    );
};

export default Header;
