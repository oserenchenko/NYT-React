import React, { Component } from "react";
import { Input, Button } from "../../components/Search";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/APIS";

class Home extends Component {
  state = {
    articles: [],
    topic: "",
    startYr: "",
    endYr: ""
  }

  loadArticles = () => {
    console.log("whats up");
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
  </Container>
    )
  }
};

export default Home;
