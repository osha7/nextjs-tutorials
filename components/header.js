import Link from 'next/link';

export default () => {
    <header>
        <ul>
            <li>
                <Link href='/'>
                    {/* first child always needs to be an <a> link */}
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
    </header>
}