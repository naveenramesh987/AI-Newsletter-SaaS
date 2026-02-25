"use client";

import {useState} from "react";

const categories = [
    {
        id: "technology",
        name: "Technology",
        description: "Latest tech news and innovations",
    },
    {
        id: "business",
        name: "Business",
        description: "Business trends and market updates",
    },
    {id: "sports", name: "Sports", description: "Sports news and highlights"},
    {
        id: "entertainment",
        name: "Entertainment",
        description: "Movies, TV, and celebrity news",
    },
    {
        id: "science",
        name: "Science",
        description: "Scientific discoveries and research",
    },
    {id: "health", name: "Health", description: "Health and wellness updates"},
    {
        id: "politics",
        name: "Politics",
        description: "Political news and current events",
    },
    {
        id: "environment",
        name: "Environment",
        description: "Climate and environmental news",
    },
];

const frequencyOptions = [
    {id: "daily", name: "Daily", description: "Every day"},
    {id: "weekly", name: "Weekly", description: "Once a week"},
    {id: "biweekly", name: "Bi-weekly", description: "Twice a week"},
];

export default function SelectPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    function handleCategoryToggle(categoryId: string) {
        setSelectedCategories((prev) => prev.includes(categoryId) ? prev.filter((id) =>
            id !== categoryId) : [...prev, categoryId])
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Customize Your Newsletter
                    </h1>
                    <p className="text-xl text-gray-600">
                        Select your interests and delivery frequency to start receiving
                        personalized newsletters
                    </p>
                </div>
                <form>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Choose Your Categories
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Select the topics you'd like to see in your personalized
                            newsletter
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {categories.map((category) => (
                                <label
                                    key={category.id}
                                    className={`relative flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                                        selectedCategories.includes(category.id)
                                            ? "border-blue-500 bg-blue-50"
                                            : "border-gray-200 hover:border-gray-300"
                                    }`}
                                >
                                    <input
                                        type="checkbox"
                                        className="sr-only"
                                        checked={selectedCategories.includes(category.id)}
                                        onChange={() => handleCategoryToggle(category.id)}
                                    />
                                    <div className="flex items-center h-5">
                                        <div
                                            className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                                                selectedCategories.includes(category.id)
                                                    ? "border-blue-500 bg-blue-500"
                                                    : "border-gray-300"
                                            }`}
                                        >
                                            {selectedCategories.includes(category.id) && (
                                                <svg
                                                    className="w-3 h-3 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-sm font-medium text-gray-900">
                                            {category.name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {category.description}
                                        </div>
                                    </div>
                                </label>
                            ))}
                        </div>

                        <div className="text-sm text-gray-600">
                            {selectedCategories.length} categor
                            {selectedCategories.length !== 1 ? "ies" : "y"} selected
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Delivery Frequency
                        </h2>
                        <p className="text-gray-600 mb-6">
                            How often would you like to receive your newsletter?
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}