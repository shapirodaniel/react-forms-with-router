import React from 'react';
import { NavLayout } from '../layout';
import { Link } from 'react-router-dom';

const { NavContainer, Logo, LinksContainer } = NavLayout;

const links = [
  { id: 1, name: 'edit', to: '/edit' },
  { id: 2, name: 'new', to: '/new' },
  { id: 3, name: 'token-visualizer', to: '/token-visualizer' },
];

export default function Nav() {
  return (
    <NavContainer>
      <Logo>React Forms Demo</Logo>
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
