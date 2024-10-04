import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Laptop, Users, Award, Star } from "lucide-react"

export default function DigitalLearningInitiative() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
<header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-200">
<Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="ml-2 text-lg font-semibold">LearnDigital</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-indigo-50  flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-indigo-800">
                  Empower Your Future with Digital Learning
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Access world-class education from anywhere. Learn at your own pace and unlock your potential.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
                <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-indigo-800">Our Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { icon: Laptop, title: "Online Learning", description: "Access courses anytime, anywhere. Learn at your own pace with our flexible online platform." },
                { icon: Users, title: "Expert Instructors", description: "Learn from industry professionals and subject matter experts in various fields." },
                { icon: Award, title: "Certifications", description: "Earn recognized certifications upon completion of courses to boost your career." }
              ].map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 mb-2 text-indigo-600" />
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50  flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-indigo-800">Popular Courses</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Web Development",
                "Data Science",
                "Digital Marketing",
                "UX/UI Design",
                "Machine Learning",
                "Business Analytics",
              ].map((course, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{course}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Learn the fundamentals and advanced concepts of {course.toLowerCase()}.</p>
                    <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">Enroll Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-indigo-800">What Our Students Say</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { name: "Alex Johnson", text: "The courses are well-structured and the instructors are top-notch. I've learned so much!" },
                { name: "Sarah Lee", text: "Flexible learning options allowed me to balance my studies with work. Highly recommended!" },
                { name: "Michael Chen", text: "The certifications I earned helped me land my dream job. Thank you, LearnDigital!" },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">"{testimonial.text}"</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center bg-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-800">Start Your Learning Journey Today</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Join thousands of learners and transform your career with our cutting-edge digital learning platform.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input placeholder="Enter your email" type="email" className="border-indigo-200 focus:border-indigo-600" />
                  <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-gray-200">
      <p className="text-xs text-gray-500">
          © 2024 LearnDigital. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-indigo-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-indigo-600" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
