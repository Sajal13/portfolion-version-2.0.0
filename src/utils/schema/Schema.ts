import * as yup from 'yup'

export const skillSchema = yup.object({
  category: yup.string().required('Category is required.'),
  title: yup.string().required('Title is required.'),
  iconFamily: yup.string().required("Icon family is required"),
  iconName: yup.string().required('Icon name is required'),
})