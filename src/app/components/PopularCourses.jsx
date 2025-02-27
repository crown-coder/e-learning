import { FaStar } from "react-icons/fa";

const courses = [
    {
        id: 1,
        title: "Full-Stack Web Development",
        instructor: "John Doe",
        rating: 4.8,
        image: "https://cdn-front.freepik.com/images/ai/image-generator/gallery/pikaso-man-in-a-red-robe-standing-on-a-cliff.webp"
    },
    {
        id: 2,
        title: "Data Science & Machine Learning",
        instructor: "Jane Smith",
        rating: 4.7,
        image: "https://cdn-front.freepik.com/images/ai/image-generator/gallery/pikaso-man-in-a-red-robe-standing-on-a-cliff.webp"
    },
    {
        id: 3,
        title: "UI/UX Design Fundamentals",
        instructor: "Michael Johnson",
        rating: 4.6,
        image: "https://cdn-front.freepik.com/images/ai/image-generator/gallery/pikaso-man-in-a-red-robe-standing-on-a-cliff.webp"
    },
];

export default function PopularCourses() {
    return (
        <section className="w-full py-16 px-6 text-center">
            <h2 className="text-3xl font-bold">Explore Our <span className="text-indigo-700">Popular Courses</span></h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                Learn from the best and boost your career with high-quality online courses.
            </p>

            {/* Course Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            {/* CTA Button */}
            <button className="mt-10 bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-800 transition-all">
                View All Courses
            </button>
        </section>
    );
}

// Course Card Component
function CourseCard({ course }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src={course.image} alt={course.title} className="w-full h-52 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-600 mt-2">Instructor: {course.instructor}</p>
                <div className="flex items-center justify-center mt-2">
                    <FaStar className="text-yellow-500" />
                    <span className="ml-2 font-semibold">{course.rating}</span>
                </div>
            </div>
        </div>
    );
}
