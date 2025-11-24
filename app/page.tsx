import { Droplet, Heart, Leaf, Waves, Shield, Thermometer } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-background">
        <div className="absolute inset-0 opacity-10">
          <img src="/rippling-water-surface-texture.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Droplet className="w-20 h-20 mx-auto mb-8 text-accent" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground text-balance">Water is Life</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed text-balance">
            Understanding the vital role of water in sustaining life, health, and our planet's future
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Water Matters</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Water is the foundation of all life on Earth, essential for every living organism
            </p>
          </div>

          {/* Key Facts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Human Body</h3>
              <p className="text-muted-foreground leading-relaxed">
                The human body is approximately 60% water. Every cell, tissue, and organ requires water to function
                properly.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Thermometer className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Temperature Regulation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Water helps regulate body temperature through perspiration and respiration, keeping us healthy and
                comfortable.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Protection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Water cushions joints, protects the spinal cord, and helps remove waste through urination and
                perspiration.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Leaf className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Agriculture</h3>
              <p className="text-muted-foreground leading-relaxed">
                70% of freshwater is used for agriculture. Water is essential for growing the food that sustains
                humanity.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Waves className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Ecosystems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Oceans, rivers, and lakes support countless species and maintain the delicate balance of our planet's
                ecosystems.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Droplet className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Hydration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proper hydration improves concentration, physical performance, and overall health. Drink at least 8
                glasses daily.
              </p>
            </Card>
          </div>

          {/* Critical Statistics */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Critical Statistics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">71%</div>
                <p className="text-lg text-primary-foreground/90">of Earth's surface is covered by water</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">2.2B</div>
                <p className="text-lg text-primary-foreground/90">people lack access to safe drinking water</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">97%</div>
                <p className="text-lg text-primary-foreground/90">of water is saltwater in oceans</p>
              </div>
            </div>
          </div>

          {/* Water Conservation */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Water Conservation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With climate change and growing populations, water conservation has never been more important. Every drop
              counts in ensuring future generations have access to this precious resource.
            </p>

            <div className="bg-secondary rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">How You Can Help</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <Droplet className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <span className="leading-relaxed">
                    Fix leaks promptly - a dripping faucet wastes up to 3,000 gallons per year
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Droplet className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <span className="leading-relaxed">
                    Take shorter showers and turn off the tap while brushing teeth
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Droplet className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <span className="leading-relaxed">Use water-efficient appliances and fixtures in your home</span>
                </li>
                <li className="flex items-start gap-3">
                  <Droplet className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <span className="leading-relaxed">Collect rainwater for gardening and outdoor use</span>
                </li>
                <li className="flex items-start gap-3">
                  <Droplet className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <span className="leading-relaxed">
                    Support organizations working to provide clean water access globally
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <Waves className="w-12 h-12 mx-auto mb-4 text-accent" />
          <p className="text-muted-foreground text-lg">Together, we can ensure a sustainable water future for all</p>
        </div>
      </footer>
    </div>
  )
}
