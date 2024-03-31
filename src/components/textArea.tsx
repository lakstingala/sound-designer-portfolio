import { Field, FieldProps } from "formik";

import React from "react";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  className: string;
}

export const MyTextareaField = ({
  id,
  placeholder,
  name,
  className,
}: Props) => {
  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps<any>) => {
        return (
          <textarea
            placeholder={placeholder}
            name={name}
            id={id}
            className={className}
            value={field.value}
            onChange={field.onChange}
          />
        );
      }}
    </Field>
  );
};