import {
  List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import React from 'react';

import { Wrapper } from './ProductsCategories.styles';

export function ProductsCategories() {
  return (
    <Wrapper>
      <List>
        {[
          'All mail',
          'Trash',
          'Spam',
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

export default ProductsCategories;
