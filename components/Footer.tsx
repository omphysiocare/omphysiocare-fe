export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-800 text-center text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© 2026 OM PHYSIO CARE & FITNESS CENTER. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-slate-400">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}