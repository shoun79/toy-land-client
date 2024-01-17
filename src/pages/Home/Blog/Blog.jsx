import React, { useState } from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {

    useTitle('Blog');
    const blogs = [
        {
            id: 1,
            question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
            ans: 'Access tokens are temporary credentials that grant access to a protected resource, while refresh tokens are used to obtain new access tokens once the current ones expire.We should store them on local Storage or Http only cookie'
        },
        {
            id: 2,
            question: 'Compare SQL and NoSQL databases?',
            ans: 'SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.'
        },
        {
            id: 3,
            question: 'What is express js? What is Nest JS?',
            ans: 'Express.js, commonly known as Express, is a minimal and flexible web application framework for Node.js.NestJS is a progressive Node.js framework for building scalable and efficient server-side applications. It is designed to be modular, making it easy to organize code and scale applications. NestJS leverages TypeScript, which is a superset of JavaScript that adds static typing and other features to help developers write more maintainable and structured code.'
        },
        {
            id: 4,
            question: 'What is MongoDB aggregate and how does it work?',
            ans: 'Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.'
        }

    ]

    // toggle state and function 
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    return (
        <div className="flex justify-center px-2">
            <div className=" max-w-[550px] rounded-lg py-20 space-y-6 cursor-pointer">
                {/* maping each accordion  */}
                {blogs.map((arr, idx) => (
                    <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                        {/* the index div  */}
                        <div className="w-16 h-16 bg-[#355E72] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                            <span>0{idx + 1}</span>
                        </div>
                        <div className="w-10 h-[2px] bg-[#355E72] relative">
                            <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
                            <span className="bg-[#355E72] w-10 h-1"></span>
                        </div>
                        {/* main accordion div  */}
                        <div>
                            <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-[#355E72] ">
                                <h1 className="text-[#355E72] text-xl text-center">{arr.question}</h1>
                            </div>
                            <div
                                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-6 text-center text-sm">
                                        {arr.ans}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;