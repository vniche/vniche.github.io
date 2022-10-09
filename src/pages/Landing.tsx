import { Grid as GardenGrid, Row as GardenRow } from '@zendeskgarden/react-grid';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Creations from '../components/Creations';
import Experience from '../components/Experience';
import { useResponsive } from '../providers/ResponsiveProvider';
import Connect from '../components/Connect';

const Grid = styled(GardenGrid)`
  margin-right: auto !important;
  margin-left: auto !important;
  position: relative;
  width: 100%;
  max-width: 80rem;
`;

const Row = styled(GardenRow)`
  margin-right: 10px;
  margin-left: 10px;
  padding-top: 20px;
`;

const Landing = () => {
  const { size } = useResponsive();

  return (
    <Grid>
      <Row
        style={{
          margin: (size !== 'xs' ? '150px 0' : '50px 0'),
        }}
      >
        <Hero />
      </Row>
      <Row
        style={{
          margin: (size !== 'xs' ? '150px 0' : '50px 0'),
          borderTop: '1px solid #cdcbc8'
        }}
      >
        <Experience />
      </Row>
      <Row
        style={{
          margin: (size !== 'xs' ? '150px 0' : '50px 0'),
        }}
      >
        <Creations />
      </Row>
      <Row
        style={{
          margin: (size !== 'xs' ? '150px 0' : '50px 0'),
          borderTop: '1px solid #cdcbc8'
        }}
      >
        <Connect />
      </Row>
    </Grid>
  )
};

export default Landing;