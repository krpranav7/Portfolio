import { projects } from "../data/projects";

export default function Projects(){
    return(
        <section className="py-12 px-8 md:px-16 bg-gray-950 text-gray-100">
            <div className="max-w-6xl mx-auto w-full">
                <p className="font-mono text-base text-teal-400 mb-3">$ ls projects</p>
                <h2 className="text-4xl font-bold mb-8">Projects</h2>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                    {projects.map((project) => (
                        <div key={project.title} className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col">
                            <div className="flex items-start justify-between mb-2">
                                 <h3 className="text-xl font-semibold">{project.title}</h3>
                                 <span className="text-sm text-gray-500">{project.date}</span>
                            </div>

                            <div className="flex gap-4 text-sm justify-between">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-400 hover:text-teal-300 no-underline"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-400 hover:text-teal-300 no-underline"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((tech) => (
                                <span key={tech} className="text-xs px-3 py-1 rounded bg-gray-800 text-teal-300 border border-gray-700">
                                    {tech}
                                </span>
                                ))}
                            </div>

                            <ul className="mt-4 list-disc list-outside pl-5 text-gray-400 text-sm space-y-2"> {/* list-outside is used so that next line of point start in same verical from prev */}
                                {project.points.map((point) => (
                                <li key={point} className="leading-relaxed">
                                    {point}
                                </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}