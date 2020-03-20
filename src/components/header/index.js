import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react';

import './styles.scss';

function Header() {    
    const [scroll, setScroll] = useState(false);
    const [bottom, setBottom] = useState(false);
    const navbarHeight = 56;

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const about = window.scrollY > navbarHeight;
            if (about !== scroll) {
                setScroll(about)
            }
        });

        window.onscroll = function () {
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                setBottom(true)
            } else {
                setBottom(false)
            }
        };
    })

    return (
        <React.Fragment>
            <header className={'header ' + (scroll ? 'color' : 'transparent')}>
                <div className='container'>
                    <nav className='navbar'>
                        <ul>
                            <li>
                                <Link 
                                    activeClass={!bottom ? 'active ' : 'remove'}
                                    to='about' spy={true} smooth={true} offset={-150} isDynamic={true} duration={1000} delay={50}>
                                        about
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass={!bottom ? 'active ' : 'remove'}
                                    to='projects' spy={true} smooth={true} offset={-150} isDynamic={true} duration={1000} delay={50}>
                                        projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={bottom ? 'active' : ''}                                      
                                    to='contact' spy={true} smooth={true} offset={0} duration={1000} isDynamic={true} delay={50} activeClass='active'>
                                        contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;
