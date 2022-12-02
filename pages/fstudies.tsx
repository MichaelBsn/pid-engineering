import Header from "../public/components/Header"
import Head from "next/head"
import Footer from "../public/components/Footer"

const fstudies = () => {
    return (
        <div className='App'>
            <Head>
                <title>PID - Feasibility Studies</title>
            </Head>
            <Header />
            <main>
                <h1>Feasibility Studies</h1>
                <div>
                    <p>
                        PID Engineering performs cogeneration feasibility studies with typical deliverables including the
                        development of electrical and thermal load profiles, conceptual plant design, equipment layout, flow
                        diagrams, electrical single line diagrams and budget cost estimates for engineering, construction,
                        equipment and O&M.</p>
                    <div>
                        <h2>Studies have been performed for:</h2>
                        <ul>
                            <li>Johnson & Johnson (La Jolla, CA)</li>
                            <li>Novartis (La Jolla, CA)</li>
                            <li>Kyocera America, Inc. (San Diego)</li>
                            <li>University of California San Diego (UCSD)</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default fstudies