import { View, Text } from 'react-native';
import { formatPrice } from '../utils';
import RatingStars from './RatingStars';
import CartButton from './CartButton';

export default function ProductDetails({ product, isInCart, onCartToggle }) {
  return (
    <View className="p-4">
      {/* Product Name & Price Section */}
      <View className="flex-row justify-between items-start mb-2">
        <View>
          <Text className="text-lg font-semibold text-gray-800">
            {product.name}
          </Text>
          <Text className="text-sm text-gray-500">{product.collection}</Text>
        </View>
        <View className="text-right">
          <Text className="text-lg font-bold text-gray-800">
            {formatPrice(product.price)}
          </Text>
          <Text className="text-xs text-green-600">{product.shipping}</Text>
        </View>
      </View>

      {/* Rating Component */}
      <RatingStars rating={product.rating} reviews={product.reviews} />

      {/* Brand & Color Info */}
      <View className="flex-row justify-between text-xs text-gray-500 mb-4">
        <Text>Brand: {product.brand}</Text>
        <Text>Color: {product.color}</Text>
      </View>

      {/* Cart Button */}
      <CartButton
        availability={product.availability}
        isInCart={isInCart}
        onClick={onCartToggle}
      />
    </View>
  );
}
