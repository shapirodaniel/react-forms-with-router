import React from 'react';
import { NavLayout } from '../layout';
import { Link } from 'react-router-dom';

const { NavContainer, Logo, LinksContainer } = NavLayout;

const links = [
  { id: 1, name: 'edit', to: '/edit' },
  { id: 2, name: 'new', to: '/new' },
];

export default function Nav(props) {
  return (
    <NavContainer>
      <Logo>Stranger's Things</Logo>
      <LinksContainer>
        {links.map(({ id, name, to }) => (
          <Link key={id} to={to}>
            {name}
          </Link>
        ))}
      </LinksContainer>
    </NavContainer>
  );
}
