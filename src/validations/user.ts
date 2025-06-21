import * as Yup from "yup";

const register = Yup.object().shape({
  username: Yup.string().min(3, "Too short!").max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const login = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const updatePassword = Yup.object().shape({
  password: Yup.string().required("Vui lòng nhập mật khẩu hiện tại."),
  newPassword: Yup.string()
    .required("Vui lòng nhập mật khẩu mới.")
    .min(8, "Mật khẩu mới phải có ít nhất 8 ký tự.")
    .notOneOf(
      [Yup.ref("password")],
      "Mật khẩu mới phải khác mật khẩu hiện tại."
    ),
  confirmNewPassword: Yup.string()
    .required("Vui lòng xác nhận mật khẩu mới.")
    .oneOf([Yup.ref("newPassword")], "Xác nhận mật khẩu không khớp."),
});

export const userValidate = {
  register,
  login,
  updatePassword,
};
