import { Calendar, Mail, MapPin } from "lucide-react";

export const ServiceSection = () => {
    return (
        <section className="px-8 py-20 bg-gray-50">
            <h2 className="text-3xl font-semibold mb-12 text-center">Our Features</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="flex flex-col items-center p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
                    <Calendar size={48} className="mb-4" />
                    <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
                    <p className="text-gray-600 text-center">
                        Book events in just a few clicks with our simple and intuitive
                        interface.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
                    <MapPin size={48} className="mb-4" />
                    <h3 className="text-xl font-bold mb-2">Verified Locations</h3>
                    <p className="text-gray-600 text-center">
                        All venues are verified and checked for quality and accessibility.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
                    <Mail size={48} className="mb-4" />
                    <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-gray-600 text-center">
                        Our team is always ready to assist you with any questions or issues.
                    </p>
                </div>
            </div>
        </section>
    );
};