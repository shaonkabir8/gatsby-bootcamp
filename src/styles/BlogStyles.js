import styled from "styled-components"

const BlogStyles = styled.div`
  .post {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .post li a {
    text-decoration: none;
    background: #f4f4f4;
    color: #000;
    transition: 0.2s;
    display: block;
    padding: 1rem;
  }
  .post li a:hover {
    background: #e4e4e4;
  }
  .post h2 {
    margin-bottom: 0;
  }
  .post p {
    font-size: 0.8rem;
    font-style: italic;
    color: #777;
  }
`
export default BlogStyles;