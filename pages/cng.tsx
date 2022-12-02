import Header from "../public/components/Header"
import Head from "next/head"
import Footer from "../public/components/Footer"

const cng = () => {
    return (
        <div className='App'>
            <Head>
                <title>PID - CNG Fueling</title>
            </Head>
            <Header />
            <main>
                <h1>CNG Fueling</h1>
                <div>
                    <h2>San Diego Gas & Electric</h2>
                    <h3>San Diego, CA</h3>
                    <p>PID provided the mechanical and electrical design engineering for the installation of
                        CNG time-fill and public fast-fill fueling stations at several sites for the Southern California Gas
                        Company and San Diego Gas & Electric at the following bases:</p>
                    <ul>
                        <li>Anaheim</li>
                        <li>Azusa</li>
                        <li>Chino</li>
                        <li>Compton</li>
                        <li>Downey</li>
                        <li>Huntington Park</li>
                        <li>Garden Grove</li>
                        <li>Glendale</li>
                        <li>La Jolla</li>
                        <li>Miramar</li>
                        <li>Oxnard</li>
                        <li>Palm Desert</li>
                        <li>Redondo Beach</li>
                        <li>Riverside</li>
                        <li>San Bernardino</li>
                        <li>San Pedro</li>
                        <li>Santa Barbara</li>
                        <li>Santa Monica</li>
                        <li>Seal Beach</li>
                        <li>Yukon</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default cng