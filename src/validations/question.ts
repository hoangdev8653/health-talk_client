import * as Yup from "yup";

const createQuestion = Yup.object().shape({
  title: Yup.string()
    .min(10, "Tiêu đề phải có ít nhất 10 ký tự")
    .max(100, "Tiêu đề không được vượt quá 100 ký tự")
    .required("Bạn cần thêm tiêu đề"),
  content: Yup.string()
    .min(20, "Nội dung phải có ít nhất 20 ký tự")
    .max(1000, "Nội dung không được vượt quá 1000 ký tự")
    .required("Bạn cần thêm nội dung"),
  // tags: Yup.array()
  //   .min(1, "Bạn cần chọn ít nhất một thẻ")
  //   .required("Bạn cần chọn thẻ"),
});

export const questionValidate = { createQuestion };
