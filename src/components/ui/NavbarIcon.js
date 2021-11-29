import React from 'react';
import {Spin as Hamburger} from "hamburger-react";

export const NavbarIcon = ({click, setClick}) => {
    return (
        
        <Hamburger
          toggled = {click}
          onToggle={() => setClick(!click)}
          color="#666666"
          size={30}
          distance="md"
          label="Show menu"
        />
      
    )
}