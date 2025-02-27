import { FaChalkboardTeacher, FaCertificate, FaClock, FaLaptopCode } from "react-icons/fa";

export default function Features() {
    return (
        <section className="w-full py-16 px-6 text-center">
            <h2 className="text-3xl font-bold">Why Choose <span className="text-indigo-700">Our Platform?</span></h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                Gain new skills, learn from the best, and advance your career with our expert-led online courses.
            </p>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                <FeatureCard
                    icon={<FaChalkboardTeacher className="text-indigo-700 text-4xl" />}
                    title="Learn from Experts"
                    description="Our instructors are top professionals in their fields."
                />
                <FeatureCard
                    icon={<FaCertificate className="text-indigo-700 text-4xl" />}
                    title="Get Certified"
                    description="Receive certificates upon course completion."
                />
                <FeatureCard
                    icon={<FaClock className="text-indigo-700 text-4xl" />}
                    title="Flexible Learning"
                    description="Learn at your own pace, anytime, anywhere."
                />
                <FeatureCard
                    icon={<FaLaptopCode className="text-indigo-700 text-4xl" />}
                    title="Hands-on Practice"
                    description="Work on real-world projects to enhance your skills."
                />
            </div>
        </section>
    );
}

// Reusable Feature Card Component
function FeatureCard({ icon, title, description }) {
    return (
        <div className="p-6 shadow-lg rounded-lg flex flex-col items-center bg-white hover:shadow-xl transition">
            {icon}
            <h3 className="text-xl font-semibold mt-4">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );
}
