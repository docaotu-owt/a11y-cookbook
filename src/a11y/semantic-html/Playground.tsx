export function PlaygroundSemanticHtml() {
  return (
    <main className="border p-4">
      {/* Heading */}
      <header>
        <h1>Sematic HTML Playground</h1>

        <p>
          This page demonstrates common HTML elements with proper accessibility
          support.
        </p>
      </header>

      {/* Navigation */}
      <nav aria-label="Main Navigation">
        <h2>Navigation</h2>

        <ul>
          <li>
            <a href="#buttons">Jump to Buttons</a>
          </li>

          <li>
            <a href="#table">Jump to Table</a>
          </li>

          <li>
            <a href="#contact">Jump to Contact Form</a>
          </li>
        </ul>
      </nav>

      {/* Buttons */}
      <section id="buttons" aria-labelledby="buttons-heading">
        <h2 id="buttons-heading">Buttons</h2>

        <div className="flex gap-4">
          <button type="button">Save Changes</button>

          <button type="button">Delete Account</button>
        </div>
      </section>

      {/* Links */}
      <section aria-labelledby="links-heading">
        <h2 id="links-heading">Links</h2>

        <p>
          Visit the{" "}
          <a href="https://www.w3.org/WAI/">WAI Accessibility Guidelines</a>.
        </p>
      </section>

      {/* Image */}
      <section aria-labelledby="image-heading">
        <h2 id="image-heading">Image</h2>

        <figure>
          <img
            src="https://placehold.co/600x300"
            alt="Line chart showing sales growth from January to June"
          />

          <figcaption>Monthly sales report.</figcaption>
        </figure>
      </section>

      {/* List */}
      <section aria-labelledby="list-heading">
        <h2 id="list-heading">Supported Browsers</h2>

        <ul>
          <li>Chrome</li>
          <li>Firefox</li>
          <li>Safari</li>
        </ul>
      </section>

      {/* Table */}
      <section id="table" aria-labelledby="table-heading">
        <h2 id="table-heading">Revenue Table</h2>

        <table>
          <caption>Monthly Revenue</caption>

          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Revenue</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>January</td>
              <td>$10,000</td>
            </tr>

            <tr>
              <td>February</td>
              <td>$12,000</td>
            </tr>

            <tr>
              <td>March</td>
              <td>$15,000</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
