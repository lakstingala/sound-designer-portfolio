import { Field, FieldProps } from "formik";

import React from "react";
import { ImagePicker } from "./imagePicker";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  className: string;
}

export const MyImagePickerField = ({
  id,
  placeholder,
  name,
  className,
}: Props) => {
  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps<any>) => {
        return (
          <ImagePicker
                name={name}
                id={id}
                className={className}
                value={field.value}
                onChange={field.onChange}
                uploadLocation={"projects"}         
            />
        );
      }}
    </Field>
  );
};