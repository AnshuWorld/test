export default function Contact(){
    return(
        <div className="min-h-screen flex flex-col p-5 gap-5  max-w-md mx-auto bg-gradient-to-b text-white from-blue-500 to-purple-600 m-5 rounded">
            <h1 className="text-3xl font-bold mb-5">
                Contact Us
            </h1>
            Name: <input type="text" placeholder="Your name ..." className="border p-2 block"/>
            Email: <input type="email" placeholder="Your email ..." className="border p-2 block"/>
            Phone: <input type="number" placeholder="Your phone ..." className="border p-2 block"/>
            Message: <textarea rows={4} placeholder="Your message ..." className="border p-2 block"/>
            <button className="px-4 py-2 bg-green-900 hover:bg-amber-800 rounded shadow-lg">Message Us</button>
        </div>
    );
}