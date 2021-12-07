import React from 'react'

const Card = () => {
    return (
        <div className="md:flex p-2  md:items-center md:justify-center w-screen h-screen">
            <div classNameName="bg-white bg-opacity-75 duration-500 rounded-xl mb-2 h-4/5 md:h-auto mb-2  shadow-lg lg:transform  hover:scale-105 ">
                <div className="">
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--JXlFx1ne--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/f30hrij5h3j7gt2klbcu.jpg" className="w-full  h-52 rounded-t-xl" />
                </div>
                <div className="p-3 space-y-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegOQH2mkVKDWO2lsLTCUFeFjG5gtX0st22johXR66_gqxwonI9j-K0LFz5dX4qIDZlGg&usqp=CAU" className="w-12 h-12 rounded-full inline-block transform " />
                        <h1 className="font-bold text-2xl text-blue-800 inline-block m-2">Admin</h1><br/>
                    <div className ="space-y-10">
                        <p className ="font-mono text-xl "><i className ="fas fa-feather-alt"></i>&nbsp Tailwind css usage</p>
                    </div>
                        <div className ="space-x-5">
                            <button  className ="bg-white- border-2 border-green-600 text-green-600  inline-block hover:bg-green-600 hover:text-white rounded-2xl  p-2">View &nbsp; <i className ="fad fa-long-arrow-right"/></button>
                        </div>
                    <div>
                        <p className ="text-gray-600 inline-block italic float-left font-medium">Time 10: 05</p>
                        <p className ="text-gray-600 inline-block italic font-medium float-right">Date 14.05.2021</p>
                    </div>                
            </div>
        </div>
    </div >
    )
}

export default Card
