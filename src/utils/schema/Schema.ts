import * as yup from "yup";

export const skillSchema = yup.object({
  category: yup.string().required("Category is required."),
  title: yup.string().required("Title is required."),
  iconFamily: yup.string().required("Icon family is required"),
  iconName: yup.string().required("Icon name is required"),
});

export const experienceSchema = yup.object({
  title: yup.string().required("Title is required."),
  type: yup.string().required("Type is Required"),
  start: yup.string().required("Start date is required."),
  end: yup.string().required("End date is required."),
  description: yup.string().required("Description is required."),
});

export const portfolioSchema = yup.object({
  title: yup.string().required("Title is required."),
  projectTitle: yup.string().required("Project title is required"),
  thumbnail: yup.mixed().nullable(),
  masonryImage: yup.mixed().nullable(),
  images: yup
    .array()
    .of(
      yup.object({
        id: yup.string(),
        imageSrc: yup.mixed().required("Image source is required."),
      })
    )
    .nullable(),
  language: yup
    .array()
    .min(1, "At least one language is required.")
    .required("Language is required."),
  link: yup
    .string()
    .url("Link must be a valid URL.")
    .required("Link is required."),
  description: yup
    .array()
    .of(
      yup.object({
        id: yup.string(),
        text: yup.string().required("Description is required."),
      })
    )
    .min(1),
});
