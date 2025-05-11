export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 text-sm py-6" role="contentinfo">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {year} YourCompany. All rights reserved.</p>
        <nav aria-label="Footer links" className="flex gap-4">
          <a href="#" className="hover:underline focus:outline focus:outline-2 focus:outline-blue-500">Privacy</a>
          <a href="#" className="hover:underline focus:outline focus:outline-2 focus:outline-blue-500">Terms</a>
          <a href="#" className="hover:underline focus:outline focus:outline-2 focus:outline-blue-500">Support</a>
        </nav>
      </div>
    </footer>
  );
}