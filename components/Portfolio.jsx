import Image from "next/legacy/image";
import { motion } from "framer-motion";
import kanban from "../public/assets/images/kanban-task-management-app.png";
import lendsqrDashboard from "../public/assets/images/lendsqr-dashboard.png";
import todoApp from "../public/assets/images/todo-app.png";
import cocktail from "../public/assets/images/Cocktails.png";
import restCountries from "../public/assets/images/rest-countries.png";
import interacty from "../public/assets/images/interacty.png";
import { Header } from "./About";

export function PortfolioCard({ children, className, href }) {
  return (
    <a
      transition={{
        type: "spring",
        delay: 0.1,
        ease: "easeOut",
        duration: 0.7,
        stiffness: 100,
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`${className} py-8 md:py-20 border-2 border-x-transparent border-t-secondary 
        border-b-transparent flex flex-col md:flex-row overflow-hidden`}
      >
        {children}
      </div>
    </a>
  );
}

export function ImageContainer({ src }) {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        ease: "easeOut",
        duration: 0.7,
        stiffness: 100,
      }}
      className="w-[100%] md:w-[50%]"
    >
      <Image src={src} alt={`Image for ${src}`} className="rounded-md border" />
    </motion.div>
  );
}

export function PortfolioDescription({ children }) {
  return (
    <motion.div
      className="text-secondary text-lg flex items-center md:w-[50%] md:pl-8 pt-8 md:pt-0"
      initial={{
        x: 100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        delay: 0.5,
        ease: "easeOut",
        duration: 0.7,
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section className="z-30 py-8 px-8">
      <Header>PORTFOLIO</Header>
      <div className="flex justify-center">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            ease: "easeOut",
            duration: 0.7,
            stiffness: 100,
          }}
          className="py-4 text-lg md:text-xl text-secondary text-center lg:w-[700px]"
        >
          The following are some of my portfolio explorations. Each project card
          contains details of its features and tech stack utilized.
        </motion.p>
      </div>

      <section className="md:mt-24">
        <PortfolioCard href="https://kanban-task-management-app-delta.vercel.app">
          <ImageContainer src={kanban} />
          <PortfolioDescription>
            <p>
              A kanban task management app built with TypeScript, Next.js,
              Redux-toolkit, and Firebase for database management. As of the
              time of updating this portfolio, this has amassed over a 100 sign
              ups.
              <br />
              <br />
              The tech stack utilized for this project:
              <b> Next.js, TypeScript, Redux-toolkit, and TailwindCSS.</b>
              <br />
              <br />
              Read about how I built this{" "}
              <u>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.freecodecamp.org/news/build-full-stack-app-with-typescript-nextjs-redux-toolkit-firebase/"
                  className="text-blue"
                >
                  here
                </a>
              </u>{" "}
              on Freecodecamp
            </p>
          </PortfolioDescription>
        </PortfolioCard>

        <PortfolioCard href="https://lendsqr-admin-dashboard.netlify.app">
          <ImageContainer src={lendsqrDashboard} />
          <PortfolioDescription>
            <p>
              An admin dashboard that displays the amount of users signed up for
              a Lending-as-a-service platform.
              <br />
              <br />
              The tech stack utilized for this project:
              <b> React.js, TypeScript, Firebase, and SCSS.</b>
              <br />
              <br />
              Read about the story behind this{" "}
              <u>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://dev.to/sukodes/-a-technical-interview-project-building-a-lending-as-a-service-application-3k8c"
                  className="text-blue"
                >
                  here
                </a>
              </u>{" "}
              on dev.to
            </p>
          </PortfolioDescription>
        </PortfolioCard>

        <PortfolioCard href="https://todolist-fbapp.netlify.app/">
          <ImageContainer src={todoApp} />
          <PortfolioDescription>
            <p>
              A full-stack to-do list app that registers and fetches your to-dos
              to the backend in real-time
              <br />
              <br />
              The tech stack utilized for this project:
              <b> React.js, TypeScript, and Firebase, and TailwindCSS.</b>
              <br />
              <br />
              Read about how I built this{" "}
              <u>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.freecodecamp.org/news/how-to-manage-state-in-react-apps-with-firebase-cloud-firestore/"
                  className="text-blue"
                >
                  here
                </a>
              </u>{" "}
              on Freecodecamp
            </p>
          </PortfolioDescription>
        </PortfolioCard>

        <PortfolioCard href="https://rest-country-apis.vercel.app">
          <ImageContainer src={restCountries} />
          <PortfolioDescription>
            <p>
              A web app that allows users to easily explore a database of
              countries displayed on their screens from an API.
              <br />
              <br />
              The tech stack used for this project:
              <b>
                {" "}
                Next.js, JavaScript, Framer Motion, React Bootstrap, and CSS.
              </b>
            </p>
          </PortfolioDescription>
        </PortfolioCard>
      </section>
    </section>
  );
}
