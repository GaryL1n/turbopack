import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-500 p-5">
            <p className="font-bold text-white">I am Header</p>
            <Link href="/todos" className="rounded-lg bg-white px-2 py-1 text-blue-500">
                Todos
            </Link>
        </header>
    );
};

export default Header;
