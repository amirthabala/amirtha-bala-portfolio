import style from "../styles/education.module.css";
import { educationData } from "@/utils/constants";

const Education = () => {
  return (
    <div className={style.wrapper}>
      <h2 className="heading text-center">Education</h2>
      <div className="container flex flex-col flex-wrap">
        {educationData.map(
          (education: {
            institution: string;
            location: string;
            timeline: string;
            course: string;
            decription: string;
          }) => (
            <div key={education.course} className={style.educationContainer}>
              <div className={style.educationCard}>
                <div className={style.educationItem}>
                  <div>
                    <div className={style.educationTime}>
                      <p>{education.timeline}</p>
                      <p className="flex items-center">
                        <span className="sprite location-pin small" />
                        {education.location}
                      </p>
                    </div>
                    <h2 className="mb-1 text-secondary text-xl font-bold">
                      {education.institution}
                    </h2>
                    <p className="text-primary font-bold text-sm mb-3">
                      {education.course}
                    </p>
                    <p className="text-ternary text-xs">
                      {education.decription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Education;
