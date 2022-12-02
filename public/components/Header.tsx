import Link from "next/link"

const Header = () => {
    return (
        <header>
            <span className="logo">PID</span>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/fstudies'>Feasibility Studies</Link>
                <Link href='/cng'>CNG Fueling</Link>
                <Link href='/renewables'>Renewables</Link>
                <Link href='/industrial'>Industrial Projects</Link>
                <Link href='/chp'>CHP Projects</Link>
            </nav>
        </header>
    )
}

export default Header