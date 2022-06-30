import React from "react"

const Faq = () => {
    return (
        <div className="w-full shadow">
            <div className="bgImgFaqEffect"></div>
            <div className="bgImgFaq relative h-full">
                <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center">
                    <img src="/Images/four_slider_img02.png" className="" alt="" />
                    <div className="flex flex-col items-center text-center lg:px-5">
                        <h1 className="font-semibold xl:text-8xl text-5xl my-16">FAQ</h1>
                        <p  className="lg:text-xl text-sm py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, facere rerum! Rem qui distinctio culpa, repudiandae esse exercitationem, laboriosam eveniet, odio provident officia repellendus temporibus dignissimos ea nesciunt cum. Iusto.</p>
                        <p  className="lg:text-xl text-sm py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, facere rerum! Rem qui distinctio culpa, repudiandae esse exercitationem, laboriosam eveniet, odio provident officia repellendus temporibus dignissimos ea nesciunt cum. Iusto.</p>
                        <button className="mr-5 sm:mt-10 mt-2 rounded-3xl px-10 py-2 btnEffet">Join Our Discord</button>
                    </div>
                </div>
                <img src="/Images/question.png" className="absolute -bottom-0" alt="" />
            </div>
        </div>
    )
}

export default Faq