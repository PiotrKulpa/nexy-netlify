import React, { Component } from 'react';
import Head from "next/head";
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
      <Head>
      <title>RD Business - Responsive HTML5 Template</title>
      </Head>
        <Header />
        {children}
        <Footer />
        
      </>
    );
  }
}

export default Layout;