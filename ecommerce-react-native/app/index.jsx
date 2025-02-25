import { useState } from 'react';
import { View } from 'react-native';
import ProductImage from '../components/ProductImage';
import ProductDetails from '../components/ProductDetails';

export default function Index() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [cartItems, setCartItems] = useState(new Set());
  const [wishlistItems, setWishlistItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: 'Minimalist Watch',
      collection: 'Classic Collection',
      price: 199.99,
      shipping: 'Free Shipping',
      rating: 4.2,
      reviews: 4200,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=365&h=192&fit=crop',
      color: 'Silver',
      brand: 'Timeless',
      availability: true,
    },
    {
      id: 2,
      name: 'Wireless Earbuds',
      collection: 'Pro Audio Series',
      price: 149.99,
      shipping: 'Free Shipping',
      rating: 4.7,
      reviews: 3800,
      image:
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=365&h=192&fit=crop',
      color: 'White',
      brand: 'SoundCore',
      availability: true,
    },
    {
      id: 3,
      name: 'Leather Backpack',
      collection: 'Urban Travel',
      price: 89.99,
      shipping: '$4.99 Shipping',
      rating: 4.4,
      reviews: 2100,
      image:
        'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=365&h=192&fit=crop',
      color: 'Brown',
      brand: 'WanderLust',
      availability: true,
    },
    {
      id: 4,
      name: 'Smart Coffee Maker',
      collection: 'Home Smart',
      price: 179.99,
      shipping: 'Free Shipping',
      rating: 4.1,
      reviews: 1500,
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=365&h=192&fit=crop',
      color: 'Black',
      brand: 'BrewTech',
      availability: false,
    },
    {
      id: 5,
      name: 'Fitness Tracker',
      collection: 'Health Tech',
      price: 129.99,
      shipping: 'Free Shipping',
      rating: 4.5,
      reviews: 5600,
      image:
        'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=365&h=192&fit=crop',
      color: 'Black',
      brand: 'FitLife',
      availability: true,
    },
    {
      id: 6,
      name: 'Mechanical Keyboard',
      collection: 'Gaming Pro',
      price: 159.99,
      shipping: 'Free Shipping',
      rating: 4.8,
      reviews: 2800,
      image:
        'https://images.unsplash.com/photo-1595225476474-87563907a212?w=365&h=192&fit=crop',
      color: 'RGB',
      brand: 'TypeMaster',
      availability: true,
    },
  ];

  const currentProduct = products[currentProductIndex];
  const isCurrentProductInCart = cartItems.has(currentProduct.id);
  const isCurrentProductWishlisted = wishlistItems.has(currentProduct.id);

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const previousProduct = () => {
    setCurrentProductIndex(
      (prev) => (prev - 1 + products.length) % products.length
    );
  };

  const toggleCart = (productId) => {
    setCartItems((prev) => {
      const newCart = new Set(prev);
      if (newCart.has(productId)) {
        newCart.delete(productId);
      } else {
        newCart.add(productId);
      }
      return newCart;
    });
  };

  const toggleWishlist = () => {
    setWishlistItems((prev) => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(currentProduct.id)) {
        newWishlist.delete(currentProduct.id);
      } else {
        newWishlist.add(currentProduct.id);
      }
      return newWishlist;
    });
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <View className="w-[365px] h-[400px] bg-white rounded-xl shadow-lg overflow-hidden">
        <ProductImage
          image={currentProduct.image}
          name={currentProduct.name}
          onPrevious={previousProduct}
          onNext={nextProduct}
          isWishlisted={isCurrentProductWishlisted}
          onWishlistToggle={toggleWishlist}
        />
        <ProductDetails
          product={currentProduct}
          isInCart={isCurrentProductInCart}
          onCartToggle={() => toggleCart(currentProduct.id)}
        />
      </View>
    </View>
  );
}
