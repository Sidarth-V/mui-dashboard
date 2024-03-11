import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { forwardRef } from "react";

const CustomNavLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
  }
);

export default CustomNavLink;
