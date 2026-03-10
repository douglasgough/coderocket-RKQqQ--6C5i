import { Button } from './ui/button';
export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80)'
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome Home
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          A community of faith, hope, and love at Miller's Landing Community Church
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="cursor-pointer px-8 py-6 text-lg">
            Join Us Sunday
          </Button>
          <Button size="lg" variant="outline" className="cursor-pointer px-8 py-6 text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
            Watch Online
          </Button>
        </div>
      </div>
    </section>
  );
}