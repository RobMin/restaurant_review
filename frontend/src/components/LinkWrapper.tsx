import React from 'react';
import { Link } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

interface FakeLinkProps {
  href: string;
  children: any;
}

export const LinkWrapper = ({ href, children }: FakeLinkProps) => {
  const history = useHistory();

  const redirect = (e: any) => {
    e.preventDefault();
    history.push(href);
  };

  return (
    <Link underline="none" href={ href } color="inherit" onClick={ redirect }>
      { children }
    </Link>
  );
};
