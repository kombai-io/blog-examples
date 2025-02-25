import { View, Text } from 'react-native';
import { generateStars, formatReviews } from '../utils';

export default function RatingStars({ rating, reviews }) {
  return (
    <View className="flex-row items-center mb-4">
      <View className="flex-row text-yellow-400">
        {generateStars(rating)
          .split('')
          .map((star, index) => (
            <Text key={index}>{star}</Text>
          ))}
      </View>
      <Text className="text-xs text-gray-500 ml-2">
        ({formatReviews(reviews)} reviews)
      </Text>
    </View>
  );
}
