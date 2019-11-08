import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div>
        <a
          className="App-link"
          href={`${process.env.REACT_APP_WAKATIME_URL}/authorize?
            client_id=${process.env.REACT_APP_WAKATIME_CLIENT_ID}&
            client_secret=${process.env.REACT_APP_WAKATIME_APP_SECRET}&
            redirect_uri=${process.env.REACT_APP_WAKATIME_REDIRECT_URL}&
            response_type=code&scope=email,read_stats`}
        >
          Sign in with your WakaTime account!
        </a>
      </div>
    );
  }
}
