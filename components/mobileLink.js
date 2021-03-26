import ActiveLink from './activeLink';

function MobileLink({ href, name, onClick }) {
  return (
    <ActiveLink href={href} key={href} activeClassName="text-pink-700 hover:text-pink-700">
      <a
        className="mb-12 text-3xl font-medium text-gray-700 hover:text-gray-900 lowercase"
        onClick={onClick}

      >
        {name}
      </a>
    </ActiveLink>
  );
}

export default MobileLink;
