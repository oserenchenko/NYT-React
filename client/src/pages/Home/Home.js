import React, { Component } from "react";
import { Input, Button } from "../../components/Search";
import { Col, Row, Container } from "../../components/Grid";
import Results from "../../components/Results"
import Article from "../../components/Article"
import Savebtn from "../../components/Savebtn"
import API from "../../utils/APIS";

class Home extends Component {
  state = {
    articles: [],
    topic: "",
    startYr: "",
    endYr: ""
  }

  loadArticles = () => {
    console.log(this.state.articles)
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYr && this.state.endYr) {
      API.getArticles(this.state.topic, this.state.startYr, this.state.endYr)
        .then(res => this.setState({ articles: res.data.response.docs, topic: "", startYr: "", endYr: "" }, this.loadArticles))
        .catch(err => console.log(err));
    }
  };

  saveArticle = (event) => {
    console.log("saving article");
    const articleData = {
      title: event.target.getAttribute("title"),
      author: event.target.getAttribute("author"),
      date: event.target.getAttribute("date"),
      url: event.target.getAttribute("url")
    }
    API.saveArticle(articleData)
    // .then(res => this.loadArticles())
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  render() {
    return (
  <Container>
    <Row>
      <Col size="md-12">
        <Input
        label="Topic"
        placeholder="Middle East"
        name="topic"
        value={this.state.topic}
        onChange={this.handleInputChange}
        />
        <Input
        label="Start Year"
        placeholder="YYYYMMDD"
        name="startYr"
        value={this.state.startYr}
        onChange={this.handleInputChange}
        />
        <Input
        label="End Year"
        placeholder="YYYYMMDD"
        name="endYr"
        value={this.state.endYr}
        onChange={this.handleInputChange}
        />
        <Button onClick={this.handleFormSubmit}>
        </Button>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
      {this.state.articles.length ? (
        <Results>
          {this.state.articles.map(article => (
          <div key={article._id}>
          <Article
          title={article.headline.main}
          author={article.byline.original}
          date={article.pub_date}
          url={article.web_url}
          >
          </Article>
          <Savebtn
          title={article.headline.main}
          author={article.byline.original}
          date={article.pub_date}
          url={article.web_url}
          onClick={(event) => this.saveArticle(event)}
          ></Savebtn>
          </div>
          ))}
        </Results>
      ) : (
        <div>
        <h2>Results</h2>
        <p>No results to display, please search a topic.</p>
        </div>
      )}
      </Col>
    </Row>
  </Container>
    )
  }
};

export default Home;
