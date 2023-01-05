import React from 'react';
import logo1 from '../../images/time.webp';
import logo2 from '../../images/nytimes.webp';
import logo3 from '../../images/cbs_news.webp';
import logo4 from '../../images/fiancial_times.webp';
import logo5 from '../../images/bbc_news.webp';
import logo6 from '../../images/nbc.webp';
import logo7 from '../../images/fox_news.webp';


const news_section = () => {
    return (
        <div>
            <div className="bg-[#f8f8f8] h-full ">
                <div className='md:w-10/12 mx-auto'>
                    <div className='   text-center mb-4'>
                        <p className=' text-6xl '> In the news</p>
                        <a href='' className='text-lg font-light underline text-[#4F0C81]'>view more articles</a>
                    </div>
                    <div className=' w-full md:flex md:text-left sm:text-center mb-10 '>
                        <div className=' relative md:flex-1  p-8'>
                            <p className=' text-4xl mb-2 '>LA Times</p>
                            <p className='font-light mb-10'>
                                Many New Year’s resolutions are only half-intended from the get-go. But if you’re serious about improving your health or fitness, a commitment contract can give you hundreds of reasons to see it through each week.
                            </p>
                            <button className=' md:absolute left-8 bottom-0 text-lg font-semibold rounded-full w- bg-[#ff7900] px-6 py-2 text-white text-center'>read more</button>
                        </div>
                        <div className='relative md:flex-1 p-8'>
                            <p className=' text-4xl mb-2 '>Scientific American</p>
                            <p className='font-light mb-10'>
                                To take one notable example, on the commitment contract website stickK.com, users put down some money (say, $200) and state a goal they want to achieve (such as to lose ten pounds in a month). They also need to state what will happen to the money if they don’t stick to their commitments (eg, it’ll go to a friend or to a charity they do not like).
                            </p>
                            <button className=' md:absolute left-8 bottom-0 text-lg font-semibold rounded-full w- bg-[#ff7900] px-6 py-2 text-white text-center'>read more</button>
                        </div>
                        <div className=' relative md:flex-1 p-8 '>
                            <p className=' text-4xl mb-2'>Inc.com</p>
                            <p className='font-light mb-10 '>
                                ...stickK, the app that promises to help you achieve life, business, health, and career goals. Created by behavioral economists at Yale University, the free goal-setting platform influences behavior change through loss aversion and accountability.
                            </p>

                            <button className=' md:absolute left-8 bottom-0 text-lg font-semibold rounded-full w- bg-[#ff7900] px-6 py-2 text-white text-center'>read more</button>

                        </div>
                    </div>

                    <div className='md:flex justify-between p-8 grid grid-cols-4 '>
                        <div>
                            <img  src={logo1} />
                        </div>
                        <div>
                            <img  src={logo2} />
                        </div>
                        <div>
                            <img  src={logo3} />
                        </div>
                        <div>
                            <img  src={logo4} />
                        </div>
                        <div>
                            <img  src={logo5} />
                        </div>
                        <div>
                            <img  src={logo6} />
                        </div>
                        <div>
                            <img  src={logo7} />
                        </div>
                        

                    </div>

                </div>


            </div>



        </div>
    );
};

export default news_section;