import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { LG, Span, XXXL } from '@zendeskgarden/react-typography';
import { Well } from '@zendeskgarden/react-notifications';
import styled from 'styled-components';
import { Progress } from '@zendeskgarden/react-loaders';
import { Timeline } from '@zendeskgarden/react-accordions';

const BorderlessWell = styled(Well)`
  border: none;
  padding: 0;
`;

const StyledSpan = styled(Span).attrs({ isBold: true })`
  display: block;
`;

type Stat = {
  label: string
  value: number
};

const stats: Stat[] = [
  {
    label: 'Go',
    value: 70
  },
  {
    label: 'JavaScript/TS',
    value: 50
  },
  {
    label: 'Cloud',
    value: 90
  },
  {
    label: 'Blockchain',
    value: 40
  },
  {
    label: 'ReactJS',
    value: 20
  },
  {
    label: 'Architecture',
    value: 80
  },
  {
    label: 'Observability',
    value: 70
  },
  {
    label: 'Infra as Code',
    value: 60
  },
  {
    label: 'Kubernetes',
    value: 80
  },
  {
    label: 'CI/CD',
    value: 60
  }
];

const renderStats = () => {
  return stats.map(({ label, value }: Stat) => (
    <Row
      key={label.toLowerCase()}
      style={{
        padding: '20px 0'
      }}>
      <Col sm={3}>
        <LG>{label}</LG>
      </Col>
      <Col sm={8} offsetSm={1}>
        <Progress color="#000" size="large" value={value} />
      </Col>
    </Row>
  ));
};

type Job = {
  title: string
  company: string
  duration: string
  description: string
}

const jobs: Job[] = [
  {
    title: 'Backend Engineer',
    company: 'Truvity',
    duration: 'Jun 2022 - Present',
    description: 'Collaborate with the core engineering team to implement SSI specification and build products on top of it.'
  },
  {
    title: 'Head of DevSecOps',
    company: 'Klever',
    duration: 'Apr 2020 - Jun 2022 · 2 yrs 4 mos',
    description: 'Lead the DevOps and Security team in keeping and improving company-wide services and infrastructure.'
  },
  {
    title: 'DevOps Engineer',
    company: 'Klever',
    duration: 'Mar 2019 - Apr 2020 · 1 yr 2 mo',
    description: 'Collaborate with the core engineering team to ensure scalability and resilience of services in a fast growing user-base.'
  },
  {
    title: 'Performance Analyst',
    company: 'SulAmérica',
    duration: 'Jul 2016 - Apr 2019 · 2 yrs 10 mos',
    description: 'Collaborate with the engineering teams to improve applications overall performance (most related to resilience and quality).'
  },
  {
    title: 'Performance Analyst',
    company: 'Inmetrics',
    duration: 'Dec 2015 - May 2016 · 6 mos',
    description: 'Collaborate with the engineering teams to improve applications overall performance (most related to resilience and quality) allocated in a client.'
  },
  {
    title: 'Java Developer',
    company: 'TronSoft',
    duration: 'Apr 2013 - Jun 2015 · 2 yrs 3 mos',
    description: 'Collaborate with the core engineering team to implement Web and Android applications for restaurants, bars and night houses management.'
  },
  {
    title: 'Trainee',
    company: 'Lumis',
    duration: 'Oct 2011 - Mar 2013 · 1 yr 6 mos',
    description: 'Learn from and collaborate with the core engineering team to maintain and envolve the product, Lumis Portal.'
  }
];

const renderJobs = () => {
  return jobs.map(({ title, company, duration, description }: Job) => (
    <Timeline.Item key={`${title.replaceAll(' ', '-').toLowerCase()}-${company.toLowerCase()}`}>
      <Timeline.OppositeContent>
        <Span hue="grey">{description}</Span>
      </Timeline.OppositeContent>
      <Timeline.Content>
        <StyledSpan>{title} @ {company}</StyledSpan>
        <Span hue="grey">{duration}</Span>
      </Timeline.Content>
    </Timeline.Item>
  ));
};

const Experience = () => (
  <Grid id='experience'>
    <XXXL>Experience</XXXL>
    <Row>
      <Col sm={6}>
        <BorderlessWell>
          <Timeline isAlternate>
            {renderJobs()}
          </Timeline>
        </BorderlessWell>
      </Col>
      <Col sm={5} offsetSm={1}>
        <BorderlessWell>
          {renderStats()}
        </BorderlessWell>
      </Col>
    </Row>
  </Grid>
);

export default Experience;