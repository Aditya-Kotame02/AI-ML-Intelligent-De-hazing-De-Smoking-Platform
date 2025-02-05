import { Brain, Users, Mail } from 'lucide-react';

export function About() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        <p className="mt-2 text-gray-600">Learn more about our AI-powered de-smoking and de-hazing platform.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Brain className="h-6 w-6 text-indigo-600 mr-2" />
              Our Technology
            </h2>
            <p className="mt-2 text-gray-600">
              Our platform utilizes state-of-the-art deep learning models including U-Net architecture and transformer-based processing
              to remove haze and smoke from images. The system employs advanced attention mechanisms to focus on affected areas while
              preserving image details and quality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Users className="h-6 w-6 text-indigo-600 mr-2" />
              Our Team
            </h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Sarah Chen",
                  role: "Lead AI Researcher",
                  bio: "Expert in computer vision and deep learning architectures."
                },
                {
                  name: "Michael Rodriguez",
                  role: "Senior Developer",
                  bio: "Specializes in high-performance image processing systems."
                },
                {
                  name: "Dr. James Wilson",
                  role: "Technical Director",
                  bio: "PhD in Computer Vision with 10+ years of industry experience."
                }
              ].map((member) => (
                <div key={member.name} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-indigo-600">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Mail className="h-6 w-6 text-indigo-600 mr-2" />
              Contact Us
            </h2>
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}