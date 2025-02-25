import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const WishlistButton = ({ isWishlisted, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md"
    >
      <Svg
        className={`w-5 h-5 ${isWishlisted ? 'text-red-500' : 'text-gray-400'}`}
        fill={isWishlisted ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default WishlistButton;
