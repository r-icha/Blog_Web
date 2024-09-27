// import React, { useState, useEffect } from 'react';';

import myimage from './myimage.jpg';
const BlogSection = () => {
  // const [backendData, setBackendData] = useState({});

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => { 
  //       setBackendData(data)
  //     }
  //   )
  // }, []);

  const blogs = [
    {
      id: 1,
      title: 'How to quickly deploy a static website',
      description: 'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.',
      category: 'Tutorial',
      // author: "kunal",
      authorImage: myimage,
      // authorImage: p,
      date: '14 days ago',
      author: 'Richa Chaudhary',
    },
    {
      id: 2,
      title: 'Our first project with React',
      description: 'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.',
      category: 'Article',
      author: 'Bonnie Green',
      authorImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
      date: '14 days ago',
    },
    {
      "id": 1,
      "title": "How to quickly deploy a static website",
      "description": "Learn the fastest ways to deploy a static website using modern platforms like Netlify and Vercel. Includes step-by-step instructions.",
      "category": "Tutorial",
      "author": "Kunal Sharma",
      "authorImage": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      
      "date": "10 days ago"
    },
    {
      "id": 2,
      "title": "Getting Started with JavaScript ES6",
      "description": "A comprehensive guide to the most important ES6 features, including arrow functions, promises, and classes, with code examples.",
      "category": "Guide",
      "author": "Sarah Lee",
      "authorImage": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      "date": "7 days ago"
    },
    {
      "id": 3,
      "title": "Mastering CSS Grid and Flexbox",
      "description": "Understand the differences between CSS Grid and Flexbox and how to use them together for modern, responsive web layouts.",
      "category": "Article",
      "author": "John Doe",
      "authorImage": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      "date": "5 days ago"
    },
    {
      "id": 4,
      "title": "An Introduction to React Hooks",
      "description": "Hooks are a new addition in React that lets you use state and other features without writing a class. This guide covers the basics.",
      "category": "Tutorial",
      "author": "Emily White",
      "authorImage": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      "date": "3 days ago"
    },
    {
      "id": 5,
      "title": "Dockerizing a Node.js App",
      "description": "A step-by-step guide on containerizing a Node.js application using Docker. Learn how to create Dockerfiles and manage containers.",
      "category": "Guide",
      "author": "Mark Robinson",
      "authorImage": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      "date": "1 day ago"
    }
  ];

  return (

    
    <section className="bg-white dark:bg-gray-900" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1604093882750-3ed498f3178b')",
    }}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6" >
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          
        </div>
        <div className="grid gap-8 lg:grid-cols-2 ">
          {blogs.map((blog) => (
            <article key={blog.id} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 shadow-md transition transform hover:scale-100 scale-90">
                  {blog.category}
                </span>
                <span className="text-sm">{blog.date}</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  transition transform hover:scale-100 scale-90">
                <a href="/">{blog.title}</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{blog.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img className="w-7 h-7 rounded-full" src={blog.authorImage} alt={blog.author} />
                  {/* {(typeof backendData.Users === 'undefined') ? (
                    <p>loading...</p>
                  ) : (
                    <p key={0}>{backendData.Users[0]}</p>
                  )} */}
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{blog.author}</p>
                </div>
                
                <a href="/about" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default BlogSection;