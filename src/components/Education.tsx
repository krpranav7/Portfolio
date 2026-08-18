import { education } from "../data/education";
import { achievements} from "../data/achievements";

export default function Education(){
    return(
        <section className="py-12 min-h-full px-8 md:px-16 bg-gray-950 text-gray-100">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full items-start">
                <div>
                    <p className="font-mono text-base text-teal-400 mb-3">$ cat education.md</p>
                    <h2 className="text-4xl font-bold mb-8">Education</h2>

                    <div className="space-y-6">
                        {education.map((item) => (
                            <div key={item.degree} className="border-l-2 border-teal-800 pl-4">
                                <p className="font-semibold text-lg">{item.degree}</p>
                                <p className="text-gray-400 text-base">{item.institute}</p>
                                <p className="text-gray-500 text-base">{item.score} · {item.year}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    {/* <div className="border boder-hray-800 rounded-lg p-5 mb-8">
                        <p className="text-base font-semibold mb-3 text-gray-200">Certification</p>
                        <div className="space-y-3">
                            {certifications.map((cert) => (
                                <div key={cert.title} className="flex flex-col">
                                    <span className="text-base text-gray-300">{cert.title}</span>
                                    <span className="text-base text-gray-500">{cert.issuer}</span>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <p className="font-mono text-base text-teal-400 mb-3">$ cat achievements.md</p>
                    <h2 className="text-4xl font-bold mb-6">Achievements</h2>

                    <div className="space-y-6">
                        {achievements.map((item) => (
                            <div key={item.title} className="border-l-2 border-teal-800 pl-4">
                                <p className="font-semibold text-lg">{item.title}</p>
                                <p className="text-gray-500 text-base mb-2">{item.date}</p>
                                <p className="text-gray-400 text-base leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}