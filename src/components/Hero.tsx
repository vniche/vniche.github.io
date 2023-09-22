import { Grid, Row } from '@zendeskgarden/react-grid';
import { MD, XXXL } from '@zendeskgarden/react-typography';
import { Well, Title } from '@zendeskgarden/react-notifications';
import { Button } from '@zendeskgarden/react-buttons';
import styled from 'styled-components';
import { ReactComponent as ArrowLeftIcon } from '@zendeskgarden/svg-icons/src/16/arrow-left-stroke.svg';
import { useResponsive } from '../providers/ResponsiveProvider';

const BorderlessWell = styled(Well)`
  border: none;
  padding: 0;
`;

const ButtonIcon = styled(Button.EndIcon)`
  background-color: #ffffff;
  border-radius: 25px;
  width: 42px !important;
  height: 42px !important;
`;

const ArrowIcon = styled(ArrowLeftIcon)`
  width: 18px;
  height: 18px;
`;

const Hero = () => {
  const { size } = useResponsive();
  return (
    <Grid>
      <Row>
        <BorderlessWell>
          <Title>
            <XXXL style={{
              paddingBottom: (size !== 'xs' ? 30 : 0),
              fontSize: '4rem',
              lineHeight: 1,
              fontWeight: 500
            }}>
              Bringing the future to life.
            </XXXL>
          </Title>
        </BorderlessWell>
      </Row>
      <Row>
        <BorderlessWell
          style={{
            borderTop: '1px solid #cdcbc8',
            borderRadius: 0,
          }}
        >
          <Button
            isPrimary
            isPill
            style={{
              margin: '20px 0',
              fontWeight: 700,
              paddingRight: 3,
            }}
            size={"large"}
            onClick={() => window.location.href = '#connect'}
          >
            Connect
            <ButtonIcon isRotated>
              <div>
                <ArrowIcon color='#000000' />
              </div>
            </ButtonIcon>
          </Button>
          <MD>Software engineer experienced with end-to-end development lifecycle and cloud architecture and infrastructure.</MD>
        </BorderlessWell>
      </Row>
    </Grid>
  );
};

export default Hero;