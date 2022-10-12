import { Layout } from 'components/Layout';
import { LayoutVariantsEnum } from 'components/Layout/Layout.styles';
import { ProductsCategories } from 'components/ProductsCategories';

export default function IndexPage() {
  return (
    <Layout variant={LayoutVariantsEnum.homepage}>
      <ProductsCategories />
    </Layout>
  );
}
