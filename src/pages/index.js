import React, { Component } from "react"
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Navbar from '../components/UI/Navbar';

import City from '../../static/assets/city.png';

// fetch blog data from markdown files
// setup blog section

class Home extends Component {
    render() {
        const { edges } = this.props.data.allMarkdownRemark

        return (
            <Layout>
                { console.log(edges) }
                
                <div className="home__hero">
                  <Navbar />
                  <div className="home__hero__text__wrapper">
                  <div className="home__hero__text">
                    <h1>Building A New Future</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, in? Fuga iure repellat necessitatibus eos et dignissimos vero aliquid perspiciatis?
                    </p>
                    <button className="btn">Read More</button>
                  </div>
                  
                  <img src={City} alt="city" className="home__hero__img"/>
                  </div>
                </div>
                { edges.map(edge => <div key={edge.node.id}>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                    </div>
                )}
            </Layout>
        )
    }
}

export const pageQuery = graphql`
query blogPosts {
    allMarkdownRemark {
      edges {
        node {
          id,
          frontmatter {
            title,
            thumbnail,
            path
          }
        }
      }
    } 
  }
`;


export default Home;
