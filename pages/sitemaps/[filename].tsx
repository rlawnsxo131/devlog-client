import * as React from 'react';
import { NextPageContext } from 'next';
import axios from 'axios';

class Sitemap extends React.Component {
  static async getInitialProps(ctx: NextPageContext) {
    const { req, res } = ctx;
    if (!req || !res) return;
    const { filename } = ctx.query;
    const { NEXT_PUBLIC_API_URI } = process.env;
    try {
      const { data } = await axios.get(
        `${NEXT_PUBLIC_API_URI}/sitemaps/${filename}`,
      );
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/xml');
      res.end(data);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default Sitemap;
