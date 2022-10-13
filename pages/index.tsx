import { Layout } from 'components/Layout';
import { LayoutVariantsEnum } from 'components/Layout/Layout.styles';
import { ProductsCategories } from 'components/ProductsCategories';
import { ProductsList } from 'components/ProductsList';
import {
  useEffect, useState,
} from 'react';

export default function IndexPage() {
  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

  const [
    width,
    setWidth,
  ] = useState(0);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (width > 768 && !menuOpen) {
      setMenuOpen(true);
    }
  }, [width]);

  return (
    <Layout variant={LayoutVariantsEnum.homepage}>
      {menuOpen && <ProductsCategories />}
      <ProductsList handleOpenMenu={() => setMenuOpen(prev => !prev)} />
    </Layout>
  );
}
