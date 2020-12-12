// app file (specific to next) initializes page 

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return <Component {...pageProps} />
}

export default MyApp;


// import App from 'next/app';
// import React from 'react';
// import { Component } from 'react';
// import {ThemeProvider} from 'styled-components';

// const theme = {
//   colors: {
//     primary: '#0070f3'
//   }
// }

// export default class MyApp extends App {
//   render() {
//       return(
//         <ThemeProvider theme={theme}>
//           <Component {...pageProps} />
//         </ThemeProvider>
//       )
//   }
// }