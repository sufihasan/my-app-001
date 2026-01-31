import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const SubscribeSection = () => {
    return (
        <div>
            <section className="py-20 px-8 text-center rounded-xl mx-8">
                <h2 className="text-3xl font-semibold mb-4">
                    Subscribe to Our Newsletter
                </h2>
                <p className="mb-6 text-gray-600">
                    Get updates on the latest events and offers
                </p>
                <div className="flex justify-center gap-2 max-w-md mx-auto">
                    <Input placeholder="Enter your email" className="rounded-r-none" />
                    <Button className="rounded-l-none flex items-center gap-2">
                        <Mail size={16} /> Subscribe
                    </Button>
                </div>
            </section>
        </div>
    );
};