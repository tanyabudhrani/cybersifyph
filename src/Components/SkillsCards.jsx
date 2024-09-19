import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants";

const SkillsCards = () => {
  return (
    <div className="flex">
      <LazyMotion features={domAnimation} strict>
        {skills.map((skill, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="card w-[300px] h-[300px] flex flex-col items-center bg-primary-500 rounded-xl border-4 border-primary-400 cursor-pointer"
          >
            <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col text-primary-200">
              <span
                className="text-2xl"  // Increased font size
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {skills.title}
              </span>
              <span
                className="text-center bg-primary-500 text-primary-200 rounded-xl text-lg p-4"  // Increased font size
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  fontSize: "1.1rem",  // Increased font size
                }}
              >
                {skills.description}
              </span>
              {/* Link Section */}
              {skills.link && (
                <a
                  href={skills.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-primary-200 underline"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                    fontSize: "1rem",  // Increased font size
                  }}
                >
                  Learn More
                </a>
              )}
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCards;
