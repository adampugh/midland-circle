import React, { Component } from "react"
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

// fetch blog data from markdown files


class Home extends Component {
    render() {
        const { edges } = this.props.data.allMarkdownRemark

        return (
            <Layout>
                { console.log(edges) }
                <h1>hello</h1>
                <button className="btn btn-primary">click this</button>
                { edges.map(edge => <div>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                    </div>)}
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
