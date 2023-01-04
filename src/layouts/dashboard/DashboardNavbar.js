import * as React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Box, Stack, AppBar, Toolbar, Typography } from '@mui/material';

// components

import Iconify from '../../components/Iconify';
import AccountPopover from './AccountPopover';

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 65;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  console.log(onOpenSidebar.value);
  return (
    <>
      <RootStyle>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="inherit">
            <ToolbarStyle>
              <IconButton onClick={onOpenSidebar} sx={{ color: 'black', mr: 1 }}>
                <Iconify icon="eva:menu-2-fill" />
              </IconButton>

              {/* <IconButton onClick={onOpenSidebar} sx={{ color: 'black', mr: 1 }}>
                <Iconify icon="line-md:menu-to-close-transition" />
              </IconButton> */}

              <Typography variant="body2" sx={{ flexGrow: 1 }}>
                <NavLink id="mynamestyle1" to="/" style={{ textDecoration: 'none' }}>
                  DESIGNWITHSATYA
                </NavLink>
              </Typography>
              <Stack direction="row" alignItems="center" spacing={{ xs: 1.5, sm: 1.5 }}>
                <NavLink
                  to="/dashboard/blogs/blog1"
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                    background: '#673de6',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '7px',
                    borderRadius: '3px',
                  }}
                >
                  SOURCECODE
                </NavLink>
                <AccountPopover />
              </Stack>
            </ToolbarStyle>
          </AppBar>
        </Box>
      </RootStyle>
    </>
  );
}
