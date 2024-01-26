import React, {useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import Section from '../../components/Section/Section';
import PartnersComponent from "../../components/PageSections/PartnersUnne";

const PartnersUnne = () =>{
    const location = useLocation();

useEffect(() => {
    if(location.pathname === '/partnersUnne/socios-unne'){
        window.scrollTo({top:0, behavior: 'smooth'})
    }

}, [location.pathname])

    return(
        <Section className="relative flex flex-col md:flex-row">
            <Head title="Socios Unne" />
                <PartnersComponent/>
        </Section>
    )
}

export default PartnersUnne;