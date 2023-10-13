import Image from "next/image";
import Link from "next/link";

function Topbar() {
    return (
        <nav className="topbar">
            <Link href="/" className="flex ites-center gap-4">
                <Image src="/assets/logo_uok.png" alt="logo" width={100} height={50} />
                <p className="text-heading3-bold text-dark-1 max-xs:hidden">
                    Forum
                </p>
            </Link>
        </nav>
    )
}

export default Topbar;