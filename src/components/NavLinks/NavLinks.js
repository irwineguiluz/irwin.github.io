import NavLinkItem from '../NavLinkItem/NavLinkItem.tsx';

const NAV_LINK_ITEMS = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '#' },
  { label: 'Contact', url: '/contact' },
];

export default function NavLinks({ className }) {
  return (
    <nav className={className}>
      {NAV_LINK_ITEMS.map((item) => (
        <NavLinkItem key={item.label} label={item.label} href={item.url} />
      ))}
    </nav>
  );
}
