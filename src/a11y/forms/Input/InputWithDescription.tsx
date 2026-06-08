import { BaseInput } from "./BaseInput";

export function InputWithDescription() {
  return (
    <BaseInput
      id="username"
      label="Username"
      description="Must be between 4 and 20 characters."
    />
  );
}
