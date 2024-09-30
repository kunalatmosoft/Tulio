import Link from "next/link";

export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-12">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Manage Tasks and Roles Efficiently with <span className="text-teal-600">Tulio</span>
            </h1>
            <p className="text-lg text-gray-600">
              Assign roles, track progress, and ensure everyone contributes. 
              Tulio makes group task management seamless and transparent.
            </p>
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition duration-300">
              <Link href ="/Login">Get Started</Link>
            </button>
          </div>
  
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2">
            <img src="https://logonutility.com/static/media/content-1-1.3574ba4631aa854c029c.png" alt="Task Management" className="w-full h-auto rounded-lg " />
          </div>
        </div>
      </section>
    );
  }
  