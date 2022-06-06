
import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const time = today.getHours();
    return (
        <footer className='Footer-con'>
            <h5> Manik Lal Mondol, &copy;: {year}:month:-{month} date:-{date}:Time:-{time} All Rights
                Reserved. </h5>
            <p><small> The Computer Warehouse - Assessment-11 </small></p>
        </footer>
    );
};

export default Footer;