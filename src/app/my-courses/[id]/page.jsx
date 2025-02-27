"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { jsPDF } from "jspdf";

export default function CourseDetail() {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [quizPassed, setQuizPassed] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const { id } = useParams();
    const router = useRouter();

    useEffect(() => {
        async function fetchCourseDetails() {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API delay
            const courses = {
                1: {
                    title: "React.js for Beginners",
                    lessons: [
                        { id: 1, title: "Introduction to React", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
                        { id: 2, title: "JSX and Components", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
                        { id: 3, title: "Props and State", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
                        { id: 4, title: "React Hooks", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
                    ],
                    quiz: {
                        question: "What does JSX stand for?",
                        options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Xtreme"],
                        correctAnswer: "JavaScript XML"
                    }
                },
                2: {
                    title: "Introduction to Cyber Security",
                    lessons: [
                        { id: 1, title: "Introduction to React", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
                        { id: 2, title: "JSX and Components", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
                        { id: 3, title: "Props and State", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
                        { id: 4, title: "React Hooks", completed: true, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
                    ],
                    quiz: {
                        question: "What does JSX stand for?",
                        options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Xtreme"],
                        correctAnswer: "JavaScript XML"
                    }
                }
            };
            setCourse(courses[id]);
            setCurrentLesson(courses[id]?.lessons[0]); // Set first lesson as default
            setLoading(false);
        }
        fetchCourseDetails();
    }, [id]);

    const markLessonComplete = (lessonId) => {
        setCourse((prev) => ({
            ...prev,
            lessons: prev.lessons.map(lesson =>
                lesson.id === lessonId ? { ...lesson, completed: true } : lesson
            )
        }));
    };

    const allLessonsCompleted = course?.lessons.every(lesson => lesson.completed);

    const handleQuizSubmit = (answer) => {
        if (answer === course.quiz.correctAnswer) {
            setQuizPassed(true);
        } else {
            alert("Wrong answer! Try again.");
        }
    };

    const generateCertificate = () => {
        const doc = new jsPDF({ orientation: "landscape" }); // Landscape mode
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        const logo = new Image();
        logo.src = "data:image/png;base64,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"; // Ensure the correct path

        logo.onload = () => {
            // Draw a blue border
            doc.setDrawColor(32, 1, 89);
            doc.setLineWidth(2);
            doc.rect(10, 10, pageWidth - 20, pageHeight - 20); // Draw border

            // Add Logo
            doc.addImage(logo, "PNG", pageWidth / 2 - 30, 15, 60, 20); // Centered logo

            // Certificate Title
            doc.setFont("helvetica", "bold");
            doc.setFontSize(28);
            doc.text("Certificate of Completion", pageWidth / 2, 70, { align: "center" });

            // Certificate Body
            doc.setFont("helvetica", "normal");
            doc.setFontSize(18);
            doc.text("This is to certify that", pageWidth / 2, 95, { align: "center" });

            doc.setFont("helvetica", "bold");
            doc.setFontSize(22);
            doc.text("John Doe", pageWidth / 2, 115, { align: "center" });

            doc.setFont("helvetica", "normal");
            doc.setFontSize(18);
            doc.text("has successfully completed the course", pageWidth / 2, 135, { align: "center" });

            doc.setFont("helvetica", "bold");
            doc.setFontSize(22);
            doc.text("React.js for Beginners", pageWidth / 2, 155, { align: "center" });

            // Instructor & Date
            doc.setFont("helvetica", "normal");
            doc.setFontSize(16);
            doc.text("Instructor: Jane Smith", 40, pageHeight - 40);
            doc.text("Issued on: " + new Date().toLocaleDateString(), pageWidth - 100, pageHeight - 40);

            // Save the Certificate
            doc.save("certificate.pdf");
        };

        logo.onerror = () => {
            console.error("Error loading logo image.");
        };
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            {loading ? (
                <p>Loading course details...</p>
            ) : (
                <>
                    <h1 className="text-2xl font-bold mb-4">{course.title}</h1>

                    {/* Video Player */}
                    {currentLesson && (
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">{currentLesson.title}</h2>
                            <video controls className="w-full h-64 rounded-lg shadow-lg">
                                <source src={currentLesson.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}

                    {/* Lesson Playlist */}
                    <ul className="border rounded-lg p-4 bg-gray-100">
                        {course.lessons.map(lesson => (
                            <li key={lesson.id}
                                className={`p-3 border-b flex justify-between items-center cursor-pointer ${lesson.id === currentLesson?.id ? "bg-indigo-100" : ""
                                    }`}
                                onClick={() => setCurrentLesson(lesson)}
                            >
                                <span>{lesson.title}</span>
                                {lesson.completed ? (
                                    <span className="text-green-600 font-semibold">Completed</span>
                                ) : (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            markLessonComplete(lesson.id);
                                        }}
                                        className="px-3 py-1 bg-green-500 text-white rounded-lg"
                                    >
                                        Mark as Completed
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Show Quiz if all lessons are completed */}
                    {allLessonsCompleted && !quizPassed && !showQuiz && (
                        <button
                            onClick={() => setShowQuiz(true)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            Take Final Quiz
                        </button>
                    )}

                    {/* Quiz Section */}
                    {showQuiz && !quizPassed && (
                        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
                            <h2 className="text-lg font-semibold">{course.quiz.question}</h2>
                            {course.quiz.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuizSubmit(option)}
                                    className="block mt-2 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}

                    <button
                        onClick={() => router.push("/my-courses")}
                        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg mr-3"
                    >
                        Back to My Courses
                    </button>

                    {/* Certificate Button */}
                    {allLessonsCompleted && quizPassed && (
                        <button
                            onClick={generateCertificate}
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
                        >
                            Download Certificate
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
