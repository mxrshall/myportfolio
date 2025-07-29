import SectionTitle from "./SectionTitle";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from "motion/react";
import 'swiper/css';
import 'swiper/css/navigation';
import Project from "./Project";

//images
import project1 from "./images/project1.png"
import project2 from "./images/project2.png"
import project3 from "./images/project3.png"
import project4 from "./images/project4.png"
import project5 from "./images/project5.png"

export default function Projects() {

  const projects = [
    { 
      title: "E-Travel",
      image: project1,
      tags: ["JavaScript", "ReactJS"],
      url: "https://mxrshall.github.io/E-Travel/"
    },
    { 
      title: "Aikido Vsetín",
      image: project2,
      tags: ["WordPress"],
      url: "https://aikidovsetin.cz/"
    },
    {
      title: "IsJustice",
      image: project5,
      tags: ["JavaScript", "ReactJS"],
      url: "https://www.isjustice.sk/"
    },
    { 
      title: "MakyGarage",
      image: project3,
      tags: ["WordPress"],
      url: "https://www.makygarage.sk/"
    },
    { 
      title: "FocusIQ",
      image: project4,
      tags: ["JavaScript", "ReactJS", "Extension"],
      url: "https://mxrshall.github.io/focusTabweb/"
    }
  ];

  const swiperStyles = {
    '--swiper-navigation-color': 'black',
    '--swiper-pagination-color': 'black',
    '--swiper-navigation-size': '28px',
  }

  return (
    <div 
        id="projects"
        className="w-full h-screen flex items-start justify-start relative"
    >
      <div className="w-4/5 h-4/5 bg-[#F4F1DE] flex flex-col items-start justify-start px-10 py-20">
        <SectionTitle title="My Projects." color="1" />
        <motion.div 
          className='w-full h-full absolute top-0 left-0 flex justify-center items-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
        >
          <Swiper
            style={swiperStyles}
            className="w-[90%] h-2/4 flex justify-center items-center mt-28"
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            loop={true}
            speed={500}
            autoplay={{
              delay: 3000,             
              disableOnInteraction: false, 
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {projects.map((item, index) => (
              <SwiperSlide 
                key={index}
                className="flex justify-center items-center"
              >
                <Project 
                  title={item.title} 
                  image={item.image}
                  tags={item.tags}
                  url={item.url}
                />
              </SwiperSlide>
            ))}
              <div className="swiper-button-prev pr-28 cursor-pointer" />
              <div className="swiper-button-next pl-28 cursor-pointer" />
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}
