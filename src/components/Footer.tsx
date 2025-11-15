import { socialData } from "@/utils/constants";

const MENU = ["home", "about", "work"];

const Footer = ({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) => {
  return (
    <div
      className="container !py-[96px] bg-secondary-dark text-white"
      id="contact"
    >
      <div className="flex gap-[80px] mb-[64px]">
        <div className="w-[65%]">
          <h5 className="mb-8 text-lg font-bold py-5 border border-transparent border-y-white">
            GET IN TOUCH
          </h5>
          <div className="flex flex-col gap-4">
            {socialData.map((item: { title: string; link: string }) =>
              item.title === "Mail" || item.title === "Phone" ? null : (
                <a href={item.link} key={"Footer - " + item.title}>
                  {item.title}
                </a>
              )
            )}
          </div>
        </div>
        <div className="w-[35%]">
          <h5 className="mb-8 text-lg font-bold py-5 border border-transparent border-y-white">
            EXPLORE
          </h5>
          <div className="flex flex-col gap-4">
            {MENU.map((item: string) => (
              <div
                key={"footer-menu-" + item}
                className="cursor-pointer capitalize"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-5 border border-transparent border-t-white flex items-center justify-between">
        <a href="tel:+917904934040" className="flex items-center gap-1">
          <span className="sprite cell" />
          +91 7904934040
        </a>
        <a
          href="mailto:amirthabala27@gmail.com"
          className="flex items-center gap-2"
        >
          <span className="sprite email" />
          amirthabala27@gmail.com
        </a>
      </div>
      <p className="text-[10px] text-center absolute inset-x-0 bottom-5">
        © 2025 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
