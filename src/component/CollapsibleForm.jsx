import React, { useState } from 'react';

const CollapsibleForm = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const toggleForm = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <div className="max-w-sm mx-auto my-8">
            <div className="flex items-center justify-between bg-gray-200 p-4 rounded">
                <div className="text-xl">📝 Form</div>
                <button
                    className="text-gray-600 focus:outline-none"
                    onClick={toggleForm}
                >
                    {isFormVisible ? 'Hide Form' : 'Show Form'}
                </button>
            </div>

            {isFormVisible && (
                <div className="mt-4 p-4 bg-white rounded border">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name:
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        {/* Add more fields as needed */}

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CollapsibleForm;
