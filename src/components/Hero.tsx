const Hero = () => {
    return (
        <section className="bg-blue-50 py-20 px-6 flex flex-col items-center text-center">

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Code, Build, and Innovate Together
            </h1>

            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
                Join the university's premier technology club. Whether you are a beginner or a pro, we have workshops, hackathons, and a community for you.
            </p>

            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Join The Club
            </button>

        </section>
    );
};

export default Hero;