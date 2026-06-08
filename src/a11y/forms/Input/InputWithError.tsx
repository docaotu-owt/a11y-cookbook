import { BaseInput } from "./BaseInput";

export function InputWithError() {
  return (
    <BaseInput
      id="email"
      label="Email"
      error="Please enter a valid email address."
    />
  );
}
