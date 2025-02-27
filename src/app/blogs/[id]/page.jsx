"use client"
import { useParams } from "next/navigation";

const blogsData = [
    { id: 1, title: "The Future of E-Learning", category: "Education", image: "https://img.freepik.com/free-photo/positive-young-woman-freelancer-watching-video-blog-netbook-having-coffee-comfortable-home-beautiful-young-business-woman-working-laptopfreelancer-connecting-internet_657921-1693.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid", date: "Feb 10, 2025" },
    { id: 2, title: "Top 10 Productivity Hacks", category: "Productivity", image: "https://img.freepik.com/free-photo/positive-young-woman-freelancer-watching-video-blog-netbook-having-coffee-comfortable-home-beautiful-young-business-woman-working-laptopfreelancer-connecting-internet_657921-1693.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid", date: "Jan 28, 2025" },
    { id: 3, title: "How to Choose the Right Course", category: "Education", image: "https://img.freepik.com/free-photo/positive-young-woman-freelancer-watching-video-blog-netbook-having-coffee-comfortable-home-beautiful-young-business-woman-working-laptopfreelancer-connecting-internet_657921-1693.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid", date: "Dec 15, 2024" },
    { id: 4, title: "Best Home Office Setup", category: "Lifestyle", image: "https://img.freepik.com/free-photo/positive-young-woman-freelancer-watching-video-blog-netbook-having-coffee-comfortable-home-beautiful-young-business-woman-working-laptopfreelancer-connecting-internet_657921-1693.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid", date: "Nov 20, 2024" },
    { id: 5, title: "Coding for Beginners", category: "Technology", image: "https://img.freepik.com/free-photo/positive-young-woman-freelancer-watching-video-blog-netbook-having-coffee-comfortable-home-beautiful-young-business-woman-working-laptopfreelancer-connecting-internet_657921-1693.jpg?uid=R83131539&ga=GA1.1.1999183966.1731675750&semt=ais_hybrid", date: "Oct 5, 2024" },
];
export default function BlogDetails() {
    const { id } = useParams()

    const blog = blogsData.find((item) => item.id.toString() === id);

    if (!blog) return <p className="text-center py-10">Blog not found.</p>;

    return (
        <section className="container mx-auto px-6 py-12">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
            <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
            <p className="text-gray-500 mt-2">Published on {blog.date}</p>
            <article className="mt-6 text-gray-700 leading-loose">{blog.content}</article>
        </section>
    );
}
