import PageHeader from "../components/PageHeader";
import { orders } from "../data/data";
export default function Orders(){
    return(
        <div>
            <PageHeader/>
            <h1>Ini halaman Orders</h1>
               
      <div className="bg-white rounded-2xl shadow p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3 font-medium">{o.id}</td>
                <td className="p-3">{o.customerName}</td>

                {/* Badge Status */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        o.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : o.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                  >
                    {o.status}
                  </span>
                </td>

                <td className="p-3 font-semibold">
                  Rp{o.totalPrice.toLocaleString()}
                </td>

                <td className="p-3 text-gray-500">{o.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}