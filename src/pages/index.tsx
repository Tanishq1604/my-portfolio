import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
  Github,
  Linkedin,
  Code,
  Trophy,
  Twitter,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { TechBadge } from "@/components/ui/tech-badge";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiNodedotjs, SiDocker, SiKubernetes,
  SiMongodb, SiPostgresql, SiSolidity, SiPython,
  SiGo, SiRust, SiFlutter, SiDart, SiKotlin,
  SiFirebase, SiGraphql, SiPrisma, SiWebrtc,
  SiAmazonec2, SiGooglecloud,
  SiJenkins, SiGrafana, SiPrometheus, SiGit,
  SiGithub, SiGitlab, SiBitbucket, SiJira,
  SiTrpc, SiExpress, SiRedis,
  SiAndroidstudio, SiXcode, SiSwift, SiThreedotjs,
  SiFigma, SiFramer, SiVercel, SiNetlify
} from 'react-icons/si';

// Update the stats array
const aboutStats = [
  { label: "Projects Completed", value: "43+" },
  { label: "Hackathons Won", value: "9+" },
  { label: "Freelance Clients", value: "2+" },
  { label: "Technologies", value: "36+" },
];

// Add this new constant for the sliding tech stack
const techStack = {
  "Languages": [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "Go", icon: SiGo },
    { name: "Rust", icon: SiRust },
    { name: "Dart", icon: SiDart },
    { name: "Kotlin", icon: SiKotlin },
    { name: "Swift", icon: SiSwift },
    { name: "Solidity", icon: SiSolidity },
  ],
  "Frontend": [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Flutter", icon: SiFlutter },
    { name: "Three.js", icon: SiThreedotjs },
    { name: "Framer Motion", icon: SiFramer },
    { name: "Figma", icon: SiFigma },
  ],
  "Backend": [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Redis", icon: SiRedis },
    { name: "Firebase", icon: SiFirebase },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Prisma", icon: SiPrisma },
    { name: "tRPC", icon: SiTrpc },
    {name:"Prisma", icon: SiPrisma},

    { name: "WebRTC", icon: SiWebrtc },
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "AWS", icon: SiAmazonec2 },
    { name: "GCP", icon: SiGooglecloud },
    { name: "Jenkins", icon: SiJenkins },
    { name: "Grafana", icon: SiGrafana },
    { name: "Prometheus", icon: SiPrometheus },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "GitLab", icon: SiGitlab },
    { name: "Bitbucket", icon: SiBitbucket },
    { name: "Jira", icon: SiJira },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
  ],
  "Mobile": [
    { name: "Flutter", icon: SiFlutter },
    { name: "Android", icon: SiAndroidstudio },
    { name: "iOS", icon: SiXcode },
    { name: "React Native", icon: SiReact },
    { name: "Kotlin", icon: SiKotlin },
    { name: "Swift", icon: SiSwift },
  ]
};

const projects = [
  {
    title: "Autospace",
    description: "Find the best parking near u with multiple frontends for admin,owner and client",
    image: "/assets/autospace_final.webm",
    href: "https://autospace-workshop-web.vercel.app/",
  },
  {
    title: "InfiniteVPS",
    description: "High performance VPS hosting solution",
    image: "/assets/infinitevps.webm",
    href: "#",
  },
  {
    title: "TranslateBot",
    description: "Powerful Multilingual Translation Bot for Discord",
    image: "/assets/translate_bot.webm",
    href: "https://translatebot.app/",
  },
  {
    title: "Wrona",
    description: "Robotics-focused technology company",
    image: "/assets/wrona.jpeg",
    href: "https://www.wrona.com/",
  },
];

const services = [
  {
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "UX Design",
    description:
      "Building intuitive, user-centric designs that drive engagement and conversion.",
    icon: Frame,
  },
  {
    service: "DevOps",
    description:
      "Streamlining your development and operations for faster, reliable delivery.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Designing websites that look and perform equally well on all devices and screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Developing robust, scalable server-side logic for a wide range of web applications.",
    icon: Eye,
  },
];

const technologies = {
  "Languages": ["JavaScript", "TypeScript", "C++", "Rust", "Solidity", "Func"],
  "Frontend": ["React", "Next.js", "TailwindCSS", "Framer Motion", "Three.js"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  "DevOps": ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"],
  "Blockchain": ["Ethereum", "Solana", "TON", "Smart Contracts"]
};

// Update the indieWork constant
const indieWork = [
  {
    title: "Streamers.media",
    description: "A platform connecting content creators with brands. Built with Next.js and tRPC.",
    link: "https://streamers.media"
  },
  {
    title: "SendYourDM",
    description: "Twitter automation tool for marketing outreach.",
    link: "https://sendyourdm.com"
  }
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
          
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Tanishq
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                An experienced full-stack website developer with a passion for
                crafting unique digital experiences.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="https://docs.google.com/document/d/1DJxWxo00g4BlDqEX5Tlj2FlbDiMBMmeT/edit?usp=sharing&ouid=101531150290366440617&rtpof=true&sd=true" passHref>
                <Button>
                  Resume<ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
                  ✨ About Me
                </span>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight xl:text-6xl">
                  Creating Impact Through Code
                </h2>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {aboutStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
                  >
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <span className="text-gradient text-4xl font-bold">{stat.value}</span>
                      <span className="mt-2 text-center text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>

              {/* Main Grid */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* Bio and Indie Projects */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-white/5 p-8 backdrop-blur md:col-span-2"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gradient">Passionate Developer & Problem Solver</h3>
                      <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                        <p>
                          Full Stack Developer with expertise in modern web technologies and cloud infrastructure. 
                          Through my journey of winning 9+ hackathons and working with multiple clients, 
                          I've developed a keen eye for creating scalable and efficient solutions.
                        </p>
                        <p>
                          My approach combines technical expertise with creative problem-solving, 
                          whether I'm building responsive web applications, optimizing cloud infrastructure, 
                          or developing blockchain solutions.
                        </p>
                      </div>
                    </div>

                    {/* Indie Projects */}
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-xl font-semibold text-gradient mb-4">Indie Hacking Projects</h4>
                      <div className="space-y-4">
                        {indieWork.map((project, index) => (
                          <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="block group"
                          >
                            <h5 className="text-primary group-hover:text-gradient flex items-center">
                              {project.title}
                              <ChevronRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                            </h5>
                            <p className="text-muted-foreground text-sm mt-1">
                              {project.description}
                            </p>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:col-span-2">
                  {Object.entries(techStack).map(([category, techs], index) => (
                    <AnimatedCard 
                      key={category}
                      className={cn(
                        "bg-gradient-to-br from-primary/5 via-primary/10 to-transparent",
                        index === 0 ? "md:col-span-2" : ""
                      )}
                    >
                      <h3 className="text-xl font-semibold mb-4">{category}</h3>
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="flex flex-wrap gap-2"
                        >
                          {techs.map((tech, techIndex) => (
                            <TechBadge 
                              key={tech.name}
                              name={tech.name}
                              icon={tech.icon}
                              delay={techIndex * 0.05}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Streamlined digital experiences.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;ve worked on a variety of projects, from small websites to
              large-scale web applications. Here are some of my favorites:
            </p>

            {/* Carousel */}
            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            {project.image.endsWith(".webm") ? (
                              <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            )}
                          </Link>
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Need more info?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I got you.
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Here are some of the services I offer. If you have any
                  questions, feel free to reach out.
                </p>
              </div>
              {services.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for freelance work and open to
              discussing new projects.
            </p>
            <Link href="mailto:tanishq162005@gmail.com" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
