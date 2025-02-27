import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[calc(100dvh-95px)] flex flex-col md:flex-row items-center text-center md:text-left justify-center gap-10 px-6 lg:px-20 overflow-hidden">
            {/* Floating Gradient Decorations */}
            <div className="absolute w-[220px] h-[220px] bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full blur-3xl animate-float1 -z-40"></div>
            <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-pink-300 to-red-400 rounded-full blur-3xl animate-float2 -z-40"></div>
            <div className="absolute w-[180px] h-[180px] bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full blur-3xl animate-float3 -z-40"></div>

            {/* Hero Content */}
            <div className="max-w-2xl space-y-6">
                <h1 className="font-extrabold text-4xl md:text-5xl leading-tight relative z-10">
                    Learn, Shop & <span className="text-indigo-700">Succeed</span>
                </h1>
                <p className="leading-relaxed text-lg text-gray-600 relative z-10">
                    Access top-rated courses and educational products. Learn from experts and purchase essential learning materials to enhance your skills.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-4 relative z-10">
                    <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-800 transition-all">
                        Start Learning
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition-all">
                        Browse Store
                    </button>
                </div>
            </div>

            {/* Optimized Image */}
            <div className="relative max-w-lg">
                <Image
                    src="/images/illustration.webp"
                    alt="E-learning & E-commerce"
                    width={500}
                    height={350}
                    className="rounded-lg"
                />
            </div>
        </section>
    );
}
