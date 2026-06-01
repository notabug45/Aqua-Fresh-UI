import { Droplets, Github, Instagram, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <Droplets className="w-8 h-8 text-primary" />
              <span className="font-serif text-2xl font-bold tracking-wide">
                AquaFresh
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm font-sans mb-8">
              Experience the pinnacle of hydration. Pure, naturally enriched water delivered fresh to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Water Quality Report</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AquaFresh Waters. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <span>BIS Certified</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
