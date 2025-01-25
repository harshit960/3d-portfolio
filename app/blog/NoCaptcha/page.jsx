import Footer from '@/components/Footer'
import React from 'react'

function NoCaptcha() {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 bg-white p-6 sm:p-12 lg:p-20 font-sans">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 leading-tight text-gray-900">🔒 Enhancing Web Security with Advanced LLM Bot Prevention Techniques</h1>
            <p className="text-lg text-gray-600">Exploring innovative strategies to protect web services from LLM bot attacks while maintaining user experience.</p>
          </header>

          <article className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">❓ The Problem</h2>
              <p className="leading-relaxed">
                LLM bots can perform various malicious activities, such as scraping data, automating interactions, and bypassing standard authentication mechanisms. These activities not only degrade user experience but can also compromise sensitive data and intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">💡 My Solution</h2>
              <p className="leading-relaxed">
                To tackle these challenges, I developed a bot prevention system that balances security and user-friendliness. The architecture of the system is designed to provide layered verification while maintaining a seamless user experience.
              </p>

              <h3 className="text-xl font-medium mt-6 text-gray-800">🏗️ System Architecture</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Target-Frontend:</strong> Entry point for all user interactions.</li>
                <li><strong>User Agent Scan:</strong> Scans user agents to detect malicious requests.</li>
                <li><strong>Backend-Main:</strong> Core processing unit for routing and analysis.</li>
                <li><strong>Pub/Sub Queue:</strong> Ensures efficient handling of high traffic.</li>
                <li><strong>IP Scan:</strong> Analyzes IP patterns for suspicious activity.</li>
                <li><strong>Database:</strong> Token-based approach to avoid storing sensitive data.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-6 text-gray-800">🔧 Flexible Restrictions</h3>
              <p className="leading-relaxed">
                Unlike traditional systems that block LLM bots entirely, my system allows fine-grained control. This ensures no negative impact on SEO or overall website performance.
              </p>

              <h3 className="text-xl font-medium mt-6 text-gray-800">🤹 Dynamic Challenges</h3>
              <p className="leading-relaxed">
                The system dynamically generates challenges based on the type of request and the user’s behavior, ensuring no single solution can be reused or exploited by bots.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-6 text-gray-800">🧠 Behavioral Analysis</h3>
              <p className="leading-relaxed">
                Leveraging libraries like rrweb in React, I captured and analyzed real-time user interactions to distinguish bots from humans accurately.
              </p>

              <h3 className="text-xl font-medium mt-6 text-gray-800">🎯 User-Centric Design</h3>
              <p className="leading-relaxed">
                The project emphasizes accessibility, mobile responsiveness, and minimal friction, ensuring genuine users can pass verification quickly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">🌟 Impact</h2>
              <p className="leading-relaxed">
                By implementing this advanced LLM bot prevention system, the risk of bot attacks is significantly reduced, protecting user data and enhancing the overall security of web services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">🚀 Future Plans</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Location-Based Challenges</li>
                <li>Enhanced IP Algorithms</li>
                <li>AI-Driven Analysis</li>
              </ul>
            </section>

            <footer className="text-center mt-12">
              <p className="text-lg text-gray-700">💬 I'd love to hear your thoughts or discuss potential collaborations. Feel free to reach out!</p>
            </footer>
          </article>
        </div>
      </div>
      <Footer />
    </>)
}

export default NoCaptcha