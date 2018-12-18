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

  handleClick = (articleURL) => {
    window.location.href = articleURL;
  };

  render() {
    const {
      stories,
      loading
    } = this.state;

    const {
      handleOpen
    } = this.props;

    const storiesList = (!loading) ? (stories.filter((item) => {
      return item.categories.length > 0
    }).map((item, index) =>
      <Styled.Card key={index} onClick={() => this.handleClick(item.link)}>
        <img src={item.thumbnail} alt="Article thumbnail" />
        <h4>{item.title}</h4>
      </Styled.Card>
    )) : (
        Array(6).fill().map((_, index) =>
          <Styled.LoadingCard key={index}>
            <div className="loading" />
          </Styled.LoadingCard>
        )
    );

    return (
      <Styled.Section>
        <Styled.h4>Articles i've written:</Styled.h4>
        {storiesList}
        <Styled.Button primary onClick={handleOpen}>
          Get in touch
        </Styled.Button>
      </Styled.Section>
    );
  }
};
