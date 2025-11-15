import { experienceData, skillsData } from "@/utils/constants";
import style from "../styles/journey.module.css";

const Journey = () => {
  return (
    <div className={style.containerBg}>
      <div className={`container ${style.containerWrapper}`}>
        <h2 className="heading">Journey</h2>
        <div className="flex gap-12">
          <div className="w-[60%]">
            <h4 className={style.subHeading}>Experience</h4>
            <div>
              {experienceData.map(
                (exp: {
                  company: string;
                  role: string;
                  timeline: string;
                  description: string;
                  projects: Array<{ name: string }>;
                }) => (
                  <div
                    key={`${exp.company}-${exp.role}`}
                    className={style.experienceBox}
                  >
                    <h3 className="text-secondary text-[32px] font-bold">
                      {exp.company}
                    </h3>
                    <div className="flex items-center justify-between text-primary text-xl font-bold">
                      <p>{exp.role}</p>
                      <p className="text-lg">{exp.timeline}</p>
                    </div>
                    <p className="text-ternary text-sm">{exp.description}</p>
                    <h4 className="text-primary font-bold">Projects Worked</h4>
                    <div>
                      {exp.projects.map((project: { name: string }) => (
                        <div
                          key={`${exp.role}-${project.name}`}
                          className="text-ternary text-sm mb-3 cursor-pointer"
                        >
                          <h5 className="font-bold">{project.name}</h5>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="w-[40%]">
            <h4 className={style.subHeading}>Skill Set</h4>
            <div className="flex flex-wrap gap-4">
              {skillsData.map((skill: { name: string; icon: string }) => (
                <div className={style.skillBox} key={skill.name}>
                  <div className="w-[40px] h-[40px] rounded-[50%] flex items-center">
                    <span className={`sprite skills ${skill.icon}`}></span>
                  </div>
                  <p className="text-ternary text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
