import Image from "next/image";
import style from "../styles/hobbies.module.css";

const Hobbies = () => {
  return (
    <div className={style.containerBg}>
      <div className={`container ${style.containerWrapper}`}>
        <h2 className="heading text-center">Life Outside Work</h2>
        <div className="flex gap-4">
          <div className="w-1/2 flex-grow">
            <Image
              src="/badminton.png"
              alt="badminton"
              title="Badminton"
              width={592}
              height={600}
              className="rounded-md aspect-592/600"
            />
          </div>
          <div className="w-1/2 flex-grow flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-grow w-1/2">
                <Image
                  src="/arts-n-crafts.png"
                  alt="arts & crafts"
                  title="Arts & Crafts"
                  width={288}
                  height={288}
                  className="rounded-md aspect-square"
                />
              </div>
              <div className="flex-grow w-1/2">
                <Image
                  src="/hiking.png"
                  alt="hiking"
                  title="Hiking"
                  width={288}
                  height={288}
                  className="rounded-md aspect-square"
                />
              </div>
            </div>
            <div className="w-full">
              <Image
                src="/pencil-sketching.png"
                alt="pencil sketching"
                title="Pencil Sketching"
                width={592}
                height={296}
                className="rounded-md aspect-592/296"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
