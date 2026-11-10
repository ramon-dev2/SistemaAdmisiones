type NavigationIconProps = { icon: string };

export default function NavigationIcon({ icon }: NavigationIconProps) {
  return (
    <span className="navIcon" aria-hidden>
      {icon === 'file' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" focusable="false" style={{ display: 'block' }}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6M8 13h8M8 17h6" />
        </svg>
      ) : icon}
    </span>
  );
}
