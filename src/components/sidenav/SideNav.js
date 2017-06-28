import React from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom'


const SideNav = () => (
    <div className="sidenav">
      <li>Bitcoin</li>
      <li><a href="#">Bitcoin</a></li>
      <li>Ethereum</li>
      <li><a href="#">Ethereum</a></li>
      <li>Physics</li>
      <li><a href="#">Hashing</a></li>
      <li><a href="#">Vim</a></li>
    </div>
)

export default SideNav;
