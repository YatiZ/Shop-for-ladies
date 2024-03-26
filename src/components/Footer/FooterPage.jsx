function FooterPage() {
  return (
    <footer className=" mt-14 bg-yellow-200 py-6 text-center border-t-red-600 border">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <h1 className="text-lg font-semibold underline underline-offset-4">Fashion Style</h1>
          <p className="mt-2 text-sm text-left pl-28">
            <li>Classic style</li>
            <li>Street wear style</li>
            <li>Business casual style</li>
            <li>Vintage style</li>
            <li>Athleisure style</li>
            <li>Minimalist style</li>
            <li>Bohemian style</li>
            <li>Grunge style</li>
            <li>Preppy style</li>
            <li>Punk style</li>
          </p>
        </div>
        <div className="lg:col-span-1 flex-col items-center">
          <h1 className="text-lg font-semibold underline underline-offset-2">Office Location</h1>
          <p className="mt-2 text-xs text-red-500 font-bold">600 The Embarcadero, San Francisco, CA 94107, United States</p>
          <div className="flex justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201807.51023125357!2d-122.67682531328121!3d37.784359900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580770df6174d%3A0x8be3ee157d693ab2!2sDelancey%20Street%20Restaurant!5e0!3m2!1sen!2smm!4v1698056414989!5m2!1sen!2smm" className=' h-64 border-none' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=" mt-2"></iframe>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h1 className="text-lg font-semibold underline underline-offset-4">More Social Media</h1>
          <p className="text-sm">Facebook</p>
          <p className="text-sm">Ingstram</p>
          <p className="text-sm">Twitter</p>
        </div>
      </div>
    </footer>
  );
}
export default FooterPage;
