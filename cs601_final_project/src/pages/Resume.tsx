import { useEffect, useState } from "react"
import style from "../style/Resume.module.css"

interface Resume {
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
    const [resume, setResume] = useState<Resume>()

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
            <div className={style.section}>
                <h3>Summary</h3>
                <p>{summary}</p>
            </div>
        )
    }

    const skills = (programmingLanguages: string, frameworksLibraries: string, other: string)=>{
        return (
            <div className={style.section}>
                <h3>Skills</h3>
                <p>Programming Languages: {programmingLanguages}</p>
                <p>Frameworks/Libraries: {frameworksLibraries}</p>
                <p>Other: {other}</p>
            </div>
        )
    }

    const professionalExperience = (jobs: Job[]) => 
                <div className={style.section}>
                    <h3>Professional Experience</h3>
                    {jobs.map((job)=>{
                        return (
                            <div key={job.company+job.startMonth+job.endYear}>
                                <h4>{job.role}</h4>
                                <p>{job.company}</p>
                                <p>{job.description}</p>
                                <p>{job.startMonth} {job.startYear} - {job.endMonth} {job.endYear}</p>
                                {feats(job.feats)}
                            </div>
                        )
                    })}
                </div>

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
        <div className={style.section}>
            <h3>Education</h3>
            {educations.map((education)=>{
                return (
                    <div key={education.degree+education.endYear}>
                        <p>{education.degree}</p>
                        <p>{education.major}</p>
                        <p>{education.endMonth} {education.endYear}</p>
                        <p>{education.feat}</p>
                        <p>{education.institution}, {education.location}</p>
                    </div>
                )
            })}
        </div>
    
    const output = (resume: Resume | undefined)=>{
        if (resume){
            return (
                <div id={style.resume}>
                    <h2>Resume</h2>
                    {summary(resume.summary)}
                    {skills(resume.skills.programmingLanguages, resume.skills.frameworksLibraries, resume.skills.programmingLanguages)}
                    {professionalExperience(resume.professionalExperience)}
                    {education(resume.education)}
                </div>
            )
        } else {
            return (<div>Loading Resume</div>)
        }

    }

    return (
        (output(resume))
    )
}

export default Resume