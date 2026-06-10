const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
  },
  {
    id: 3,
    name: "Bob Lee",
    email: "bob@example.com",
    role: "Viewer",
  },
];

export function DataTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border">
        <caption className="p-2 text-left font-medium">User accounts</caption>

        <thead>
          <tr>
            <th scope="col" className="border p-2 text-left">
              Name
            </th>

            <th scope="col" className="border p-2 text-left">
              Email
            </th>

            <th scope="col" className="border p-2 text-left">
              Role
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row" className="border p-2 text-left">
                {user.name}
              </th>

              <td className="border p-2">{user.email}</td>

              <td className="border p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
