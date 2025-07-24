import SectionTitle from "./SectionTitle";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Project from "./Project";

//images
import project1 from "./images/project1.png"
import project2 from "./images/project2.png"
import project3 from "./images/project3.png"
import project4 from "./images/project4.png";

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
    '--swiper-navigation-size': '20px',
  }

  return (
    <div 
        id="projects"
        className="w-full h-screen flex items-start justify-start relative"
    >
      <div className="w-4/5 h-4/5 bg-[#F4F1DE] flex flex-col items-start justify-start px-10 py-20">
        <SectionTitle title="My Projects." color="1" />
        <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
          <Swiper
            style={swiperStyles}
            className="w-4/5 h-2/4 flex justify-center items-center mt-28"
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            speed={500}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <Project 
                  title={item.title} 
                  image={item.image}
                  tags={item.tags}
                  url={item.url}
                />
              </SwiperSlide>
            ))}
              <div className="swiper-button-prev p-4 cursor-pointer" />
              <div className="swiper-button-next p-4 cursor-pointer" />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
