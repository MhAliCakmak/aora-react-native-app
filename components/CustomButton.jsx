import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  TextStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary min-h-[62px] justify-center items-center rounded-lg ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
        onPress={handlePress}
    >
      <Text className={`text-primary font-psemibold text-lg ${TextStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
