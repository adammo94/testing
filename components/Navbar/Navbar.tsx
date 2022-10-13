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
import MenuItem from '@mui/material/MenuItem';
import {
  signOut, useSession,
} from 'next-auth/react';
import { useRouter } from 'next/router';
import PersonIcon from '@mui/icons-material/Person';

import { SignInButton } from './Navbar.styles';

const pages = [
  {
    name: 'Home',
    path: '/',
  },
];

export function Navbar() {
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

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            onClick={() => router.push('/')}
            sx={{
              '&:hover': {
                color: '#f1f1f1',
              },
              cursor: 'pointer',
              display: {
                md: 'flex',
                xs: 'none',
              },
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
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              onClick={handleCloseNavMenu}
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  md: 'none',
                  xs: 'block',
                },
              }}
            >
              {pages.map(({
                path, name,
              }) => (
                <MenuItem
                  key={path}
                  onClick={() => router.push(path)}
                >
                  <Typography>{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
              <Box>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <Avatar
                    alt="User Icon"
                    src={session.user?.image as string}
                  />
                </IconButton>
                <Menu
                  anchorEl={anchorElUser}
                  open={!!anchorElUser}
                  onClose={handleCloseUserMenu}
                  onClick={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography
                      onClick={() => {
                        signOut();
                        router.push('/');
                      }}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography
                      onClick={() => router.push('/profile')}
                    >
                      Profile
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) :
            (
              <SignInButton
                variant="contained"
                startIcon={<PersonIcon />}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f1f1f1',
                  },
                }}
                onClick={() => router.push('/login')}
              >
                sign in
              </SignInButton>
            )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

