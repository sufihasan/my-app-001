"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { TEvent } from "@/types/event";


export default function CreateEventPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TEvent>();

    const router = useRouter();

    const onSubmit = async (data: TEvent) => {
        try {
            const res = await fetch("/api/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.error);
                return;
            }

            alert("Event Created Successfully 🎉");
            reset();
            router.push("/events");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Title */}
                <div>
                    <input
                        type="text"
                        placeholder="Event Title"
                        {...register("title", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm">Title is required</p>
                    )}
                </div>

                {/* Date */}
                <div>
                    <input
                        type="date"
                        {...register("date", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.date && (
                        <p className="text-red-500 text-sm">Date is required</p>
                    )}
                </div>

                {/* Location */}
                <div>
                    <input
                        type="text"
                        placeholder="Location"
                        {...register("location", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.location && (
                        <p className="text-red-500 text-sm">Location is required</p>
                    )}
                </div>

                {/* Image URL */}
                <div>
                    <input
                        type="text"
                        placeholder="Image URL"
                        {...register("image", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.image && (
                        <p className="text-red-500 text-sm">Image is required</p>
                    )}
                </div>

                {/* Description */}
                <div>
                    <textarea
                        placeholder="Event Description"
                        {...register("description", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm">Description is required</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                >
                    Create Event
                </button>
            </form>
        </div>
    );
}