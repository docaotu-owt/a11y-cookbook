export function CheckboxGroup() {
  return (
    <fieldset className="space-y-2">
      <legend className="font-medium">Preferred Contact Methods</legend>

      <div>
        <input id="email" type="checkbox" />
        <label htmlFor="email" className="ml-2">
          Email
        </label>
      </div>

      <div>
        <input id="phone" type="checkbox" />
        <label htmlFor="phone" className="ml-2">
          Phone
        </label>
      </div>

      <div>
        <input id="sms" type="checkbox" />
        <label htmlFor="sms" className="ml-2">
          SMS
        </label>
      </div>
    </fieldset>
  );
}
