function AdminDashboard() {
  return (
    <div className="flex h-screen w-full flex-col gap-2 bg-green-300 p-10">
      <div className="min-h-[100px] w-full bg-yellow-300">
        <h2>OVERVIEW </h2>
      </div>
      <div className="min-h-[100px] w-full bg-yellow-300">
        <h2>user Management</h2>
      </div>
      <div className="min-h-[100px] w-full bg-yellow-300 p-2">
        <h2 className="text-xl font-bold">Product Management</h2>
        <button>add a product</button>
      </div>
      <div className="min-h-[100px] w-full bg-yellow-300">
        <h2>category Management</h2>
      </div>
      <div className="min-h-[100px] w-full bg-yellow-300">
        <h2>analytics</h2>
      </div>
      <div className="min-h-[100px] w-full bg-yellow-300">
        <h2>logs</h2>
      </div>
    </div>
  );
}

export default AdminDashboard;
