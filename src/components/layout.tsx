import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

import Header from "./header"
import { SiteTitleQueryQuery } from '../graphql-types';

import "../styles/layout.scss"

interface Props {
  readonly data: SiteTitleQueryQuery;
  readonly children: React.ReactNode;
}


function LayoutInner({ data, children }: Props) {
  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div className="container">
        <main>{children}</main>
      </div>

      <footer>
        <div className="container footer-inner">
          <div>
            Made in Atlanta
          </div>
          <div>
            © {new Date().getFullYear()}, Built with  <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={(data) => <LayoutInner data={data}>{children}</LayoutInner>}
  />
);


export default Layout;
