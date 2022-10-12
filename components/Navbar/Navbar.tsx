import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {
  signOut, useSession,
} from 'next-auth/react';
import { useRouter } from 'next/router';
import PersonIcon from '@mui/icons-material/Person';

import { SignInButton } from './Navbar.styles';

const pages = ['Home'];

const settings = [
  'Logout',
  'Profile',
];

type NavbarProps = {
  children: React.ReactNode;
}

function Navbar({ children }: NavbarProps) {
  const [
    anchorElNav,
    setAnchorElNav,
  ] = React.useState<null | HTMLElement>(null);
  const [
    anchorElUser,
    setAnchorElUser,
  ] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { data: session } = useSession();
  const router = useRouter();

  const handleSettingClick = (setting: string) => {
    if (setting === 'Logout') {
      signOut();
      router.push('/');
    } else if (setting === 'Profile') {
      handleCloseUserMenu();
      router.push('/profile');
    }
  };

  const handlePageClick = (page: string) => {
    if (page === 'Home') {
      handleCloseNavMenu();
      router.push('/');
    }
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ':hover': {
                  color: '#f1f1f1',
                },
                color: 'inherit',
                display: {
                  md: 'flex',
                  xs: 'none',
                },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                mr: 2,
                textDecoration: 'none',
              }}
            >
              HOME
            </Typography>
            <Box sx={{
              display: {
                md: 'none',
                xs: 'flex',
              },
              flexGrow: 1,
            }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  horizontal: 'left',
                  vertical: 'bottom',
                }}
                keepMounted
                transformOrigin={{
                  horizontal: 'left',
                  vertical: 'top',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    md: 'none',
                    xs: 'block',
                  },
                }}
              >
                {pages.map(page => (
                  <MenuItem
                    key={page}
                    onClick={() => handlePageClick(page)}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{
              display: {
                md: 'none',
                xs: 'flex',
              },
              flexGrow: 1,
            }}
            >
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  horizontal: 'left',
                  vertical: 'bottom',
                }}
                keepMounted
                transformOrigin={{
                  horizontal: 'left',
                  vertical: 'top',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    md: 'none',
                    xs: 'block',
                  },
                }}
              />
            </Box>
            <Box sx={{
              display: {
                md: 'flex',
                xs: 'none',
              },
              flexGrow: 1,
            }}
            />
            {session ?
              (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={session.user?.image as string}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      horizontal: 'right',
                      vertical: 'top',
                    }}
                    keepMounted
                    transformOrigin={{
                      horizontal: 'right',
                      vertical: 'top',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map(setting => (
                      <MenuItem
                        key={setting}
                        onClick={() => handleSettingClick(setting)}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) :
              (
                <SignInButton
                  sx={{
                    ':hover': {
                      bgcolor: '#f1f1f1',
                    },
                  }}
                  variant="contained"
                  color="success"
                  startIcon={<PersonIcon />}
                  onClick={() => router.push('/login')}
                >
                  Sign in
                </SignInButton>
              )}
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </>
  );
}

export default Navbar;
