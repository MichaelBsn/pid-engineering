import Header from "../public/components/Header"
import Footer from "../public/components/Footer"
import Head from "next/head"
import Image from "next/image"
import ren1 from '../public/images/ren_calgren_1.jpg'
import ren2 from '../public/images/ren_calgren_2.jpg'

const renewables = () => {
    return (
        <div className='App'>
            <Head>
                <title>PID - Renewables</title>
            </Head>
            <Header />
            <main>
                <h1>Renewables</h1>
                <div>
                    <h2>Calgren Dairy Fuels Biogas Receiving Facility</h2>
                    <h3>Pixley, CA</h3>
                    <Image src={ren1} alt="ren_calgren_1" />
                    <p>
                        Digester gas produced from cow manure at local dairy farms is processed at the dairy sites into
                        desulfurized and compressed (3,600 psig) biogas fuel. At some dairies, the CO2 is removed from the
                        biogas resulting in a pipeline quality renewable natural gas (RNG). The biogas, containing about 40%
                        CO2, is used for low-BTU duct-firing of a heat recovery steam generator. The RNG, at over 98% methane,
                        is injected into the local utility pipeline.

                        Depending on the dairy source, the 3,600 psig biogas and RNG are trucked to Calgren's receiving
                        station, where they are decompressed to 60 psig (duct-firing) or 450 psig (for injection into the
                        utility pipeline). PID was responsible for the design of the piping system, specification of
                        components (including heaters, regulators, instruments and control valves) and layout for use in
                        facility construction. The facility came on stream in 2020. Pictured: Delivery of biogas/RNG to
                        Calgren's receiving facility.</p>
                </div>
                <div>
                    <h2>Calgreen Dairy Fuels Biogas Plant Piping</h2>
                    <h3>Pixley, CA</h3>
                    <Image src={ren2} alt="" />
                    <p>The Calgren Dairy Fuels Biogas Plant collects manure-derived digester gas from
                        local dairies. The biogas is conveyed through an underground piping network to the plant site where
                        it is desulfurized, compressed and used as fuel for an onsite gas turbine and duct burner. Some of
                        the biogas is rendered pipeline quality by removing the CO2, further compressed and injected into
                        the local utility pipeline. PID was responsible for the piping design, layout, stress analysis and
                        development of construction drawings for the piping installation. The plant came on-stream in 2018.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default renewables