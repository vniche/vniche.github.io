import { Grid, Row, Col as GardenCol } from '@zendeskgarden/react-grid';
import { Tiles as GardenTiles } from '@zendeskgarden/react-forms';
import { Tag as GardenTag } from '@zendeskgarden/react-tags';
import styled from 'styled-components';
import { XXXL } from '@zendeskgarden/react-typography';
import { ReactComponent as GitHubIcon } from '@zendeskgarden/svg-icons/src/16/github-stroke.svg';

const Tiles = styled(GardenTiles)`
  padding: 20px 0;
`;

const Col = styled(GardenCol)`
  padding: 10px;
`;

const Tile = styled(Tiles.Tile)`
  height: 100px;
`;

const TileLabel = styled(Tiles.Label)`
  margin: 0px;
`;

const TileDescription = styled(Tiles.Description)`
  margin: 10px 0px;
`;

const Tag = styled(GardenTag)`
  &:not(:first-of-type) {
    margin-left: 8px;
  }
`;

type Creation = {
  title: string
  description: string
  link: string
  language: string
  tags: string[]
};

const creations: Creation[] = [
  {
    title: 'vniche/rtk-query-grpc-web',
    description: 'RTK (Redux Toolkit) base Query for grpc-web proxied APIs ',
    link: 'https://github.com/vniche/rtk-query-grpc-web',
    language: 'javascript',
    tags: [
      'library'
    ]
  },
  {
    title: 'vniche/twitter-go',
    description: 'Go HTTP client for Twitter API (https://developer.twitter.com/)',
    link: 'https://github.com/vniche/twitter-go',
    language: 'go',
    tags: [
      'library',
      'client'
    ]
  },
  {
    title: 'vniche/novadax-go',
    description: 'Go HTTP client for NovaDAX API (https://www.novadax.com.br/api-de-negociacao)',
    link: 'https://github.com/vniche/twitter-go',
    language: 'go',
    tags: [
      'library',
      'client'
    ]
  },
  {
    title: 'vniche/keycloak-iac-typescript',
    description: 'Pulumi stack to privision a realm and non user-managed resources on a Keycloak instance',
    link: 'https://github.com/vniche/keycloak-iac-typescript',
    language: 'typescript',
    tags: [
      'script',
      'infrastructure-as-code'
    ]
  },
  {
    title: 'vniche/vniche.github.io',
    description: 'Landing page for https://vniche.me (this page)',
    link: 'https://github.com/vniche/vniche.github.io',
    language: 'typescript',
    tags: [
      'web'
    ]
  }
];

const renderCreations = () => {
  return creations.map(({ title, description, language, tags }: Creation, index) => (
    <Col sm={4} key={index.toString()}>
      <Tile value={index.toString()}>
        <TileLabel>
          {title} <></>
          <GitHubIcon />
        </TileLabel>
        <TileDescription>
          {description}
        </TileDescription>
        {[language, ...tags].map((tag) => (
          <Tag key={tag}>
            <span>{tag}</span>
          </Tag>
        ))}
      </Tile>
    </Col>
  ));
};

const Creations = () => (
  <Grid id='creations'>
    <XXXL>Creations</XXXL>
    <Tiles name="creations" aria-label="Creations" isCentered={false} onChange={({ target: { value } }) => window.location.href = creations[Number(value)].link}>
      <Row>
        {renderCreations()}
      </Row>
    </Tiles>
  </Grid >
);

export default Creations;