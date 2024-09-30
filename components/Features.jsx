export default function Features() {
    const features = [
      { title: "Role Assignment", description: "Easily assign roles to individuals in any task." },
      { title: "Progress Tracking", description: "Monitor task progress in real-time for all team members." },
      { title: "Team Collaboration", description: "Ensure effective collaboration with dynamic team structures." },
    ];
  
    return (
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  