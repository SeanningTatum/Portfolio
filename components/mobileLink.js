import Link from 'next/link';

function MobileLink({ href, name, onClick }) {
  return (
    <Link href={href}>
      <a
        className="font-medium text-gray-500 hover:text-gray-900 font-mono mb-12 text-3xl"
        onClick={onClick}

      >
        {name}
      </a>
    </Link>
  );
}

export default MobileLink;
