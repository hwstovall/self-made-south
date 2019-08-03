import * as React from 'react';

import { useWindowScroll } from 'react-use';
import * as classNames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import { LogoQuery } from '../graphql-types';
import GatsbyImage from 'gatsby-image';

interface HeaderProps {
  readonly siteTitle: string;
}


const Header = ({ siteTitle }: HeaderProps) => {
  const { y } = useWindowScroll();

  return (
    <StaticQuery
      query={graphql`
      query Logo {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}

      render={(data: LogoQuery) => (
        <header className={classNames({ scrolled: y > 50 })}>
          <div className="header-inner">
            <div className="logo-container">
              <a className="logo" href="/">
                <GatsbyImage fluid={data.file.childImageSharp.fluid} />
              </a>
            </div>
            <div className="nav-container">
              <nav>
                <ul className="nav-items">
                  <li className="nav-item"><a href="/">Home</a></li>
                  <li className="nav-item"><a href="#">About</a></li>
                  <li className="nav-item"><a href="#">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      )}
    />
  );
};

export default Header;
