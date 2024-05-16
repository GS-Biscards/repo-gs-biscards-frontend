import React from 'react'
import Modal from 'react-modal';
import { User } from '@/models/user.model';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  user?: User;
}

const Portfolio = ({ user }: Props) => {
  return (
    <>
    
			<div className="foliox_tm_portfolio w-full h-auto clear-both float-left mb-[150px]">
				<div className="container-foliox">
					<div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
						<span className="text-[21px] ff-poppins text-extra-color font-medium inline-block mb-[5px]">Galería</span>
						<h3 className="text-[48px]">What I Do for My Clients</h3>
					</div>
					<div className="portfolio_filter w-full h-auto clear-both float-left text-center mt-[60px] mb-[55px]">
						<ul>
							<li className="mr-[35px] inline-block"><a href="#" className="current text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color" data-filter="*">Todo</a></li>
							<li className="mr-[35px] inline-block"><a className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color" href="#" data-filter=".youtube">Youtube</a></li>
							<li className="inline-block"><a className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color" href="#" data-filter=".content">Content</a></li>
						</ul>
					</div>
					<div className="portfolio_list wow fadeInUp w-full h-auto clear-both float-left" data-wow-duration="1s" data-wow-delay="0.2s">
						<ul className="gallery_zoom ml-[-13px] flex flex-wrap">
							<li className="youtube mb-[13px] pl-[13px] w-1/3">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative overflow-hidden">
									<div className="image relative">
										<img className="relative opacity-0 min-w-full" src="asset/hero/avatar.png" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[12px]" data-img-url="assets/img/portfolio/1.jpg"></div>
									</div>
									<div className="details absolute z-[2] bottom-[20px] left-[20px] right-[20px] bg-[#1e1345] p-[20px] rounded-[12px] translate-y-[125%] transition-all duration-300">
										<h3 className="text-[20px] mb-[2px]">Axe Droow</h3>
										<span className="text-[16px]">Youtube</span>
									</div>
									<a className="foliox_tm_full_link absolute inset-0 z-[5] popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas"></a>
								</div>
							</li>
	
							<li className="content mb-[13px] pl-[13px] w-1/3">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative overflow-hidden">
									<div className="image relative">
										<img className="relative opacity-0 min-w-full" src="asset/hero/avatar.png" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[12px]" data-img-url="assets/img/portfolio/6.jpg"></div>
									</div>
									<div className="details absolute z-[2] bottom-[20px] left-[20px] right-[20px] bg-[#1e1345] p-[20px] rounded-[12px] translate-y-[125%] transition-all duration-300">
										<h3 className="text-[20px] mb-[2px]">Creative Design</h3>
										<span className="text-[16px]">Content</span>
									</div>
									<a className="foliox_tm_full_link absolute inset-0 z-[5] portfolio_popup" href="#"></a>
									
                  
									<div className="hidden_content hidden opacity-0 invisible absolute z-[-11]">
										<div className="popup_details w-full h-auto clear-both float-left">
											<div className="main_details w-full h-auto clear-both flex mb-[60px]">
												<div className="textbox w-[70%] pr-[40px]">
													<p className="mb-[15px]">We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible.</p>
													<p>Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they phase when they will represent the target product. Building mockups strikes the ideal balance ease of modification.</p>
												</div>
												<div className="detailbox w-[30%] pl-[40px]">
													<ul>
														<li className="mb-[10px] w-full float-left">
															<span className="first font-medium text-[18px] block text-white font-poppins">Client</span>
															<span className="text-[16px]">Alvaro Morata</span>
														</li>
														<li className="mb-[10px] w-full float-left">
															<span className="first font-medium text-[18px] block text-white font-poppins">Category</span>
															<span className="text-[16px]"><a className="text-main-color" href="#">Content</a></span>
														</li>
														<li className="w-full float-left">
															<span className="first font-medium text-[18px] block text-white font-poppins">Date</span>
															<span className="text-[16px]">January 07, 2023</span>
														</li>
													</ul>
												</div>
											</div>
											<div className="additional_images w-full h-auto clear-both float-left">
												<ul className="ml-[-30px]">
													<li className="mb-[30px] float-left pl-[30px]">
														<div className="list_inner w-full h-auto clear-both float-left relative">
															<div className="my_image relative">
																<img className="opacity-0 min-w-full" src="asset/hero/avatar.png" alt="" />
																<div className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[12px]" data-img-url="assets/img/portfolio/1.jpg"></div>
															</div>
														</div>
													</li>
													<li className="mb-[30px] float-left pl-[30px]">
														<div className="list_inner w-full h-auto clear-both float-left relative">
															<div className="my_image relative">
																<img className="opacity-0 min-w-full" src="asset/hero/avatar.png" alt="" />
																<div className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[12px]" data-img-url="assets/img/portfolio/2.jpg"></div>
															</div>
														</div>
													</li>
													<li className="mb-[30px] float-left pl-[30px]">
														<div className="list_inner w-full h-auto clear-both float-left relative">
															<div className="my_image relative">
																<img className="opacity-0 min-w-full" src="asset/hero/avatar.png" alt="" />
																<div className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[12px]" data-img-url="assets/img/portfolio/3.jpg"></div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
									
									
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
    
    </>

  )
}

export default Portfolio;
