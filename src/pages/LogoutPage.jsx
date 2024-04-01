function LogoutPage() {
  sessionStorage.removeItem("user-id");
  return (
    <div className="container mx-auto">
      <div className="columns-1">
        <div className="text-3xl font bold">You are now logged out</div>
        <div>
          <a
            href="/"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;
