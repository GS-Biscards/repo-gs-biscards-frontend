"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const templates = [
    {
        title: "template 1",
        src: 'asset/images/landing-page/template1.png'
    },
    {
        title: "template 2",
        src: 'asset/images/landing-page/template2.png'
    },
    {
        title: "template 1",
        src: 'asset/images/landing-page/template1.png'
    },
    {
        title: "template 2",
        src: 'asset/images/landing-page/template2.png'
    },
    {
        title: "template 1",
        src: 'asset/images/landing-page/template1.png'
    },
    {
        title: "template 2",
        src: 'asset/images/landing-page/template2.png'
    }
]

const ProductsSections = () => {

    const groupedItems = templates.reduce((result: any, item: any, index: number) => {
        const chunkIndex = Math.floor(index / 4);
        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }

        result[chunkIndex].push(item);

        return result;
    }, []);

    return (
        <section id='home-products'>
            < div className='flex flex-col w-full items-center p-5 lg:p-20 '>
                <h1 className="ff-arvo text-[20px] lg:text-[42px] text-[#273732] ">
                    Templates
                </h1>
                <span className='ff-lato text-[16px] lg:text-[20px] text-[#515F5A]'>
                    Nuestra selección de plantillas para que elijan es cada vez mas completa y mas linda!
                </span>
                <div className='mt-8'>
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        showArrows={true}
                        renderIndicator={(onClickHandler, isSelected, index) => {
                            return (
                                <div
                                    onClick={onClickHandler}
                                    key={index}
                                    role="button"
                                    tabIndex={0}
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '6px',
                                        backgroundColor: isSelected ? '#3B6978' : '#AAC5C5',
                                        margin: '0px 6px',
                                        cursor: 'pointer',
                                        display: 'inline-block',
                                        transition: 'background-color 0.6s ease',

                                    }}
                                />
                            )
                        }}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button 
                                type="button" 
                                onClick={onClickHandler} 
                                title={label} 
                                style={{  position: 'absolute', top: "50%", left: 0, zIndex: "2" }}
                                className='ff-lato flex justify-center items-center bg-[#3B6978] h-[40px] w-[40px] rounded-[6px] text-[#FFF] text-[40px]'
                                >
                                    {'<'}
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button 
                                type="button" 
                                onClick={onClickHandler} 
                                title={label} 
                                style={{ position: 'absolute', top: "50%", right: 0, zIndex: "2" }}
                                className='ff-lato flex justify-center items-center bg-[#3B6978] h-[40px] w-[40px] rounded-[6px] text-[#FFF] text-[40px]'
                                >
                                    {'>'}
                                </button>
                            )
                        }

                    >
                        {groupedItems.map((group: any[], groupIndex: number) => (
                            <div key={groupIndex} className='flex flex-row justify-evenly '>
                                {
                                    group.map((temp: any, index: number) => {
                                        return (
                                            <div key={`tempalte-item-${index}`}
                                                className='h-[464px] w-[272px] flex flex-col items-center p-4 bg-[#82AAAA]'
                                            >
                                                <div className='mb-4'>
                                                    <button className='w-[180px] h-[56px] rounded-[28px] bg-[#3B6978] ff-lato text-white text-md font-semibold'>
                                                        {temp.title}
                                                    </button>
                                                </div>
                                                <div>
                                                    <img
                                                        src={temp.src}
                                                        alt="Sobre_nosotros/png"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        )

                                    })
                                }

                            </div>))}
                    </Carousel>
                </div>
            </div>


        </section>
    )
}

export default ProductsSections