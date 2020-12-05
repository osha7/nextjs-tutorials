import Link from 'next/link';

export default () => (
    <header>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
            <li>
                <Link as="/post/first-post" href='/post/[id]'>
                    <a>First Post</a>
                </Link>
            </li>
            <li>
                <Link as="/post/second-post" href='/post/[id]'>
                    <a>Second Post</a>
                </Link>
            </li>
        </ul>
    </header>
);     