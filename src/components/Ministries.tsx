import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
export default function Ministries() {
  const ministries = [
    {
      title: 'Youth Group',
      description: 'Middle and high school students gather for fellowship, fun, and faith-building activities.',
      icon: '👥'
    },
    {
      title: 'Kids Ministry',
      description: 'Engaging programs for children from nursery through elementary, designed to teach biblical truths.',
      icon: '🎨'
    },
    {
      title: 'Small Groups',
      description: 'Connect with others in intimate settings for Bible study, prayer, and community.',
      icon: '💬'
    },
    {
      title: 'Community Outreach',
      description: 'Serve our neighbors through food drives, volunteer projects, and compassionate care.',
      icon: '❤️'
    }
  ];
  return (
    <section id="ministries" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Ministries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover opportunities to grow in faith and serve our community
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="text-4xl mb-4">{ministry.icon}</div>
                <CardTitle className="text-xl">{ministry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  {ministry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}