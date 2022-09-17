import Pulse from '../../assets/icons/pulse.svg';
import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import dashboard from '../../assets/icons/dashboard.svg';
import users from '../../assets/icons/users.svg';
import privacy from '../../assets/icons/privacy.svg';
import media from '../../assets/icons/media.svg';
import { Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap';

function CustomToggle({ children, eventKey, onClick }) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({ state: !active, eventKey: eventKey }));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
            decoratedOnClick(isCurrentEventKey)
        }}>
            {children}
        </Link>
    );
}

const VerticalNav = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    //location
    let location = useLocation();
    return (
        <>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">Main</span>
                        <span className="mini-icon">-</span>
                    </Link>
                </li>
                <li className="nav-item pb-2">
                    <Link className={`${location.pathname === '/dashboard' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard" onClick={() => { }}>
                        <i className="icon">
                            <img src={dashboard} alt={"dashboard"} 
                            width="20px" height="auto"/>
                        </i>
                        <span className="item-name">Dashboard</span>
                    </Link>
                </li>
                <li><hr className="hr-horizontal" /></li>
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">CMS</span>
                        <span className="mini-icon">-</span>
                    </Link>
                </li>
                <Accordion.Item as="li" eventKey="sidebar-special" bsPrefix="nav-item">
                    <Link className={`${location.pathname === '/users' ? 'active' : ''} nav-link `} aria-current="page" to="/users" onClick={() => { }}>
                        <i className="icon">
                           <img
                           src={users}
                           alt={"users"}
                           width="20px"
                           height="auto" 
                           />
                        </i>
                        <span className="item-name">Users</span>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="sidebar-special" bsPrefix="nav-item">
                    <Link className={`${location.pathname === '/transaction' ? 'active' : ''} nav-link `} aria-current="page" to="/transaction" onClick={() => { }}>
                        <img 
                        src={Pulse} 
                        alt={"transactions"}
                        width= "20px"
                        height= "auto"
                        />
                        <span className="item-name">Transactions</span>
                    </Link>
                </Accordion.Item>
                <li className="nav-item">
                    <Link className={`${location.pathname === '/manage_media' ? 'active' : ''} nav-link`} to="/manage_media">
                        <i className="icon">
                            <img
                             src={media}
                             alt={"media"}
                             width= "20px"
                             height= "auto"
                            />
                        </i>
                        <span className="item-name">Manage Media</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`${location.pathname === '/privacy_policy' ? 'active' : ''} nav-link`} to="/privacy_policy">
                        <i className="icon">
                        <img
                             src={privacy}
                             alt={"privacy"}
                             width= "20px"
                             height= "auto"
                            />
                        </i>
                        <span className="item-name">Privacy Policy</span>
                    </Link>
                </li>
                <li><hr className="hr-horizontal" /></li>
            </Accordion>
        </>
    )
}

export default VerticalNav;
