export default function IndianLine() {
   return (
    <section id="indian-line" className="relative px-6 py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-100/20">
          <div className="grid md:grid-cols-2 gap-0">
            
            <div className="relative h-64 md:h-auto bg-gradient-to-br from-slate-800 to-slate-900">
              <img 
                src="india.png" 
                alt="Indian nutrition and food" 
                className="w-full  h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 bg-clip-text text-transparent">
                Indian Line
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-100 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-slate-300">
                    Meals inspired by Indian dietary traditions
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-100 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-slate-300">
                    Focus on balance, digestion, and long-term health
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-100 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-slate-300">
                    Rooted in Ayurvedic principles
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}