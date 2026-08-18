import { skills } from '../data/skills'
import type { IconType } from 'react-icons'
import vscodeIcon from '../assets/vscode-2.png'

import {
  SiCplusplus, SiPython, SiJavascript, SiHtml5, SiCss,
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub,
  SiPostman,
} from 'react-icons/si'

const iconMap: Record<string, IconType> = { // a TS meaning "an object where every key is a string, every value is an icon component. It's a lookup table: given a skill name string, find its matching icon component"
  "C++": SiCplusplus,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "Git": SiGit,
  "GitHub": SiGithub,
  "Postman": SiPostman,
}

const categories = [
    {label: "Languages", items: skills.languages},
    {label: "Web technologies", items: skills.webTech},
    {label: "Tools", items: skills.tools},
]

export default function Hero(){
    return(
        <section className="py-12 min-h-full px-8 md:px-16 bg-gray-950 text-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
                <div >
                    <p className="font-mono text-base text-teal-400 mb-3">$ whoami</p>
                    <h1 className="text-6xl md:text-7xl font-bold mb-4">Pranav Kumar</h1>
                    <p className="text-2xl text-gray-400 mb-6 leading-relaxed">MERN stack developer building full-stack products. B.Tech CSE @ NIT Manipur</p>
                    <span className="inline-block text-sm px-4 py-1.5 rounded bg-teal-950 text-teal-300 border border-teal-800">Available for internships</span>
                

                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 font-mono text-base text-teal-300 mt-4 w-fit">
                        <p className="text-teal-400">const dev = {"{"}</p>
                        <p className="pl-4">stack: 'MERN',</p>
                        <p className="pl-4">focus: 'full-stack',</p>
                        <p className="text-teal-400">{"}"}</p>
                    </div>
                </div>

                <div className='space-y-4'>
                    <p className='font-mono text-base text-teal-400 mb-1'>$ ls skills</p>
                    <h2 className="text-3xl font-bold">Skills</h2>
                    {categories.map((cat) => (
                        <div key={cat.label}>
                            <p className='text-gray-500 text-sm mb-2'>{cat.label}</p>
                            <div className='flex flex-wrap gap-2'>
                                {cat.items.map((item) => {
                                    const Icon = iconMap[item]
                                    return(
                                        <span key={item} className='flex items-center gap-1.5 text-sm px-3.5 py-1.5 rounded bg-gray-900 text-teal-300 border border-gray-800'>
                                            {item === "VS Code" ? (<img src={vscodeIcon} className='w-4 h-4 object-contain' alt="VS Code"/>) :
                                            (Icon && <Icon  className='text-base'/>)}
                                            {item}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto w-full mt-6 pt-6 border-t border-gray-800">
                <div className='flex flex-row items-center justify-between gap-4 sm:flex-row sm:items-center sm:justify-between'>
                    <p className="font-mono text-base text-teal-400">$ cat about.md</p>
                    <a href="https://1drv.ms/w/c/541db1cb4ffdf7fa/IQBdOhydx5T0TKYWtc2Y1GfUAWVNRqb089TwXPmgUuAPM4s?e=JHj1MR" target='_blank' rel='noopener noreferrer' className='w-fit shrink-0 rounded-md border border-teal-800 bg-teal-950 px-4 py-2 text-sm font-medium text-teal-300 transition hover:border-teal-600 hover:bg-teal-900 hover:text-teal-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400'>View Resume</a>
                    
                </div>
                <p className="mt-6 text-lg leading-relaxed text-gray-400">
                    B.Tech CSE student at NIT Manipur (CGPA 8.05) specializing in full-stack video platform with JWT authentication and cloud media storage. Strong foundation in DSA and OOP, seeking SDE internship roles.
                </p>
            </div>
            
        </section>
    )
}