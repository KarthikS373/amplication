import React, { createRef, useRef, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { TextInput } from "./TextInput";

export default {
  title: "TextInput",
  component: TextInput,
} as Meta;

const ALPHABET_ONLY = /^[A-z]*$/;

export const Default = () => {
  return <TextInput />;
};

export const Controlled = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <p>This input only allows alphabet characters</p>
      <TextInput
        value={value}
        onChange={(e) => {
          //@ts-ignore
          const { value } = e.target;
          if (value.match(ALPHABET_ONLY)) {
            setValue(value);
          }
        }}
      />
    </div>
  );
};

export const WithLabel = () => {
  return <TextInput label="Example" />;
};

export const WithoutLabel = () => {
  return <TextInput label="Example" hideLabel />;
};

export const HasError = () => {
  return <TextInput hasError helpText="help text" />;
};

export const WithTrailingButton = () => {
  return <TextInput trailingButton={{ title: "Example" }} />;
};

export const WithTrailingButtonAndIcon = () => {
  return <TextInput trailingButton={{ icon: "info", title: "Example" }} />;
};

export const InputRefWithFocus = () => {
  return <TextInput inputRef={(input) => input && input.focus()} />;
};

export const TextArea = () => {
  return <TextInput textarea />;
};
