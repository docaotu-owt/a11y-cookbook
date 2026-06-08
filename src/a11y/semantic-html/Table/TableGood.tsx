export function TableGood() {
  return (
    <table className="w-full border-collapse border">
      <caption className="mb-2 text-left font-medium">Monthly Revenue</caption>

      <thead>
        <tr>
          <th scope="col" className="border p-2 text-left">
            Month
          </th>

          <th scope="col" className="border p-2 text-left">
            Revenue
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border p-2">January</td>
          <td className="border p-2">$10,000</td>
        </tr>

        <tr>
          <td className="border p-2">February</td>
          <td className="border p-2">$12,000</td>
        </tr>
      </tbody>
    </table>
  );
}
