export const TestimonialSection = () => {
    return (
        <section className="px-8 py-20 bg-gray-50">
            <h2 className="text-3xl font-semibold mb-12 text-center">
                What Our Users Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                        <h4 className="font-bold">Alice Johnson</h4>
                    </div>
                    <p className="text-gray-600">
                        “Booking events has never been easier. The interface is smooth and
                        responsive.”
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                        <h4 className="font-bold">Mark Wilson</h4>
                    </div>
                    <p className="text-gray-600">
                        “Amazing support and verified locations. Highly recommend this
                        platform!”
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                        <h4 className="font-bold">Sophia Lee</h4>
                    </div>
                    <p className="text-gray-600">
                        “I can quickly find events near me and book without hassle.”
                    </p>
                </div>
            </div>
        </section>
    );
};