import * as React from 'react';
import { NextPageContext } from 'next';
import axios from 'axios';

class Rss extends React.Component {
  static async getInitialProps(ctx: NextPageContext) {
    const { res } = ctx;
    if (!ctx || !res) return;
    const { NEXT_PUBLIC_API_URI } = process.env;
    try {
      const { data } = await axios.get(`${NEXT_PUBLIC_API_URI}/atom`);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/xml');
      res.end(data);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default Rss;
