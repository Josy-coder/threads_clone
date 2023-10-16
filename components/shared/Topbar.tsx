import { OrganizationSwitcher, SignIn, SignOutButton } from "@clerk/nextjs";
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
            <div className="fex iems-center gap-1">
                <div className="block md:hidden">
                    <SignIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image
                                    src="/assets/icons/logout.svg"
                                    alt="logout"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignIn>
                </div>
                <OrganizationSwitcher
                                
                />
            </div>
        </nav>
    )
}

export default Topbar;