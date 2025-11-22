import heroImage from "@/assets/hero-illustration.jpg";

export const Hero = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            BLUEBOOK
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 font-normal">
              Virtual Learning
            </span>
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white/95">
              Philippine Christian University
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
              The power of Online Teaching and Learning committed to excellence.
            </p>
            <p className="text-lg text-white/80">
              This eLearning portal is powered by NEO.
            </p>
          </div>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <img 
            src={heroImage} 
            alt="Virtual Learning Illustration" 
            className="w-full h-auto drop-shadow-2xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};
