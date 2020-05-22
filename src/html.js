import React from 'react';

export default class HTML extends React.Component {

  componentDidMount = () => {
    getViewportSingleUnit()
    window.addEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
  }

  getViewportSingleUnit = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="stylesheet" href="https://use.typekit.net/ynv0aud.css"></link>
          <link rel="apple-touch-icon" sizes="57x57" href="./static/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="./static/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="./static/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="./static/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="./static/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="./static/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="./static/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="./static/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="./static/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="./static/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="./static/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./static/favicon-16x16.png" />
          <link rel="manifest" href="./static/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="./static/ms-icon-144x144.png"></meta>
          <meta name="theme-color" content="#ffffff"></meta>
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}