import * as Yup from "yup";

const createCategory = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
});

export const categoryValidate = {
  createCategory,
};
