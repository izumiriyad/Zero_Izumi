import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-cyan-400 tracking-tight">Izumi</h1>
          <p className="text-xl mt-3 text-gray-300 font-medium">
            Web Developer | CyberSecurity Expert | Ethical Hacker | Pentester | Information Security | Networking
          </p>
        </header>

        <section className="mb-14 text-center">
          <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Professional Services for Website, Application, Day-to-Day Security Problems and any kind of tech challenges — I've got your back. I specialize in security hardening, digital investigation, information gathering for businesses or personal needs, and live 1-on-1 comprehensive tech classes.
          </p>
          <ul className="mt-6 text-md text-gray-300 space-y-1">
            <li>🔐 Kali Linux</li>
            <li>🛡️ Website Pentesting</li>
            <li>👨‍💻 Ethical Hacking</li>
            <li>🐞 Bug Bounty</li>
            <li>🔍 Cyber Security</li>
            <li>📡 Networking & Infrastructure</li>
            <li>📘 Deep Security Knowledge & More...</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
            <ul className="list-disc pl-5 space-y-1">
              <li>HTML, CSS, JavaScript, Node.js</li>
              <li>Ethical Hacking, API Testing</li>
              <li>Kali Linux (5+ years of real use)</li>
            </ul>
            <ul className="list-disc pl-5 space-y-1">
              <li>Graphic Design with Canva</li>
              <li>Remote Tech Support</li>
              <li>Security Troubleshooting</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b pb-2">Services Offered</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li>🚀 Bug fixing and performance optimization for websites</li>
            <li>🎨 Creative landing page design using HTML, CSS, JavaScript</li>
            <li>🖼️ Stunning visual content with Canva</li>
            <li>🧠 Deep Tech Support (remotely)</li>
            <li>🔎 Security Testing for personal or business projects</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b pb-2">Sample Work</h2>
          <ul className="pl-5 space-y-2 text-blue-400">
            <li><a href="#" className="hover:underline">🌐 Landing Page Sample</a></li>
            <li><a href="#" className="hover:underline">🎨 Canva Poster Design</a></li>
            <li><a href="#" className="hover:underline">🐞 JS Bug Fix Demonstration</a></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b pb-2">Get in Touch</h2>
          <div className="text-lg text-gray-200 space-y-2">
            <p>📧 Email: <span className="text-blue-300">amiizumi007@gmail.com</span></p>
            <p>📱 WhatsApp: <span className="text-blue-300">+8801700891234</span></p>
            <p>🕒 Availability: 24/7</p>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Made with ❤️ by Izumi | Stay Safe, Stay Secure
        </footer>
      </div>
    </div>
  );
}
