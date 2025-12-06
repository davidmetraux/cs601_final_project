import { useEffect, useState } from "react"
import style from "../style/Resume.module.css"
import PrinterSVG from "../media/print-printer-svgrepo-com.svg"

interface ResumeType {
    summary: string,
    skills: {
        programmingLanguages: string,
        frameworksLibraries: string,
        other: string
    },
    professionalExperience: Job[],
    education: Education[]
}

interface Job {
    company: string,
    description: string,
    role: string,
    startMonth: string,
    endMonth: string,
    startYear: string,
    endYear: string
    feats: Feat[],
    additionalWork: string[]
}

interface Feat {
    description: string,
    details: string[]
}

interface Education {
    degree: string,
    endMonth: string,
    endYear: string,
    major: string,
    institution: string,
    location: string,
    feat: string
}


function Resume(){
    const [resume, setResume] = useState<ResumeType>()

    useEffect(
        
    ()=>{ 
            async function getResume(){
                try {

                    // checking if running locally or not
                    // eslint-disable-next-line no-restricted-globals
                    const url = location.hostname === "localhost" ? "http://localhost:3000/cs601_final_project/resume.json" : "resume.json"
                    const response = await fetch(url)
                    if (!response.ok){
                         throw new Error(`HTTP error! Status: ${response.status}`);
                    } else {
                        const resume = await response.json()
                        setResume(resume)
                    }

                } catch (err) {
                    console.log(err)
                }
                
            }
            getResume();
        }

    ,[])

    const summary = (summary: string) => {
        return (
            <section className={style.section}>
                <h3>Summary</h3>
                <p>{summary}</p>
            </section>
        )
    }

    const requiresMultipleSections = ( array : any[]) => array.length > 1 ? style.section : style.alone

    const skills = (programmingLanguages: string, frameworksLibraries: string, other: string)=>{
        return (
            <section className={style.section}>
                <h3>Skills</h3>
                <p>Programming Languages: {programmingLanguages}</p>
                <p>Frameworks/Libraries: {frameworksLibraries}</p>
                <p>Other: {other}</p>
            </section>
        )
    }

    const professionalExperience = (jobs: Job[]) => 
                <section className={style.section}>
                    <h3>Professional Experience</h3>
                    {jobs.map((job)=>{
                        return (
                            <section className={requiresMultipleSections(jobs)} key={job.company+job.startMonth+job.endYear}>
                                <h4>{job.role}</h4>
                                <p>{job.company}</p>
                                <p>{job.description}</p>
                                <p>{job.startMonth} {job.startYear} - {job.endMonth} {job.endYear}</p>
                                {feats(job.feats)}
                                <p>Additional Work:</p>
                                {details(job.additionalWork)}
                            </section>
                        )
                    })}
                </section>

    const feats = (feats: Feat[]) => 
        <ul>
            {feats.map((feat)=>{
                    return (
                        <li key={feat.description}>
                            <p>{feat.description}</p>
                            {details(feat.details)}
                        </li>
                    )
                })}
        </ul>

    const details = (details: string[]) => 
        <ul>
            {details.map((detail)=>{
                return <li key={detail}>{detail}</li>
            })}               
        </ul>

    const education = (educations: Education[]) =>
        <section className={style.section}>
            <h3>Education</h3>
            {educations.map((education)=>{
                return (
                    <section className={requiresMultipleSections(educations)}  key={education.degree+education.endYear}>
                        <h4>{education.degree}</h4>
                        <p>{education.major}</p>
                        <p>Graduated: {education.endMonth} {education.endYear}</p>
                        <p>{education.feat}</p>
                        <p>{education.institution}, {education.location}</p>
                    </section>
                )
            })}
        </section>
    
    const output = (resume: ResumeType | undefined)=>{
        if (resume){
            return (
                <section id={style.resume}>
                    <h2>David Metraux's Resume</h2>
                    {summary(resume.summary)}
                    {skills(resume.skills.programmingLanguages, resume.skills.frameworksLibraries, resume.skills.programmingLanguages)}
                    {professionalExperience(resume.professionalExperience)}
                    {education(resume.education)}
                    <button onClick={()=>window.print()}><img height={50} width={50} src={PrinterSVG} alt="printer icon"/>Print Resume</button>
                    <p className={style.noCSSWarning}> <b>Warning:</b> Printing still prints header and footer with CSS turned off </p>
                </section>
            )
        } else {
            return (<section>Loading Resume</section>)
        }

    }

    return (
        (output(resume))
    )
}

export default Resume