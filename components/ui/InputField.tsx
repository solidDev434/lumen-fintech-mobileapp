import { InputFieldProps } from "@/types/type";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

const InputField = ({
  labelStyle,
  label,
  iconName,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-200 focus:border-primary-500 ${containerStyle}`}
          >
            {iconName && <Ionicons name={iconName} size={24} className={`ml-4 ${iconStyle}`} />}
            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default InputField;
