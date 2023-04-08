import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits:Array<BenefitType> =[
  {
    icon:<HomeModernIcon className="h-6 w-6 "/>,
    title:"State of the Art Facilities ",
    description:"We have state of art facilities"
  },
  {
    icon:<UserGroupIcon className="h-6 w-6 "/>,
    title:"100's of diverse classes ",
    description:"We have state of art facilities"
  },
  {
    icon:<AcademicCapIcon className="h-6 w-6 "/>,
    title:"State of the Art Facilities ",
    description:"We have state of art facilities"
  }

]

type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
};

const container={
  hidden:{},
  visible:{
    transition:{staggerChildren:0.2}
  }
}

const Benefits = ({setSelectedPage}: Props) => {
  return <section
  id="benefits"
  className="mx-auto min-h-full w-5/6 py-20 "
  >
    <motion.div
     onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
    >
      {/* Header */}
      <motion.div
       className="md:my-5 md:w-3/5 "
       initial="hidden "
       whileInView="visible"
       viewport={{once:true,amount:0.5}}
       transition={{duration:0.5}}
       variants={{
          hidden:{opacity:0,x:-50},
          visible:{opacity:1,x:0}
       }}
       >
        <HText> MORE THAN JUST A GYM</HText>
        <p className="my-5 text-sm ">
          We provide world class fitness equipment , trainers and classes to
          get you to your ultimate fitness goals with ease .We provide true
          care into each and every member
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div 
      className="md:flex items-center justify-between gap-8 mt-5 "
      initial="hidden"
      whileInView="visible"
      viewport={{once:true,amount:0.5}}
      variants={container}
      >
        {benefits.map((benefit:BenefitType)=>(
          <Benefit 
          key={benefit.title}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
          setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>


      {/* Graphics and description */}
          <div>
            {/* Graphic */}
            <img src="" alt="" />

            {/* Description */}
            <div>
              {/* Title */}
              <div className="relative">
                  <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstract_waves">

                  </div>
              </div>

              {/* Description */}

              {/* Button */}
            </div>
          </div>

    </motion.div>
  </section>
};

export default Benefits;
