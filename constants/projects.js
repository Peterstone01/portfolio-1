import project1 from "../public/project1.jpg";
import project2 from "../public/project2.jpg";

import project4 from "../public/project4.jpg";
import project10 from "../public/project10.jpg";

export const projects = [
  {
    title: "E-commerce website  with Sanity CMS",
    image: project2,
    href: "https://supermarket-front-end.vercel.app",
    description:
      "Built and deployed a modern Fullstack Ecommerce webpage with both client side and admin panel. the technologies used in the developement includes: Mongo Database for data Structure, Express Server, React.js for UI, JsonWebToken for authentication and authorization, Redux/Toolkit and Context API for state Management Localstorage, cookie-parser, Multer to handle file uploads and Deployment to Vercel",
  },
  {
    title: "Fullstack Blog with Sanity CMS",
    image: project1,
    href: "https://blog-steel-seven-83.vercel.app/",
    description:
      "The essence of building this web blog is to showcase my ability on how to use the Sanity CMS as a content manager, how to query the studio with Groqs and render the components on the UI",
  },
  {
    title: "Crud App",
    image: project4,
    href: "https://mongodb-crud-kri1.vercel.app/",
    description:
      "Built some Crud Apps to showcase my ability on how to use the Tanstack Query,  React hook form for Form Validation how to query the Mongo database Atlas  and render the components on user interface",
  },
  {
    title:
      " Deployed a Sanity Studio (Content Management Studio) to serve as a backend to perfom basic crud operations in your Blogs",
    image: project10,
    href: "https://blog-3.sanity.studio/structure",
    description:
      "The essence of building this web blog is to showcase my ability on how to use the postgress database (supabase), prisma Adapter manager, how to query the studio with Prisma Adapter and render the components on the Frontend",
  },
];
