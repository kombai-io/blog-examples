import { Text, TouchableOpacity } from 'react-native';

export default function NavigationButton({ direction, onClick }) {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={`absolute ${direction === "left" ? "left-2" : "right-2"} top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md`}
      activeOpacity={0.7}
    >
      <Text className="text-lg">{direction === "left" ? "←" : "→"}</Text>
    </TouchableOpacity>
  );
}
