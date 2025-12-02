import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import useSigninForm from "@/hooks/forms/useSigninForm";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const SignIn = () => {
  const { formik, isValid } = useSigninForm();

  const onSigninPress = () => {};

  return (
    <KeyboardAwareScrollView bottomOffset={62} className="flex-1 bg-white">
      <InputField
        label="Email"
        placeholder="Enter your email"
        iconName="mail"
        value={formik.values.email}
        onChangeText={(value) => formik.setFieldValue("email", value)}
      />

      <InputField
        label="Password"
        placeholder="*************"
        iconName="lock-closed"
        secureTextEntry
        value={formik.values.password}
        onChangeText={(value) => formik.setFieldValue("password", value)}
      />

      <Button
        title="Sign in"
        isLoading={formik.isSubmitting}
        disabled={isValid}
        onPress={onSigninPress}
        // className="mt-6"
      />
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
