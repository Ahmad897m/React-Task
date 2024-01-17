import images from './images'

const what_we_do = [ {
    image: `${images.header_device_img}`,
    title: "web design",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
            image: `${images.header_device_img}`,
            title: "search engine optimization",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        image: `${images.header_device_img}`,
        title: "affiliate marketing",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

const features = [
    {
        icon: `${images.icon_text}`,
        title: "visual Composer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: `${images.icon_monitor}`,
        title: "Responsive",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: `${images.icon_laptop}`,
        title:"Retina Ready",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon:`${images.icon_pencil}`,
        title: "Typography",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: `${images.icon_pencil}`,
        title: "Theme Options Pannel",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: `${images.icon_note}`,
        title: "Dummy Content",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: `${images.icon_globe}`,
        title: "Many Style Available",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: `${images.icon_crop}`,
        title: "Header Style",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: `${images.icon_bag}`,
        title: "10000+ icons",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: `${images.icon_antennae}`,
        title: "Support",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: `${images.icon_diamond}`,
        title: "Update",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: `${images.icon_juice}`,
        title: "Seo Ready",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

const packages = [
    {
        type: "basic",
        service_list: [
            '5 web sites',
            '15 e-mails',
            '5 mysql databases',
            '10GB storage'
        ], 
        price: "5"
    },
    {
        type: "Standard",
        service_list: [
            '15 web sites',
            '40 e-mails',
            '20 mysql databases',
            '50 GB storage'
        ],
        price: "12"
    },
    {
        type: "Premium",
        service_list: [
            '30 web sites',
            '50 e-mails',
            '40 mysql databases',
            '100 GB storage'
        ],
        price: "19"
    }
]

const projects = [
    {
        img: `${images.project_img_2}`,
        title: "technical aid"
    },
    {
        img: `${images.project_img_2}`,
        title: "secure access" 
    }, 
    {
        img: `${images.project_img_2}`,
        title: "market research" 
    },
    {
        img: `${images.project_img_2}`,
        title: "credit" 
    },
    {
        img: `${images.project_img_2}`,
        title: "targeting" 
    },
    {
        img: `${images.project_img_2}`,
        title: "insurance" 
    },
    {
        img: `${images.project_img_2}`,
        title: "ecommerce" 
    },
    {
        img: `${images.project_img_2}`,
        title: "office" 
    }
]

const teams = [
    {
        img: `${images.team_img_1}`,
        name: "syed miraj",
        post: 'ui 6 ux designer'
    },
    {
        img: `${images.team_img_2}`,
        name: "penny huston",
        post: 'developer'
    },
    {
        img: `${images.team_img_3}`,
        name: "lennerd shelly",
        post: 'reviewer'
    },
    {
        img: `${images.team_img_4}`,
        name: "sheldon cupper",
        post: 'marketer'
    },
    {
        img: `${images.team_img_5}`,
        name: "ashley cole",
        post: 'management'
    },
]

export default { what_we_do, features, packages, projects, teams};