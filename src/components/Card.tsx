interface CardProps {
    title: string;
    date: string;
    description: string;
}

const Card = ({ title, date, description }: CardProps) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
            <p className="text-sm text-gray-400 font-semibold mb-4">{date}</p>
            <p className="text-gray-600 flex-grow">{description}</p>
        </div>
    );
};

export default Card;