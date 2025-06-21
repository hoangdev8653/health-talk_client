import * as Yup from "yup";

const reviewArticle = Yup.object().shape({
  content: Yup.string().min(3).required("Bạn cần thêm nội dung"),
});

export const articleValidate = {
  reviewArticle,
};
