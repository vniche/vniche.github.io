import React, { Component } from 'react';
import * as Styled from './elements';

export default class Skills extends Component {
  render() {
    return (
      <Styled.Section>
        <Styled.h3>Build you one or make it better,</Styled.h3>
        <Styled.span>but first, make sure i'm the right tool for the job.</Styled.span>
        <Styled.h4>Expertise on:</Styled.h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '15px' }}>
          <Styled.Card>
            <h4>Culture</h4>
            <ul>
              <li>DevOps</li>
              <li>Agile</li>
              <li>Collaborative</li>
            </ul>
          </Styled.Card>
          <Styled.Card>
            <h4>Techs</h4>
            <ul>
              <li>Golang</li>
              <li>JavaScript</li>
              <li>ReactJS (Web)</li>
              <li>Java</li>
              <li>Git</li>
              <li>Queues (PubSub)</li>
            </ul>
          </Styled.Card>
          <Styled.Card>
            <h4>Infrastructure</h4>
            <ul>
              <li>Kubernetes</li>
              <li>Ansible</li>
              <li>CI/CD Pipelines</li>
              <li>Serverless</li>
              <li>Docker</li>
              <li>Linux</li>
            </ul>
          </Styled.Card>
        </div>
      </Styled.Section>
    );
  }
};
