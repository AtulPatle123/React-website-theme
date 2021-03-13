import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
            <footer className="bg-light text-center">
                <p>@ {year} Atul Patle . All rights reserved | Terms and Conditions</p>
            </footer>
        </>
    );
};

export default Footer;