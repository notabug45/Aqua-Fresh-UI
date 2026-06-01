import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Classic Aqua",
    size: "500ml",
    price: "$2.99",
    description: "Perfect for on-the-go hydration.",
    featured: false
  },
  {
    name: "Premium Glass",
    size: "750ml",
    price: "$4.99",
    description: "Elegant glass bottle for dining.",
    featured: true
  },
  {
    name: "Sports Cap",
    size: "1L",
    price: "$3.49",
    description: "Designed for active lifestyles.",
    featured: false
  }
];

export function ProductShowcase() {
  return (
    <section className="py-32 relative bg-secondary/5" id="products">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">The Collection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect companion for your hydration journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl p-8 glass flex flex-col items-center text-center transition-all duration-300 ${
                product.featured ? 'border-primary/50 shadow-[0_0_30px_hsl(var(--primary)/0.1)] scale-105 z-10' : 'border-border'
              }`}
            >
              {product.featured && (
                <span className="absolute -top-4 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Bestseller
                </span>
              )}
              
              <div className="w-24 h-48 border border-white/20 glass rounded-[40px] mb-8 relative overflow-hidden group">
                <div className="absolute bottom-0 w-full h-[70%] bg-primary/20 group-hover:h-[75%] transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-2">{product.name}</h3>
              <div className="text-sm text-primary font-medium mb-4">{product.size} • {product.price}</div>
              <p className="text-muted-foreground text-sm mb-8 flex-grow">{product.description}</p>
              
              <Button className={`w-full rounded-full ${product.featured ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'}`}>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
