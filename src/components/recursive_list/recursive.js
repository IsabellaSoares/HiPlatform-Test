import React, { PureComponent } from 'react';
import Item from '../item/item.js';
import List from '@material-ui/core/List';


class RecursiveList extends PureComponent {
  render() {
    const data = this.props.data;

    return (
      <List>
        {data.map((data, idx) => {
          return (
            <Item data={data} key={idx} />
          );
        })}
      </List>
    )
  }
}

export default RecursiveList;