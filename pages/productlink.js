// components/ProductLink.js

import Link from 'next/link';

const ProductLink = ({ product }) => {
  return (
    <Link href={`/product/${encodeURIComponent(product)}`}>
      <a>{product}</a>
    </Link>
  );
};

export default ProductLink;
