import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInputProps, TouchableOpacityProps } from "react-native";

export type IonIconName = keyof typeof Ionicons.glyphMap;

export interface InputFieldProps extends TextInputProps {
  label: string;
  iconName?: IonIconName;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  loaderVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  isLoading?: boolean;
  className?: string;
}
