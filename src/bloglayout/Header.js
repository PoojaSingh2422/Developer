import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

function Header(props) {
  const { sections } = props;

  return (
    <>
      <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0, textDecoration: 'none' }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Header;