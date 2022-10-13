import { Button } from '@mui/material';

import { Wrapper } from './ProductsList.styles';

type ProductsListProps = {
  handleOpenMenu: () => void;
}

export function ProductsList({ handleOpenMenu }: ProductsListProps) {
  return (
    <Wrapper>
      <Button onClick={handleOpenMenu}>Categories</Button>
    </Wrapper>
  );
}
