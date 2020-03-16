import React from 'react';
import './styles.scss';

function Footer() {
    return (
        <>
            <div className='footer'>
                <a href="https://github.com/EDusik" target='_blank' rel='noopener noreferrer'><i className="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/eduardo-dos-santos-dusik-095100120/" target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="copyright">
                Developed by <strong>Eduardo Dusik</strong>
            </div>
        </>
    );
}

export default Footer;
