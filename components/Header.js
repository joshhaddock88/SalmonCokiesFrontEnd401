import Link from 'next/link'

function Header() {
    return (
        <>
            <header>
                <h1 id="headerText">Cookie Stand Admin</h1>
                <Link id="overView" href="/overview"><a>Overview</a></Link>
            </header>
        </>
    )
}

export default Header;