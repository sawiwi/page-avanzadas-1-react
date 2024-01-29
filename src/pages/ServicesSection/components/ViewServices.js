import React, {useState} from "react";
import Section from "../../../components/Section/Section";
import { CardServicesData } from "../../../data";
import Button from "../../../components/Button/Button";

const ViewServices = () =>{


    return (
        <Section>
             <div className="container 3xl:px-24">
                <h2 className="mt-12 my-10 text-secondary-700 xl:text-2xl">Servicios</h2>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
                    {CardServicesData ? CardServicesData.map((item, idx) => {
                        return(
                        <div className="col-span-1 hover:scale-105 duration-300" key={idx}>
                            <div className="card shadow-xl bg-secondary p-2 rounded-md 3xl:min-h-[18.5rem]">
                                <div className="mt-6 py-5 3xl:text-6xl text-primary flex justify-center">
                                    {item.icon} 
                                </div>
                                <div className="py-2 mt-2">
                                    <h2 className="text-primary text-center text-xl">{item.title}</h2>
                                </div>
                                <div className="card-body">
                                    { item.button ? <button className="bg-primary text-secondary-800 p-2">
                                                    Completar formulario
                                            </button> : 
                                            <button className="bg-primary text-secondary-800 p-2">
                                                Ver más
                                            </button>}
                                  
                                </div>
                            </div>
                        </div>
                        )
                    }):''
                }

    
                </div>

             </div>
        </Section>
    )
}

export default ViewServices;