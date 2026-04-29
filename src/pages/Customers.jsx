import PageHeader from "../components/PageHeader";
import { customers } from "../data/data";

export default function Customers() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <PageHeader />

      {/* Header */}
      <h1 className="text-2xl font-bold">Ini halaman Customers</h1>
      <p className="text-gray-500 mb-6">
        Manage your customer data
      </p>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-4 border-b font-semibold text-gray-700">
          Customer List
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Loyalty</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{c.id}</td>
                <td className="p-4">{c.name}</td>
                <td className="p-4 text-gray-500">{c.email}</td>
                <td className="p-4">{c.phone}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        c.loyalty === "Gold"
                          ? "bg-yellow-100 text-yellow-600"
                          : c.loyalty === "Silver"
                          ? "bg-gray-200 text-gray-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                  >
                    {c.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}