import Link from "next/link"
import "../style/style.css"

function Nav(){
    return (
        <div className="navbar">
            <Link href="/About" >About us</Link>
            <Link href="/Contact" >Contact us</Link>
            <Link href="/Log" >Sign in</Link>
        </div>
    )
}export default Nav