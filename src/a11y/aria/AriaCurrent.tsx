export function AriaCurrent() {
  return (
    <nav aria-label="Documentation">
      <ul className="space-y-2">
        <li>
          <a href="/button">Button</a>
        </li>

        <li>
          <a href="/input" aria-current="page">
            Input
          </a>
        </li>

        <li>
          <a href="/checkbox">Checkbox</a>
        </li>
      </ul>
    </nav>
  );
}
