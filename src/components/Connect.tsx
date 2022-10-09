import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { XXXL } from '@zendeskgarden/react-typography';
import { ReactComponent as GitHubIcon } from '@zendeskgarden/svg-icons/src/16/github-stroke.svg';
import { ReactComponent as TwitterIcon } from '@zendeskgarden/svg-icons/src/16/twitter-stroke.svg';
import { ReactComponent as LinkedInIcon } from '@zendeskgarden/svg-icons/src/16/linkedin-stroke.svg';
import { ReactComponent as BookIcon } from '@zendeskgarden/svg-icons/src/16/book-closed-stroke.svg';

import { ReactNode } from 'react';
import { IconButton } from '@zendeskgarden/react-buttons';

type Connection = {
  icon: ReactNode
  link: string
};

const connections: Connection[] = [
  {
    icon: <GitHubIcon />,
    link: 'https://github.com/vniche'
  },
  {
    icon: <TwitterIcon />,
    link: 'https://twitter.com/viniciusniche'
  },
  {
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/in/vinicius-niche/'
  },
  {
    icon: <BookIcon />,
    link: 'https://medium.com/@vcorreaniche'
  }
];

const renderConnections = () => {
  return connections.map(({ icon, link }: Connection, index) => (
    <Col key={index.toString()} xs md={1}>
      <IconButton aria-label="leaf" onClick={() => { window.location.href = link; }}>
        {icon}
      </IconButton>
    </Col>
  ));
};

const Connect = () => (
  <Grid id='connect'>
    <XXXL>Connect</XXXL>
    <Row alignItems="center" justifyContent="center" style={{ margin: '50px 0px 150px 0px' }}>
      {renderConnections()}
    </Row>
  </Grid>
);

export default Connect;