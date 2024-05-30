import React from 'react';
import Modal from 'react-modal';
import { User } from '@/models/user.model';
import SlideImage from '@/components/SlideImage';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  user: User
}

const Gallery = ({ user }: Props) => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = (index: any) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };



  return (
    <div className="pt-12 " id='st-gallery' >
      <div className="flex items-center">
        <h2 className="ff-roboto-slab after-effect mr-6">
          Galleria
        </h2>
        <div className="flex-1 title-line max-w-[150px] md:max-w-[220px] lg:max-w-[300px] " />
      </div>

      <div className="pt-[40px] md:hidden" >
        <SlideImage data={user.galleryImg} selectedImg={0} />
      </div>
      <div className="pt-[40px] hidden md:flex " >
        <div className="simple-template-grid ">
          <div style={{ width: "33.3333%" }} className="simple-template-grid_column">
            {
              user.galleryImg.filter((_, index) => index % 3 === 0).map((pic: any, index: number) => {
                return (
                  <div
                    key={`gallery-img-first-${index}`}
                    className="rounded-lg p-1 md:p-4 lg:p-6  dark:border-[2px] border-[#212425] mb-4 md:mb-8"
                    style={{ background: "transparent" }}
                  >
                    <div className="overflow-hidden rounded-lg" onClick={() => openModal(index)}>
                      <img
                        alt="portfolio Image"
                        srcSet=""
                        src={pic.url}
                        width="300"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                        style={{ color: "transparent" }} />
                    </div>
                  </div>
                )
              })}
          </div>
          <div style={{ width: "33.3333%" }} className="simple-template-grid_column">
            {
              user.galleryImg.filter((_, index) => index % 3 === 1).map((pic: any, index: number) => {
                return (
                  <div
                    key={`gallery-img-secound-${index}`}
                    className="rounded-lg p-1 md:p-4 lg:p-6  dark:border-[2px] border-[#212425]"
                    style={{ background: "transparent" }}
                  >
                    <div className="overflow-hidden rounded-lg" onClick={() => openModal(index)}>
                      <img
                        alt="portfolio Image"
                        srcSet=""
                        src={pic.url}
                        width="300"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                        style={{ color: "transparent" }} />
                    </div>
                  </div>)
              })}
          </div>
          <div style={{ width: "33.3333%" }} className="simple-template-grid_column">
            {
              user.galleryImg.filter((_, index) => (index % 3 !== 0 && index % 3 !== 1)).map((pic: any, index: number) => {
                return (
                  <div
                    key={`gallery-img-therd-${index}`}
                    className="rounded-lg p-1 md:p-4 lg:p-6 dark:border-[2px] border-[#212425]"
                    style={{ background: "transparent" }}
                  >
                    <div className="overflow-hidden rounded-lg" onClick={() => openModal(index)}>
                      <img
                        alt="portfolio Image"
                        srcSet=""
                        src={pic.url}
                        width="300"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                        style={{ color: "transparent" }} />
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal'
      >

        <div className=" w-full md:w-10/12 flex items-center lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg ">
          <div className=" overflow-y-scroll max-h-[80vh] no-scrollbar ">
            <svg
              onClick={() => closeModal()}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="text-3xl cursor-pointer absolute right-2 -top-12 md:-right-10 md:-top-6 z-50 text-white transition transform hover:rotate-45 duration-300 ease-in-out "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </div>
          <Carousel
            selectedItem={selectedImageIndex || 0}
            showIndicators={false}
            dynamicHeight={true}
            showThumbs={false}
            showStatus={false}

          >
            {user.galleryImg.map((pic, index) => (
              <div key={index} className="w-500 h-500 ">
                <img
                  alt="portfolio Image"
                  srcSet=""
                  src={pic.url}
                  width="300"
                  height="300"
                  decoding="async"
                  data-nimg="1"
                  className="w-300 h-400 "
                  style={{ color: "transparent" }} />
              </div>
            ))}
          </Carousel>
        </div>
      </Modal >
    </div>
  )
}

export default Gallery