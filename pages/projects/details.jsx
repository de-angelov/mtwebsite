import React from 'react';

// const Details = (props) => (
//   <>
//     <Navbar />
//     <h1>{title}</h1>
//   </>
// );

class Details extends React.Component {
  static getInitialProps({ query: { title } }) {
    return { title };
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>
          info
        </p>
      </div>
);
  }
}
export default Details;
