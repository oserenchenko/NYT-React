import React, { Component } from "react";
import { Input, Button, Box } from "../../components/Search";
import { Col, Row, Container } from "../../components/Grid";
import Results from "../../components/Results"
import Article from "../../components/Article"
import Savebtn from "../../components/Savebtn"
import Saved from "../../components/Saved"
import Deletebtn from "../../components/Deletebtn"
import API from "../../utils/APIS";
import "./Home.css";

class Home extends Component {
  state = {
    articles: [],
    saved: [],
    topic: "",
    startYr: "",
    endYr: ""
  }

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
      API.loadArticles()
      .then(res =>
        this.setState({ saved: res.data}))
      .catch(err => console.log(err))
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
    .then(res => this.loadArticles())
    .catch(err => console.log(err));
  };

  deleteArticle = (event) => {
    const articleId = event.target.id;
    API.deleteArticle(articleId)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  }

  render() {
    return (
  <div className="background">
  <Container>
    <Row>
      <Col size="md-12">
        <Box>
        <h2>Search</h2>
        <Input
        label="Topic (required)"
        placeholder="President Trump"
        name="topic"
        value={this.state.topic}
        onChange={this.handleInputChange}
        />
        <Input
        label="Start Year (required)"
        placeholder="YYYYMMDD"
        name="startYr"
        value={this.state.startYr}
        onChange={this.handleInputChange}
        />
        <Input
        label="End Year (required)"
        placeholder="YYYYMMDD"
        name="endYr"
        value={this.state.endYr}
        onChange={this.handleInputChange}
        />
        <Button onClick={this.handleFormSubmit}>
        </Button>
        </Box>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
      {this.state.articles.length ? (
        <Results>
          {this.state.articles.map(article => (
          <div key={article._id}>
          <Savebtn
          title={article.headline.main}
          author={article.byline.original}
          date={article.pub_date}
          url={article.web_url}
          onClick={(event) => this.saveArticle(event)}
          ></Savebtn>
          <Article
          title={article.headline.main}
          author={article.byline.original}
          date={article.pub_date}
          url={article.web_url}
          >
          </Article>
          <hr></hr>
          </div>
          ))}
        </Results>
      ) : (
        <div className="results">
        <h2>Results</h2>
        <p>No results to display, please search a topic.</p>
        </div>
      )}
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
        <Box>
          <h2>Saved</h2>
        {this.state.saved.map(saved => (
            <div key={saved._id}>
            <Deletebtn
              id={saved._id}
              onClick={(event) => this.deleteArticle(event)}
            >
            </Deletebtn>
            <Saved
              title={saved.title}
              author={saved.author}
              date={saved.date}
              url={saved.url}
            >
            </Saved>
            <hr></hr>
            </div>
            ))}
        </Box>
      </Col>
    </Row>
  </Container>
  </div>
    )
  }
};

export default Home;
