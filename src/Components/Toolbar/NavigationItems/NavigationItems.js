import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" active>SERVICES</NavigationItem>
        <NavigationItem link="/cli">CLIENT</NavigationItem>
        <NavigationItem link="/ca">CAREERS</NavigationItem>
        <NavigationItem link="/ab">ABOUT</NavigationItem>
        <NavigationItem link="/co">CONTACT</NavigationItem>
    </ul>
);

export default navigationItems;