    import {
        mobile,
        web,
        javascript,
        html,
        css,
        reactjs,
        redux,
        tailwind,
        nodejs,
        git,
        sigma,
        teslaWeb,
        fitgym,
        nails,
    } from "../assets";
    
    export const navLinks = [
        {
        id: "about",
        title: "About",
        },
        {
        id: "work",
        title: "Work",
        },
        {
        id: "contact",
        title: "Contact",
        },
    ];
    
    const services = [
        {
        title: "Web Developer",
        icon: web,
        },
        {
        title: "React Developer",
        icon: mobile,
        }
    ];
    
    const technologies = [
        {
        name: "HTML 5",
        icon: html,
        },
        {
        name: "CSS 3",
        icon: css,
        },
        {
        name: "JavaScript",
        icon: javascript,
        },
        {
        name: "React JS",
        icon: reactjs,
        },
        {
        name: "Redux Toolkit",
        icon: redux,
        },
        {
        name: "Tailwind CSS",
        icon: tailwind,
        },
        {
        name: "Node JS",
        icon: nodejs,
        },
        {
        name: "git",
        icon: git,
        },
    ];
    
    const experiences = [
        {
        title: "Sales Specialist",
        company_name: "SIGMA",
        icon: sigma,
        iconBg: "#383E56",
        date: "June 2021 - December 2022",
        points: [
            "Selling the products that the company offers",
            "Generating ideas for new products",
            "Administration of new and existing products",
        ],
        },
        // {
        // title: "React Native Developer",
        // company_name: "Tesla",
        // icon: tesla,
        // iconBg: "#E6DEDD",
        // date: "Jan 2021 - Feb 2022",
        // points: [
        //     "Developing and maintaining web applications using React.js and other related technologies.",
        //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        //     "Implementing responsive design and ensuring cross-browser compatibility.",
        //     "Participating in code reviews and providing constructive feedback to other developers.",
        // ],
        // },
        // {
        // title: "Web Developer",
        // company_name: "Shopify",
        // icon: shopify,
        // iconBg: "#383E56",
        // date: "Jan 2022 - Jan 2023",
        // points: [
        //     "Developing and maintaining web applications using React.js and other related technologies.",
        //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        //     "Implementing responsive design and ensuring cross-browser compatibility.",
        //     "Participating in code reviews and providing constructive feedback to other developers.",
        // ],
        // },
        // {
        // title: "Full stack Developer",
        // company_name: "Meta",
        // icon: meta,
        // iconBg: "#E6DEDD",
        // date: "Jan 2023 - Present",
        // points: [
        //     "Developing and maintaining web applications using React.js and other related technologies.",
        //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        //     "Implementing responsive design and ensuring cross-browser compatibility.",
        //     "Participating in code reviews and providing constructive feedback to other developers.",
        // ],
        // },
    ];
    
    const testimonials = [
        {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Gent proved me wrong.",
        name: "Angela Gomez",
        designation: "CFO",
        company: "Intima Moda",
        image: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg",
        },
        {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Gent does.",
        name: "Elisabeth Bell",
        designation: "COO",
        company: "Nails Salon",
        image: "https://static.generated.photos/vue-static/home/feed/asian-girl.png",
        },
        {
        testimonial:
            "After Gent optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Gerald Johnson",
        designation: "CTO",
        company: "FIT Club",
        image: "https://static.generated.photos/vue-static/home/feed/male.png",
        },
    ];
    
    const projects = [
        {
        name: "Tesla",
        description:
            "Tesla website clone",
        tags: [
            {
            name: "react",
            color: "blue-text-gradient",
            },
            {
            name: "css",
            color: "green-text-gradient",
            },
        ],
        image: teslaWeb,
        source_code_link: "https://github.com/GentMulaj1/tesla",
        weblink: "https://tesla-clone-2023.pages.dev/",

        },

        {
        name: "Fit Club",
        description:
            "This is a web page which is suitable for all GYMs to promote themselves for the things they have.",
        tags: [
            {
            name: "react",
            color: "blue-text-gradient",
            },
            {
            name: "CSS",
            color: "green-text-gradient",
            },
            {
            name: "animation",
            color: "pink-text-gradient",
            },
        ],
        image: fitgym,
        source_code_link: "https://github.com/GentMulaj1/FitClub",
        weblink: "https://fit-cl-ub.pages.dev/",

        },

        {
        name: "Nails Salon",
        description:
            "A professional nail salon website. With all the descriptions and all the services they offer.",
        tags: [
            {
            name: "HTML",
            color: "blue-text-gradient",
            },
            {
            name: "CSS",
            color: "green-text-gradient",
            },
            {
            name: "JavaScript",
            color: "pink-text-gradient",
            },
        ],
        image: nails,
        source_code_link: "https://github.com/GentMulaj1/Nails/",
        weblink: "https://nails-salon.pages.dev/",

        },
    ];
    
    export { services, technologies, experiences, testimonials, projects };