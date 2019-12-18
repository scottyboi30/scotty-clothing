import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

export const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    data-test="menu-item"
    data-cy={`${linkUrl}`}
  >
    <div
      className="menu-item__image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="menu-item__content">
      <h1 className="menu-item__title">{title}</h1>
      <span className="menu-item__subtitle">
        SHOP NOW
      </span>
    </div>
  </div>
);

export default withRouter(MenuItem);
