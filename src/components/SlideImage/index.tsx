'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

interface Props {
  data: any[],
  selectedImg: number
}

const SlideImage = ({data, selectedImg}: Props) => {
  return (
    <Carousel
      selectedItem={selectedImg || 0}
      showIndicators={false}
      dynamicHeight={false}
      showThumbs={false}
      showStatus={false}
      className="w-300 h-600 "
    >
      {data.map((pic, index) => (
        <div key={`gallery-img-first-${index}`} className="rounded-lg p-1  dark:border-[2px] border-[#212425] " >
          <div className="overflow-hidden rounded-lg " >
            <img
              alt="portfolio Image"
              srcSet=""
              src={pic.url}
              width="300"
              height="600"
              decoding="async"
              data-nimg="1"
              className="w-full transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-full "
              style={{ color: "blue" }} />
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default SlideImage