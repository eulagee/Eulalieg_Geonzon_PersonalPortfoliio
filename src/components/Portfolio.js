import React, { useState, useEffect } from 'react';

function Portfolio() {

    //State for details
    const [Project, setProject] = useState([]);

    function __initProjects() {
        setProject([{
                id: 1,
                name: 'Book Search Engine',
                lang: [{ name: 'JavaScript' }, { name: 'HTML5' }, { name: 'Graphql' }, { name: 'Apollo Server' }],
                description: 'A Google book search engine application that allows users to search for new books and saved books they want to purchase. The application was built using MERN stack and with a React front end, MongoDB database, and Node.js/Express.js server and API',
                thumbnail: 'https://user-images.githubusercontent.com/45496074/136612097-3a6a65fd-79a1-48c9-922c-21a063e75628.png',
                liveView: 'null',
                githubRepo: 'https://github.com/eulagee/GT-Book-Search-Engine'
            },
            {
                id: 2,
                name: 'Hollywood Hacker',
                lang: [
                    { name: 'JavaScript' },
                    { name: 'Html' },
                    { name: 'Bootstrap' }
                ],
                description: 'On load page will show 4 cards with randomly generated movie titles and appended movie information via fetch omdb api function. Fetch ny times api function will also generate text from movie review column to be appended. User is able to search through the input field for a movie of their choice. Unordered list is appended to input to dynamically append list items containing locally stored search history up to a maximum of 6 titles. User can click on line item to automatically search for previously searched movie title. The star logo has fun css that will cause it to spin if hovered over.',
                date: '2021',
                thumbnail: 'https://github.com/eccentricality/hollywoodHackers/blob/main/demo.gif',
                liveView: 'https://eccentricality.github.io/hollywoodHackers/',
                githubRepo: 'https://eccentricality.github.io/hollywoodHackers/'
            },
            {
                id: 3,
                name: 'Work Day Scheduler',
                lang: [{ name: 'Html' }, { name: 'Bootstrap' }],
                description: 'On load page will show 4 cards with randomly generated movie titles and appended movie information via fetch omdb api function. Fetch ny times api function will also generate text from movie review column to be appended. User is able to search through the input field for a movie of their choice. Unordered list is appended to input to dynamically append list items containing locally stored search history up to a maximum of 6 titles. User can click on line item to automatically search for previously searched movie title. The star logo has fun css that will cause it to spin if hovered over.',
                date: '2021',
                thumbnail: 'https://github.com/eccentricality/hollywoodHackers/blob/main/demo.gif',
                liveView: 'https://github.com/eulagee/WorkDay_Scheduler_EG',
                githubRepo: 'https://github.com/eulagee/WorkDay_Scheduler_EG'
            },
        ])
    }
    useEffect(() => {
        __initProjects();
    }, []);

    return ( <
            div id = "portfolio" >
            <
            div class = "container mt-16" >
            <
            div class = "text-2xl text-center text-gray-600 font-bold" >
            Portfolio and Open source <
            /div> <
            div class = "text-center text-gray-600 text-sm mt-3" >
            Check out my latest projects and Open source projects to which i contribute <
            /div> <
            div class = "md:flex md:flex-wrap md:justify-center mt-5" >

            {
                Project.length !== 0 && Project ? (
                    Project.map((Project, index) => ( <
                            div class = "max-w-sm mx-3 my-3" >
                            <
                            div class = "bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg" >
                            <
                            a href = { Project.githubRepo }
                            target = "_blank"
                            rel = "noopener noreferrer" >
                            <
                            img class = "rounded-t-lg"
                            src = { Project.thumbnail }
                            alt = "" / >
                            <
                            /a> <
                            div class = "py-6 px-8 rounded-lg bg-white text-left" >
                            <
                            a href = { Project.githubRepo }
                            target = "_blank"
                            rel = "noopener noreferrer" >
                            <
                            span class = "text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer" > { Project.name } <
                            /span> < /
                            a > {
                                Project.liveView ? ( <
                                    a class = "ml-1"
                                    href = { Project.liveView }
                                    target = "_BLANK"
                                    rel = "noreferrer" >
                                    <
                                    span class = "py-1 px-2 bg-green-500 hover:bg-green-600 cursor-pointer text-white rounded-xl text-xs" >
                                    <
                                    span class = "text-md" > Live view < /span> < /
                                    span > <
                                    /a>) : (null)} <
                                    p class = "text-gray-600 tracking-wide mt-3 text-sm" > { Project.description } <
                                    /p> <
                                    div class = "mt-3 flex" > {
                                        Project.lang.map((lg, index) => ( <
                                            div class = "w-28 flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-purple-700 bg-purple-100 hover:bg-purple-200 cursor-pointer border border-purple-300 " >
                                            <
                                            div class = "text-xs font-normal leading-none max-w-full flex-initial" > { lg.name } <
                                            /div> < /
                                            div >
                                        ))
                                    }

                                    <
                                    /div> < /
                                    div > <
                                    /div> < /
                                    div >
                                ))): ( <
                            div > No projects found < /div>
                        )
                    } <
                    /div> < /
                    div > <
                    /div>
                )
            }

            export default Portfolio;