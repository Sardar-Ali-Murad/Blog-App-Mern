// The Below is without the Swiper

// import React from 'react'
// import img1 from "../../assets/grid1.png"
// import img2 from "../../assets/grid2.png"
// import img3 from "../../assets/grid3.png"
// import img4 from "../../assets/grid4.png"
// import img5 from "../../assets/grid5.png"
// import img6 from "../../assets/grid6.png"
// import "./ImageGrid.css"

// const ImageGrid = () => {
//   return (
//     <div className='imageGridMain'>
//       <img src={img1}/>
//       <img src={img2}/>
//       <img src={img3}/>
//       <img src={img4}/>
//       <img src={img5}/>
//       <img src={img6}/>
//     </div>
//   )
// }

// export default ImageGrid

import React from "react";
import img1 from "../../assets/grid1.png";
import img2 from "../../assets/grid2.png";
import img3 from "../../assets/grid3.png";
import img4 from "../../assets/grid4.png";
import img5 from "../../assets/grid5.png";
import img6 from "../../assets/grid6.png";
import "./ImageGrid.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const ImageGrid = () => {
  return (
    <div className="imageGridMain">
      <Swiper
        cssMode={true}
        // navigation={true}
        // navigation
        // pagination={true}
        // mousewheel={true}
        // keyboard={true}
        // navigation={{
        //   nextEl: ".image-swiper-button-next",
        //   prevEl: ".image-swiper-button-prev",
        //   disabledClass: "swiper-button-disabled"
        // }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="mySwiper"
        slidesPerView={4}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 2,
          },
          450: {
            width: 450,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          {" "}
          <img src={img1} style={{ marginBottom: "30px" }} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img5} />
        </SwiperSlide>
        {/* <SwiperSlide> <img src={img}/></SwiperSlide> */}
        {/* <SwiperSlide> <img src={img1}/></SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ImageGrid;
