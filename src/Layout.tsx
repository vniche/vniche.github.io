import { DEFAULT_THEME, IGardenTheme, ThemeProvider } from '@zendeskgarden/react-theming';
import {
  Body,
  Chrome,
  Content,
  Main,
} from '@zendeskgarden/react-chrome';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import ResponsiveProvider from './providers/ResponsiveProvider';

const theme: IGardenTheme = {
  ...DEFAULT_THEME,
  colors: {
    ...DEFAULT_THEME.colors,
    background: '#f9f8f5',
    primaryHue: '#000'
  }
}

const Layout = () => {
  return (
    <ThemeProvider focusVisibleRef={null} theme={theme as any}>
      <ResponsiveProvider>
        <Chrome isFluid style={{ height: '100vh', overflow: 'unset' }}>
          <Body>
            <Header />
            <Content>
              <Main style={{ overflow: 'unset' }}>
                <Outlet />
              </Main>
            </Content>
          </Body>
        </Chrome>
      </ResponsiveProvider>
    </ThemeProvider>
  )
};

export default Layout;
