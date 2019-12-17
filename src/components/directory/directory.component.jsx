import React, { Component } from 'react'

import MenuItem from '../menu-item/menu-item.component'
import sections from './sections.data';
import './directory.styles.scss'

export default class Directory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sections
    }
  }

  render() {
    return (
      <div className="directory">
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem
              data-test="component-menu-item"
              key={id}
              {...otherSectionProps}
            />
          ))
        }
      </div>
    )
  }
}
