export type Qualification = {
    id: string;
    institution: string;
    type: string;
    title: string;
    years: string;
    grade: string;
    description: string;
}

const qualifications: Qualification[] = [
    {id: "qualification-001-card",
     institution: "Edinburgh Napier University",
     type: "BSc (Hons)",
     title: "Digital Media & Interaction Design",
     years: "2018 - 2020",
     grade: "First Class (1st)",
     description: "Topics included: 3D prop modelling & organic art/animation in Maya, rigging in 3DS Max, Scripting in Unreal with BluePrints, video editing & Motion Graphics with After Effects, Premiere & Cinema4D. Used Unreal with agile methods with PRINCE3 to create a game for group project. Organised a student exhibition for Creative Computing module."
    },
    {id: "qualification-002-card",
     institution: "Edinburgh College",
     type: "HND",
     title: "3D Computer Animation",
     years: "2015 - 2017",
     grade: "Distinction",
     description: "Areas covered include: 3D prop & character modelling in Maya, sculpting in Mudbox, video editing, motion graphics & VFX, traditional media & gesture drawing. Also involved in planning and organising end-of-year exhibition."
    }
]

export default qualifications;