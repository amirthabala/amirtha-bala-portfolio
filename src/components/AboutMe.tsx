import { socialData } from "@/utils/constants";
import style from "../styles/aboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={style.containerBg}>
      <div className={`container ${style.containerWrapper}`}>
        <div className="w-[65%]">
          <p className="text-primary text-lg mb-4 flex items-center gap-1">
            <span className="sprite location-pin" />
            Based in Bangalore
          </p>
          <h2 className="text-secondary text-[78px] leading-[78px] font-bold">
            Amirtha Varshini Balasubramanian
          </h2>
        </div>
        <div className="w-[35%] pt-[13%]">
          <p className="text-primary text-lg mb-6">
            Experienced React.js Developer (4+ years) evolving into Data Science
            & AI/ML. I combine solid engineering foundations with a passion for
            intelligent systems and data-driven problem solving.
          </p>
          <div className="flex flex-wrap gap-4">
            {socialData.map(
              (item: { title: string; link: string; icon: string }) => (
                <div key={item.title}>
                  <a
                    className={style.socialIconsBox}
                    href={item.link}
                    title={item.title}
                  >
                    <span className={`sprite social-icons ${item.icon}`} />
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
