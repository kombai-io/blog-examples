import { Text, TouchableOpacity } from 'react-native';

export default function CartButton({ availability, isInCart, onClick }) {
  return (
    <TouchableOpacity
      onPress={() => availability && onClick()}
      disabled={!availability}
      className={`w-full py-2 rounded-lg transition-all duration-200 text-sm font-medium 
        ${!availability ? "bg-gray-200 text-gray-500" 
        : isInCart ? "bg-gray-50 text-gray-700 border border-gray-200" 
        : "bg-blue-600 text-white"}
      `}
      activeOpacity={availability ? 0.7 : 1} // Reduces opacity when pressed
    >
      <Text className="text-center">
        {!availability ? "Out of Stock" : isInCart ? "✓ Added to Cart" : "Add to Cart"}
      </Text>
    </TouchableOpacity>
  );
}
