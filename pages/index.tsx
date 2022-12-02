import Head from 'next/head'
import Header from '../public/components/Header'
import Footer from '../public/components/Footer'

export default function Home() {
  return (
    <div className='App'>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <main>
        <section>
          <h1>PID Engineering</h1>
          <h2>Power and Industrial Design Corporation</h2>
          <p>
            Providing mechanical and electrical engineering design services for
            power and industrial clients.
          </p>
        </section>
        <section>
          <p>Typical industrial engineering design projects include:</p>
          <ul>
            <li>Combined heat and power (CHP) or cogeneration systems</li>
            <li>Combined cycle systems</li>
            <li>Distributed generation systems</li>
            <li>Battery Energy Storage Systems (BESS)</li>
            <li>Utility station power engineering modifications</li>
            <li>Industrial facility modifications/additions</li>
            <li>
              Compressed Natural Gas (CNG) drying, compression, storage and
              dispensing systems
            </li>
            <li>
              High temperature heat trace systems (1000F) and low temperature
              self-regulating heat trace systems
            </li>
          </ul>
        </section>
        <section>
          <p>Engineering Design services include providing:</p>
          <ul>
            <li>System design and analysis</li>
            <li>Equipment arrangement drawings</li>
            <li>Process and instrumentation diagrams</li>
            <li>Piping design and pipe stress analysis</li>
            <li>
              Mechanical and electrical equipment and instrumentation
              specifications
            </li>
            <li>Plan check support</li>
            <li>Feasibility studies</li>
            <li>Single line diagrams</li>
            <li>Wiring diagrams</li>
            <li>Grounding plans</li>
            <li>Short circuit studies</li>
            <li>Electrical coordination studies</li>
            <li>Utility interconnect support</li>
            <li>
              On-site engineering design, construction and startup support
              services
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
