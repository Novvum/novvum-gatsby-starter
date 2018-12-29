import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { styled, theme } from '../styled'

const AppBar = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  z-index: ${p => p.theme.zIndex.appBar};
  flex-shrink: 0;
  position: fixed;
  padding: 1rem;
  top: 0;
  left: auto;
  right: 0;
  background: ${p => p.theme.colors.white};
  transition: all 150ms ease 0s;
  justify-content: space-between;
  box-shadow: ${p => p.theme.shadows[4]};
`

const HeaderWrapper = styled.div`
  height: 1rem;
  width: 100%;
  background: transparent;
`

const Toolbar = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  @media (min-width: 576px) {
    maxwidth: 540px;
  }
  @media (min-width: 768px) {
    maxwidth: 720px;
  }
  @media (min-width: 992px) {
    maxwidth: 960px;
  }
  @media (min-width: 1200px) {
    maxwidth: 1140px;
  }
`

const Brand = styled(Link)`
  text-decoration: none !important;
  align-items: center;
  display: flex;
  color: inherit;
  margin-right: ${p => p.theme.typography.rhythm(1 / 2)};
  span {
    margin-left: 8px;
  }
`

const BrandIcon = styled.img`
  height: 1.55rem;
  object-fit: contain;
  margin: 0;
`

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;
  width: 30%;
`

const NavLink = styled(Link)`
  color: ${p => p.theme.colors.tint};
  &:hover {
    color: ${p => p.theme.colors.link};
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            links {
              link {
                title
                path
              }
            }
          }
        }
      }
    `}
    render={data => {
      const links = data.site.siteMetadata.links
      const title = data.site.siteMetadata.title
      return (
        <HeaderWrapper>
          <AppBar>
            <Toolbar>
              <Brand to="/" aria-label="Gatsby, Back to homepage">
                <BrandIcon
                  src={'/assets/gatsby-icon.png'}
                  alt="Gatsby Logo"
                  aria-hidden="true"
                />
                <span>{title}</span>
              </Brand>
              <NavContainer>
                {links.map(l => (
                  <NavLink
                    to={l.link.path}
                    activeStyle={{
                      color: theme.colors.link,
                      borderBottomColor: theme.colors.link,
                      textDecoration: 'underline',
                    }}
                  >
                    {l.link.title}
                  </NavLink>
                ))}
              </NavContainer>
            </Toolbar>
          </AppBar>
        </HeaderWrapper>
      )
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
