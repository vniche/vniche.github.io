import React, { Component } from 'react';
import * as Styled from './elements';
import { queryFeed } from '../../services/medium';

export default class Articles extends Component {
  state = {
    stories: null,
    loading: true
  };

  async componentDidMount() {
    const feed = await queryFeed();

    this.setState({
      stories: feed.data.items,
      loading: false
    });
  };

  render() {
    const {
      stories,
      loading
    } = this.state;

    const storiesList = (!loading) ? (stories.filter((item) => {
      return item.categories.length > 0
    }).map((item, index) =>
      <Styled.Card key={index}>
        <h4>{item.title}</h4>
        <img src={item.thumbnail} alt="Article thumbnail" />
      </Styled.Card>
    )) : (
      <p>loading</p>
    );

    return (
      <Styled.Section>
        <Styled.h4>Articles i've written:</Styled.h4>
        { storiesList }
      </Styled.Section>
    );
  }
};
