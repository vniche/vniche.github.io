import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { LG, XL } from '@zendeskgarden/react-typography';
import { Well, Title } from '@zendeskgarden/react-notifications';
import styled from 'styled-components';
import { useResponsive } from '../providers/ResponsiveProvider';
import AWSDeveloperBadge from 'assets/aws-certified-developer-associate.png';

const BorderlessWell = styled(Well)`
  border: none;
  padding: 0;
`;

const Certifications = () => {
  const { size } = useResponsive();
  return (
    <Grid>
      <Row>
        <Col size={7} offset={2} md={5} offsetMd={1} lg={4} offsetLg={2}>
          <a href="https://www.credly.com/badges/f247e75b-1e74-463d-8404-ae03e3071efa/public_url">
            <img height={250} width={250} src={AWSDeveloperBadge} alt="AWS Developer Associate Certificate" />
          </a>
        </Col>
        <Col size={10} offset={1} md={5} offsetMd={0} style={{ marginTop: '50px' }}>
          <Row>
            <BorderlessWell>
              <Title>
                <XL style={{
                  paddingBottom: (size !== 'xs' ? 30 : 0),
                  lineHeight: 1,
                  fontWeight: 500
                }}>
                  AWS Certified Developer
                </XL>
              </Title>
            </BorderlessWell>
          </Row>
          <Row>
            <BorderlessWell
              style={{
                borderRadius: 0,
              }}
            >
              <LG>Issued by <a href="https://www.credly.com/org/amazon-web-services">Amazon Web Services Training and Certification</a></LG>
            </BorderlessWell>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

export default Certifications;