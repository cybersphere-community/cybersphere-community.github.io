const Contact = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-8">
                <h1 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors font-medium">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Contact;
