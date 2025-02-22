import React, { useState } from 'react';
import {
  Menu,
  X,
  Star,
  ChevronRight,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Rocket,
  Users,
  Zap,
  Send,
  Clock,
  MessageSquare,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of business solutions including strategic planning, digital transformation, and team development services tailored to your specific needs."
    },
    {
      question: "How can I get started?",
      answer: "Getting started is easy! Simply fill out our contact form below or call us directly. Our team will schedule a free consultation to discuss your needs and goals."
    },
    {
      question: "What makes your company different?",
      answer: "Our unique approach combines innovative technology with proven business strategies, delivered by a team of experienced professionals who are passionate about your success."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes! We believe every business is unique, so we customize our solutions to match your specific requirements and goals."
    }
  ];

  const blogPosts = [
    {
      title: "5 Strategies for Digital Success in 2025",
      excerpt: "Learn the latest digital trends and how to implement them in your business strategy.",
      date: "March 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "Building High-Performance Teams",
      excerpt: "Discover proven methods for developing and maintaining successful teams in your organization.",
      date: "March 12, 2025",
      readTime: "4 min read"
    },
    {
      title: "The Future of Business Technology",
      excerpt: "Explore upcoming technologies that will shape the future of business operations.",
      date: "March 10, 2025",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CompanyName</span>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Testimonials</a>
              <a href="#blog" className="text-gray-600 hover:text-indigo-600 transition-colors">Blog</a>
              <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#blog"
                className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Transform Your Business with Our Solutions
              </h1>
              <p className="text-xl text-white/90 mb-8">
                We help businesses grow and succeed in the digital age with innovative solutions
                and expert guidance.
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors transform hover:scale-105 duration-300">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2 animate-float">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-8 w-8" />,
                title: 'Business Strategy',
                description: 'Develop winning strategies for sustainable growth',
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: 'Digital Solutions',
                description: 'Innovative digital tools for modern businesses',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Team Building',
                description: 'Build and nurture high-performing teams',
                gradient: 'from-indigo-500 to-purple-500'
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
              >
                <div className={`text-white p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-indigo-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart',
                content: 'Working with this team has been transformative for our business.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Founder, GrowthLabs',
                content: 'Exceptional service and outstanding results. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Emily Davis',
                role: 'Marketing Director',
                content: 'Their expertise and dedication have exceeded our expectations.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Latest Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 gradient-animate">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses that have already taken the next step
            towards growth and innovation.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-xl font-bold">CompanyName</span>
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2" />
                  info@company.com
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-2" />
                  +92 3554302895
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  123 Business
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CompanyName. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;