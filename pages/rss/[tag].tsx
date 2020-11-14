import * as React from 'react';
import { NextPageContext } from 'next';
import axios from 'axios';

class RssTag extends React.Component {
  static async getInitialProps(ctx: NextPageContext) {
    const { req, res } = ctx;
    if (!req || !res) return;
    const { NEXT_PUBLIC_API_URI } = process.env;
    const { tag } = ctx.query;
    try {
      const { data } = await axios.get(`${NEXT_PUBLIC_API_URI}/atom/${tag}`);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/xml');
      res.end(data);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default RssTag;
