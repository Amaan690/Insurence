import Link from "next/link";
import { Shield, Globe, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-brand-orange-400" />
              <span className="text-2xl font-bold tracking-tight text-white">OnSure<span className="text-brand-orange-400">Karo</span></span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              AI-powered insurance comparison for the modern Indian. Simple, transparent, and built for you.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-brand-orange-400 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-orange-400 transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-orange-400 transition-colors"><Phone className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-orange-400 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Insurance Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">Health Insurance</Link></li>
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">Term Life Insurance</Link></li>
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">Car Insurance</Link></li>
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">Bike Insurance</Link></li>
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">Travel Insurance</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">Partners</Link></li>
              <li><Link href="/support" className="hover:text-brand-orange-400 transition-colors">Contact & Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-orange-400 transition-colors">IRDAI Guidelines</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} OnSureKaro Insurance Brokers Pvt. Ltd. All rights reserved.</p>
          <p>Registration No. 1234567 | IRDAI License No. 987654</p>
        </div>
      </div>
    </footer>
  );
}
