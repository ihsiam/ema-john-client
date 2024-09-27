export default function Refunds() {
  const orders = [
    {
      _id: "4665dgdgw467w88",
      orderItems: [{ name: "11 pro max" }],
      totalPrice: 120,
      orderStatus: "Refund",
    },
  ];

  return (
    <div className="w-full pl-2 md:pl-5">
      <div className="rounded-lg shadow md:shadow-sm">
        <div className="flex uppercase justify-between bg-gray-200 px-2 md:px-5 py-3 md:py-4 w-full">
          <h1 className="w-4/6 md:w-5/12">Order Id</h1>
          <h1 className="md:w-3/12 hidden md:flex">Status</h1>
          <h1 className="md:w-2/12 hidden md:flex">Qty</h1>
          <h1 className="w-2/6 md:w-2/12">Total</h1>
        </div>
        <div className="flex flex-col">
          {orders.map((order) => (
            <div
              key={order._id}
              className="flex justify-between bg-white border-b-2 px-2 md:px-5 py-3 md:py-4 cursor-pointer"
            >
              <h1 className=" w-4/6 md:w-5/12 overflow-hidden">{order._id}</h1>
              <h1 className="md:w-3/12 hidden md:flex">{order.orderStatus}</h1>
              <h1 className="md:w-2/12 hidden md:flex">
                {order.orderItems.length}
              </h1>
              <h1 className="w-2/6 md:w-2/12 hover:font-bold">
                ${order.totalPrice}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
