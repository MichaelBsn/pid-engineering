import Header from "../public/components/Header"
import Footer from "../public/components/Footer"
import Head from "next/head"
import Image from "next/image"
import chpCalgren from '../public/images/chp_calgren_pixley.jpg'
import chpTipton from '../public/images/chp_californiadairies_tipton.jpg'
import chpCrmcfresno from '../public/images/chp_CRMC_Fresno.jpg'
import chpFullerton from '../public/images/chp_csufullerton_fullerton.jpg'
import chpJnj from '../public/images/chp_jnj_lajolla.jpg'
import chpKyocera from '../public/images/chp_kyocera_sandiego.jpg'
import chpLax from '../public/images/chp_lax_la.jpg'
import chpNyp from '../public/images/chp_nypresbyterian_nyc.jpg'
import chpNyu from '../public/images/chp_nyu_nyc.jpg'
import chpPixley from '../public/images/chp_pixley_pixley.jpg'
import chpPratt from '../public/images/chp_prattenergy_pratt.jpg'
import chpVa from '../public/images/chp_vahospital_lajolla.jpg'
import chpWhitewave from '../public/images/chp_whitewave_coi.jpg'

const chp = () => {
    return (
        <div className='App'>
            <Head>
                <title>PID - CHP</title>
            </Head>
            <Header />
            <main>
                <h1>CHP Projects</h1>
                <div className='card'>
                    <div></div>
                    <div className='card-content'>
                        <h2>Community Regional Medical Center CHP</h2>
                        <h3>Fresno, CA</h3>


                        <p>PID Engineering provided mechanical and electrical engineering design
                            services for a combined
                            heat
                            and power plant to be constructed at Community Regional Medical Center in Fresno, CA. A
                            Solar
                            Turbines, Inc. Centaur 50 gas turbine will produce 4.5 MWe with the exhaust heat to be
                            used
                            for
                            produce 25,000 lb/hr of saturated steam at 120 psig.</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpPratt} alt="Pratt Energy, LLC CHP Plant" />
                    <div className='card-content'>
                        <h2>Pratt Energy, LLC CHP Plant</h2>
                        <h3>Pratt, KS</h3>
                        <p>PID Engineering provided mechanical and electrical design for the
                            fast-track installation of
                            a
                            CHP plant to serve the Pratt Biofuel Investors/Scoular Company ethanol plant in Pratt,
                            KS.
                            Major
                            plant equipment consisted of a Solar Turbines Taurus 60 gas turbine and an un-fired
                            Rentech
                            HRSG
                            to produce 5.2 MWe and 26,500 lb/hr of 145 psig saturated steam, respectively. Scope
                            included
                            development of P&ID's, electrical single line diagrams, plant equipment layout,
                            piping/duct
                            design and stress analysis and related construction drawings and specification.</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpCalgren} alt="Calgren Renewable Fuels CHP Plant Upgrade" />
                    <div className='card-content'>
                        <h2>Calgren Renewable Fuels CHP Plant Upgrade</h2>
                        <h3>Pixley, CA</h3>

                        <p>PID Engineering provided engineering design services for the addition
                            of a
                            5.6 MWe Solar Taurus 60 gas turbine and HRSG at the Calgren Renewable Fuels, LLC, plant
                            in
                            Pixley,California. The plant is capable of producing 130,000 lb/hr of 150 psig saturated
                            steam. The power and steam is for use at the adjacent Calgren Ethanol Plant. The HRSG
                            duct
                            burner is partially fired with manure digester gas. Commissioning was completed in 2014.
                            Pictured: Gas turbine and HRSG.</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpKyocera} alt="Kyocera America International CHP Plant Repowering" />

                    <div className='card-content'>
                        <h2>Kyocera America International CHP Plant Repowering</h2>
                        <h3>San Diego, CA</h3>
                        <p>
                            PID Engineering provided mechanical, electrical, structural and architectural design
                            services for the repowering of Kyocera's existing 3,200 kWe CHP plant. The new plant
                            employs
                            two Caterpillar reciprocating generator sets to produce a gross 3,600 kWe for use at
                            Kyocera's facility. Waste heat from the gensets will be used to produce 960 tons of
                            chilled
                            water in new hot water absorption chillers. Pictured: Caterpillar 3520 genset.</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpLax} alt="Los Angeles International Airport CHP Plant" />
                    <div className='card-content'>
                        <h2>Los Angeles International Airport CHP Plant</h2>
                        <h3>Los Angeles, CA</h3>

                        <p>PID Engineering is providing mechanical design consulting services for
                            the
                            CHP plant portion of a central utility plant replacement at Los Angeles International
                            airport. The plant will consist of two (2) Solar Mercury 50 gas turbines exhausting into
                            two
                            (2) duct-fired HRSG's which will produce up to 90,000 lb/hr of 150 psig saturated steam
                            for
                            use in the airport terminal heating and cooling systems. The combined 8,800 kWe gross
                            output
                            of the gas turbines will be used on site, with backup power provided by the local
                            utility,
                            the Los Angeles Department of Water and Power.</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpNyu} alt="New York University Langone Medical Center CHP Plant" />
                    <div className='card-content'>
                        <h2>New York University Langone Medical Center CHP Plant</h2>
                        <h3>New York, NY</h3>
                        <p>PID Engineering is providing mechanical and electrical design services
                            for
                            the CHP plant for the new Energy Building planned for construction at New York
                            University's
                            Langone Medical
                            Center. The plant will consist of an 8 MWe gas turbine exhausting into a HRSG to produce
                            up
                            to 150,000 lb/hr of 150 psig, saturated steam. Pictured: Steel for the Energy Building
                            coming up out of the ground for the NYU Langone Medical Center.</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpFullerton} alt="California State University Fullerton CHP Facility" />
                    <div className='card-content'>
                        <h2>California State University Fullerton CHP Facility</h2>
                        <h3>Fullerton, CA</h3>
                        <p>
                            Provided design services for the CHP Plant for California State University at Fullerton.
                            The
                            plant consists of a 4.4 MWe Solar Mercury 50 gas turbine exhausting directly into two
                            1300-ton absorption chillers and is be capable of simultaneously generating electric
                            power,
                            chilled water and hot water for use on-campus. Mechanical and electrical engineering
                            design
                            were performed in house, with structural and architectural design performed on a
                            subcontract
                            basis. Pictured: CSUF CHP Building under construction.</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpNyp} alt="New York Presbyterian Hospital CHP Plant" />
                    <div className='card-content'>
                        <h2>New York Presbyterian Hospital CHP Plant</h2>
                        <h3>New York, NY</h3>
                        <p>
                            PID Engineering provided mechanical and electrical engineering design services for the
                            installation of a Solar Turbines Taurus 70 gas turbine exhausting into a duct-fired
                            HRSG.
                            The system generates 7,500 kWe of electric power and 70,000 lb/hr of 175 psig steam for
                            the
                            Hospital's on-site use. Pictured: New York Presbyterian Hospital</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpPixley} alt="Pixley CHP Facility" />
                    <div className='card-content'>
                        <h2>Pixley CHP Facility</h2>
                        <h3>Pixley, CA</h3>
                        <p>PID Engineering provided engineering design services for the 5.8 MWe
                            Pixley
                            CHP Plant in Pixley, California. The plant operates solely in island mode and consists
                            of a
                            Solar Taurus 65 gas turbine with an HRSG producing 130,000 lb/hr of 150 psig saturated
                            steam. The power and steam is provided to the adjacent Calgren Ethanol Plant. Mechanical
                            and
                            electrical engineering design were performed in house, with structural, civil and
                            architectural design performed on a subcontract basis. Pictured: Pixley GT and HRSG</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpVa} alt="Veterans Affairs Medical Center CHP Plant" />
                    <div className='card-content'>
                        <h2>Veterans Affairs Medical Center CHP Plant</h2>
                        <h3>La Jolla, CA</h3>
                        <p>
                            PID Engineering provided mechanical and electrical engineering design services for the
                            4.2 MWe La Jolla Veterans Affairs Medical Center CHP plant upgrade in San
                            Diego,California. The plant consists of a Solar Mercury 50 gas turbine with an HRSG
                            producing steam for central plant use. Scope included development of P&ID's, general
                            arrangement drawings, piping drawings, single line diagrams, wiring diagrams, equipment
                            specifications and performing piping stress analysis and electrical short
                            circuit/coordination studies. Click on links for articles. Pictured: Veterans Affairs
                            Medical Center, La Jolla, CA.</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpTipton} alt="California Dairies CHP Plant" />
                    <div className='card-content'>
                        <h2>California Dairies CHP Plant</h2>
                        <h3>Tipton, CA</h3>
                        <p>
                            PID provided the engineering for the installation of a 4.4 MWe Centaur 50 gas turbine
                            generator set, HRSG, SCR, inlet cooling system, switchgear and controls for the
                            California Dairies facility in Tipton, CA. Scope included developing P&ID’s, equipment
                            arrangements, piping design, performing piping stress analysis, specifying primary
                            instrument elements, single line diagrams, power wiring, controls wiring, grounding,
                            wiring diagrams and schematics. Pictured: Cal Dairies CHP Plant</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpJnj} alt="Johnson & Johnson CHP Plant" />
                    <div className='card-content'>
                        <h2>Johnson & Johnson CHP Plant</h2>
                        <h3>La Jolla, CA</h3>
                        <p>
                            PID Engineering performed engineering design for the installation of 2.2 MWe of CHP at
                            Johnson & Johnson's Pharmaceutical Research Institute in La Jolla, CA.
                            Using the results of a feasibility study performed by PID Engineering, J&J elected to
                            install two 1,100 kWe reciprocating generator sets to provide power to their facility.
                            Waste heat from the engines is utilized to produce chilled water and heating hot water
                            for facility HVAC loads.
                            PID Engineering's study phase responsibilities included the development of electrical
                            and thermal load profiles, conceptual plant design, equipment layout, flow diagrams,
                            electrical single line diagrams and budget cost estimates for engineering, construction,
                            equipment and O&M.
                            PID Engineering's detailed design phase responsibilities included process and
                            instrumentation diagrams, equipment and piping layout, single line diagrams, wiring
                            diagrams, interface with SDG&E for the electrical interconnect application, construction
                            support and startup support.</p>
                    </div>
                </div>
                <div className='card'>
                    <Image src={chpWhitewave} alt="White Wave CHP Plant" />
                    <div className='card-content'>
                        <h2>White Wave CHP Plant</h2>
                        <h3>City of Industry, CA</h3>
                        <p>
                            PID Engineering provided mechanical and electrical engineering design services to Energy
                            & Power Solutions for the 2 MWe White Wave (Dean Foods) CHP plant installation in the
                            City of Industry, California. Exhaust from the 2 MWe Jenbacher engine/generator set is
                            used to generate steam and hot water for use in White Wave's dairy product processing.
                            Pictured: Setting the 2 MWe Jenbacher genset on its foundation.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <h2>San Diego State University CHP Plant</h2>
                        <h3>San Diego, CA</h3>
                        <p>PID Engineering provided mechanical engineering design services for the
                            14 MWe SDSU CHP plant upgrade in San Diego, California. SDSU installed two Solar Taurus
                            T60 gas turbines, each with an HRSG/SCR producing steam for central plant use and for
                            use in a steam turbine for additional power generation. Scope included development of
                            the P&ID's, mechanical specifications, general arrangement drawings, piping drawings,
                            and performing piping stress analysis.</p>
                    </div>
                </div>
                <div className='card'>
                    <h2>Miller Brewing Company CHP Plant</h2>
                    <h3>Azusa, CA</h3>

                    <p>PID Engineering provided mechanical and electrical engineering design
                        services to Solar Turbines, Inc. for the 10 MWe Miller Brewing Co. CHP plant
                        installation in Irwindale, California. Scope included development of P&ID's, general
                        arrangement drawings, piping drawings, single line diagrams, wiring diagrams, equipment
                        specifications and performing piping stress analysis and electrical short
                        circuit/coordination studies.</p>
                </div>
                <div className='card'>
                    <h2>University of California San Diego CHP Plant</h2>
                    <h3>San Diego, CA</h3>

                    <p>PID Engineering provided mechanical engineering services for the UCSD
                        CHP plant upgrade. The installation includes two 13.5 MWe Solar Titan gas turbines, each
                        exhausting into a dedicated HRSG. Mechanical services included P&ID development, piping
                        design and thermal pipe stress calculations. Pictured: Gas turbine/HRSG building at
                        UCSD.</p>
                </div>

                <div className='card'>
                    <h2>200 kWe Microturbine CHP System</h2>
                    <h3>San Diego, CA</h3>
                    <p>PID Engineering provided mechanical and electrical design engineering
                        services for the installation of two 100 kWe microturbine CHP systems at the Hilton
                        Hotel Mission Valley, San Diego, CA. Responsibilities included equipment arrangement
                        drawings, gas and hot water piping design, CHP equipment specification, electrical
                        single-line diagram, wiring diagrams and providing support for electrical
                        interconnection issues.</p>
                </div>
                <div className='card'>
                    <h2>Various Packaged-Reciprocating Engine CHP Plants</h2>
                    <p>PID Engineering provided mechanical and electrical engineering and
                        design services for several Hess Microgen packaged reciprocating engine/generator sets
                        in CHP applications. The plants have ranged in size from 140 kWe to 1,400 kWe. Plant
                        sites have included resorts, schools, office buildings, manufacturing plants and
                        residential facilities. Waste heat uses have included chilled water production via
                        absorption chillers; hot water for space, domestic and process heating and steam
                        production.</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default chp