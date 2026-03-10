import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#F7FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to hear from you
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Address</p>
                  <p className="text-gray-600">123 Harbor Way<br />Miller's Landing, ML 12345</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <p className="text-gray-600">info@millerslandingchurch.com</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Office Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} />
                </div>
                <Button type="submit" className="w-full cursor-pointer">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}