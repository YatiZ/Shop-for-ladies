function FooterPage() {
  return (
    <div className="mt-auto bg-yellow-200 py-6 text-center border-t-red-600 border">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <h1 className="text-lg font-semibold">Fashion Style</h1>
          <p className="mt-2 text-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quis expedita quo fugiat quasi illum temporibus vel placeat magni
            quaerat! Voluptatum incidunt voluptas velit porro iste aliquid
            voluptatibus nemo doloribus.
          </p>
        </div>
        <div className="lg:col-span-1">
          <h1 className="text-lg font-semibold">Office Location</h1>
          <p className="mt-2 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ab ut
            magnam! Facere, consequatur id molestias quis dignissimos voluptate
            incidunt magnam alias ducimus, nobis dolorem soluta voluptatum ipsa
            ab aspernatur?
          </p>
        </div>
        <div className="lg:col-span-1">
          <h1 className="text-lg font-semibold">More Social Media</h1>
          <p className="text-sm">Facebook</p>
          <p className="text-sm">Ingstram</p>
          <p className="text-sm">Twitter</p>
        </div>
      </div>
    </div>
  );
}
export default FooterPage;
