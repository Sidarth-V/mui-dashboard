import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavLinkMui extends Component {
  render() {
    const { forwardedRef, ...props } = this.props;
    return (
      <NavLink
        {...props}
        ref={forwardedRef}
      />
    );
  }
}

export default NavLinkMui;
