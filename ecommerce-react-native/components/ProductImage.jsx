import { View, Image } from 'react-native';
import NavigationButton from './NavigationButton';
import WishlistButton from './WishlistButton';

export default function ProductImage({ image, name, onPrevious, onNext, isWishlisted, onWishlistToggle }) {
  return (
    <View className="relative h-48 bg-gray-100">
      <Image source={{ uri: image }} alt={name} className="w-full h-full object-cover" />
      <NavigationButton direction="left" onClick={onPrevious} />
      <NavigationButton direction="right" onClick={onNext} />
      <WishlistButton isWishlisted={isWishlisted} onClick={onWishlistToggle} />
    </View>
  );
}
