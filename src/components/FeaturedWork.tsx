import Image from "next/image";
import style from "../styles/featuredWork.module.css";
import { worksData } from "@/utils/constants";

const FeaturedWork = () => {
  return (
    <div className={style.wrapper} id="work">
      <h2 className="heading text-center">Featured Work</h2>
      <div className="container flex flex-wrap gap-12">
        {worksData.map(
          (work: {
            title: string;
            description: string;
            image: string;
            link: string;
          }) => (
            <div key={work.title} className={style.workItem}>
              <a href={work.link}>
                <div className="mb-6">
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={576}
                    height={360}
                    priority
                    className="rounded-md aspect-576/360 hover:scale-[1.02]"
                  />
                </div>
                <h2 className="mb-3 text-secondary text-3xl font-bold">
                  {work.title}
                </h2>
                <p className="text-primary">{work.description}</p>
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FeaturedWork;
