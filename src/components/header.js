import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { styled } from '../styled'

const AppBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  z-index: ${p => p.theme.zIndex.appBar};
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  background: ${p => p.theme.colors.primary.main};
  color: ${p => p.theme.colors.primary.text};
  box-shadow: ${p => p.theme.shadows[4]};
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
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <AppBar>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
