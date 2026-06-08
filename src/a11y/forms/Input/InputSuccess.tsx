import { BaseInput } from "./BaseInput";

export function InputSuccess() {
  return (
    <BaseInput
      id="account"
      label="Account ID"
      endAdornment={<span aria-hidden="true">✓</span>}
    />
  );
}
