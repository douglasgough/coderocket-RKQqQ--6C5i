import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
export default function ServiceTimes() {
  return (
    <section id="service-times" className="py-20 bg-[#F7FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Service Times
          </h2>
          <p className="text-lg text-gray-600">
            Join us for worship every Sunday
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Sunday Morning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900 mb-2">9:00 AM</p>
              <p className="text-gray-600 mb-4">Traditional Service</p>
              <p className="text-sm text-gray-500">
                A classic worship experience with hymns and liturgy
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Sunday Morning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900 mb-2">11:00 AM</p>
              <p className="text-gray-600 mb-4">Contemporary Service</p>
              <p className="text-sm text-gray-500">
                Modern worship with live band and multimedia
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Children's programs available during all services
          </p>
        </div>
      </div>
    </section>
  );
}