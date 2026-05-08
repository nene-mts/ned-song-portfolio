/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-yellow-200">
      <Navbar />
      <Home />
      
      <footer className="py-12 px-6 border-t border-black/5 text-center">
        <p className="text-sm text-black/40 font-medium">
          © {new Date().getFullYear()} Ned Song. Crafted with strategy & playfulness.
        </p>
      </footer>
    </div>
  );
}
