import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        review: "This platform transformed my career! The courses are top-notch, and the instructors are very knowledgeable.",
        rating: 5,
        image: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid"
    },
    {
        id: 2,
        name: "David Smith",
        review: "The learning experience here is incredible. The content is well-structured and easy to follow.",
        rating: 4.8,
        image: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid"
    },
    {
        id: 3,
        name: "Emily Williams",
        review: "I love the hands-on projects! They made it easy to apply what I learned in real-world scenarios.",
        rating: 4.9,
        image: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid"
    },
];

export default function Testimonials() {
    return (
        <section className="w-full py-16 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center">
            <h2 className="text-3xl font-bold">What Our <span className="text-yellow-300">Students Say</span></h2>
            <p className="mt-4 max-w-xl mx-auto text-gray-200">
                Hear from students who have benefited from our courses and transformed their careers.
            </p>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </section>
    );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }) {
    return (
        <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center transition transform hover:scale-105">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-4 border-indigo-500" />
            <h3 className="text-lg font-semibold mt-3">{testimonial.name}</h3>
            <p className="mt-2 text-gray-600 text-center">"{testimonial.review}"</p>
            <div className="flex items-center mt-3">
                {Array.from({ length: Math.round(testimonial.rating) }).map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                ))}
            </div>
        </div>
    );
}
