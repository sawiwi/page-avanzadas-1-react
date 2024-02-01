import imgBanking from '../../../assets/img/carousel/slide4.jpg'


const BankingAdvice = ()=>{
return(
    <div className="grid  grid-cols-1 xl:grid-cols-2 m-2 mt-8">
        <div className="col-span-1">
            <div className="bg-secondary w-full 3xl:w-[100%] xl:min-h-[40vh] 3xl:min-h-[70vh] xl:p-5 3xl:p-16">
                <p className="text-xl xl:text-md 3xl:text-lg font-normal text-start text-primary 3xl:mt-16 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis fugiat, tenetur eius rem, architecto esse perspiciatis aperiam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe numquam amet doloremque repellendus, culpa accusantium nobis ducimus ipsam impedit praesentium accusamus enim minus sequi pariatur in soluta nam, est ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis fugiat, tenetur eius rem, architecto esse perspiciatis aperiam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe numquam amet doloremque repellendus, culpa accusantium nobis ducimus ipsam impedit praesentium accusamus enim minus sequi pariatur in soluta nam, est ab.
                </p>
            </div>
        </div>
        <div className="col-span-1">
            <img src={imgBanking} alt="" className="h-full w-full object-cover bg-primary-700/30"/>
            <div className="absolute 3xl:right-2 inset-y-0 right-0 flex items-center justify-end 3xl:w-[720px] pl-2 bg-secondary-grey bg-opacity-30">
                <div className="flex flex-col mr-2 border-r-4 h-10 border-primary">
                    <h2 className=" text-2xl font-bold xl:text-3xl 3xl:text-4xl uppercase pb-2 mb-2 mr-2 text-primary drop-shadow-lg">
                        Asesoria Bancaria
                    </h2>
                </div>
            </div>
        </div>
    </div>
)
}

export default BankingAdvice;