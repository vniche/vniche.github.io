import {
  Header as GardenHeader,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  HeaderItemWrapper
} from '@zendeskgarden/react-chrome';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as ProductIcon } from '../logo.svg';
import { ReactComponent as ListIcon } from '@zendeskgarden/svg-icons/src/16/list-bullet-stroke.svg';
import { ReactComponent as DocumentIcon } from '@zendeskgarden/svg-icons/src/16/file-document-stroke.svg';
import { ReactComponent as CodeIcon } from '@zendeskgarden/svg-icons/src/16/markup-stroke.svg';
import { ReactComponent as MenuIcon } from '@zendeskgarden/svg-icons/src/16/menu-stroke.svg';
import { ReactComponent as NewWIndowIcon } from '@zendeskgarden/svg-icons/src/12/new-window-stroke.svg';
import { Button, IconButton } from '@zendeskgarden/react-buttons';
import styled from 'styled-components';
import { useResponsive } from '../providers/ResponsiveProvider';
import { ReactNode } from 'react';
import {
  Dropdown,
  Trigger,
  Menu,
  MediaItem as GardenMediaItem,
  MediaFigure,
  MediaBody
} from '@zendeskgarden/react-dropdowns'

const StyledHeader = styled(GardenHeader)`
  position: sticky;
  margin-right: auto !important;
  margin-left: auto !important;
  max-width: 80rem;
  box-shadow: none;
  transition: .6s top;
  border: none;
  z-index: 999;
`;

const LogoHeaderItem = styled(HeaderItem)`
  border: none;
`;

const CenterHeaderItem = styled(HeaderItemWrapper)`
  &:first-of-type {
    margin-left: auto;
  }
  &:nth-of-type(4) {
    margin-right: auto;
  }
`;

const MediaItem = styled(GardenMediaItem)`
  padding: 12px 24px;
  width: 100px;
`;

type Navigation = {
  icon: ReactNode
  label: string
  location: string
};

const navigation: Navigation[] = [
  {
    icon: <ListIcon />,
    label: 'Experience',
    location: '#experience',
  },
  {
    icon: <CodeIcon />,
    label: 'Creations',
    location: '#creations',
  },
  {
    icon: <DocumentIcon />,
    label: 'Newsletter',
    location: 'https://www.getrevue.co/profile/viniciusniche?via=vniche-landing-page',
  },
];

const renderHeaderItems = () => {
  return navigation.map(({ icon, label, location }) => (
    <CenterHeaderItem key={label.toLowerCase()}>
      <Button isBasic isPill onClick={() => {
        window.location.href = location;
      }}>
        <Button.StartIcon>
          {icon}
        </Button.StartIcon>
        {label}
        {label === 'Newsletter' &&
          <Button.EndIcon>
            <NewWIndowIcon style={{ height: 12, width: 12 }} />
          </Button.EndIcon>
        }
      </Button>
      <HeaderItemText isClipped>{label}</HeaderItemText>
    </CenterHeaderItem>
  )) as ReactNode[]
};

const renderMenuItems = () => {
  return navigation.map(({ icon, label, location }) => (
    <MediaItem
      key={label.toLowerCase()}
      value={location}
    >
      <MediaFigure>
        {icon}
      </MediaFigure>
      <MediaBody>
        {label}
      </MediaBody>
    </MediaItem>
  ));
};

const renderHeaderMenu = () => {
  return (
    <HeaderItemWrapper>
      <Dropdown
        onSelect={(value) => {
          window.location.href = value;
        }}
      >
        <Trigger>
          <IconButton size="small" aria-label="user">
            <MenuIcon />
          </IconButton>
        </Trigger>
        <Menu
          hasArrow
          placement='top-end'
        >
          {renderMenuItems()}
        </Menu>
      </Dropdown>
      <HeaderItemText isClipped>
        User
      </HeaderItemText>
    </HeaderItemWrapper>
  )
}

const Header = () => {
  const { size, scrollTop } = useResponsive();

  return (
    <StyledHeader isStandalone
      style={{
        top: (scrollTop > 10 ? -52 : 0),
      }}>
      <LogoHeaderItem hasLogo>
        <HeaderItemIcon>
          <ProductIcon style={{ color: PALETTE.green[400] }} />
        </HeaderItemIcon>
        <HeaderItemText>Vinícius Niche</HeaderItemText>
      </LogoHeaderItem>
      <>{size !== 'xs' && renderHeaderItems()}</>
      <HeaderItemWrapper>
        <Button isPill isPrimary style={{ fontWeight: 700 }} onClick={() => window.location.href = '#connect'}>Connect</Button>
        <HeaderItemText isClipped>Connect</HeaderItemText>
      </HeaderItemWrapper>
      <>{size === 'xs' && renderHeaderMenu()}</>
    </StyledHeader>
  );
};

export default Header;
