export function RadioGroup() {
  return (
    <fieldset>
      <legend>Preferred Contact Method</legend>

      <div>
        <input id="contact-email" type="radio" name="contact" />

        <label htmlFor="contact-email">Email</label>
      </div>

      <div>
        <input id="contact-phone" type="radio" name="contact" />

        <label htmlFor="contact-phone">Phone</label>
      </div>

      <div>
        <input id="contact-sms" type="radio" name="contact" />

        <label htmlFor="contact-sms">SMS</label>
      </div>
    </fieldset>
  );
}
