
import { Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              EthioStartup Connect
            </h3>
            <p className="text-gray-600">
              Building the future of Ethiopian entrepreneurship.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="/events" className="text-gray-600 hover:text-primary">
                  Events
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-600 hover:text-primary">
                  Resources
                </a>
              </li>
              <li>
                <a href="/jobs" className="text-gray-600 hover:text-primary">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} EthioStartup Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
