const Navbar = () => {
    return (
        <header className="bg-white shadow-md w-full">
            <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
                    Anubix Tech Club
                </div>
                <nav className="flex gap-6 font-medium text-gray-700">
                    <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Events</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Projects</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
                </nav>

            </div>
        </header>
    );
};

export default Navbar;