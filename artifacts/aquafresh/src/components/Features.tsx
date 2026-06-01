import { motion } from "framer-motion";
import { CheckCircle2, Droplets, Leaf, Shield, Truck, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "RO + UV + Ozonization",
    description: "Advanced multi-stage purification process ensuring 99.99% pure drinking water."
  },
  {
    icon: Zap,
    title: "Naturally Enriched",
    description: "Infused with essential minerals like Calcium and Magnesium for optimal health."
  },
  {
    icon: Truck,
    title: "Doorstep Delivery",
    description: "Scheduled, reliable delivery directly to your home or office on your timeline."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Packaging",
    description: "100% recyclable materials. We care about the planet as much as your health."
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "Every batch is rigorously tested and certified by leading health authorities."
  },
  {
    icon: Droplets,
    title: "Crystal Clear Taste",
    description: "A smooth, refreshing taste that elevates your daily hydration experience."
  }
];

export function Features() {
  return (
    <section className="py-32 relative bg-background" id="process">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Why Choose <span className="italic text-primary">AquaFresh</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-sans"
          >
            We don't just filter water; we perfect it. Our rigorous process ensures every drop is a masterpiece of hydration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card hover:bg-secondary/10 transition-colors duration-500 border-none group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
