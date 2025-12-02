import { signinSchema, SignInSchemaType } from "@/lib/schemas/auth.schema";
// import { useRouter } from "expo-router";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

const useSigninForm = () => {
  //   const router = useRouter();

  const formik = useFormik<SignInSchemaType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(signinSchema),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { setStatus }) => {
      //   try {
      //     setStatus("");
      //     const response = await login(values);
      //     if (response) {
      //       router.replace("/(dashboard)/(tabs)");
      //       formik.resetForm();
      //     }
      //   } catch (err: any) {
      //     setStatus(err.message);
      //   }
    },
  });

  const isValid =
    (formik.isValid && Object.values(formik.errors).length === 0) || formik.isSubmitting;

  return {
    formik,
    isValid,
  };
};

export default useSigninForm;
