import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    console.log(query);
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent, ...query }
  }

  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
        <p>id = {this.props.id}</p>
      </div>
    )
  }
}