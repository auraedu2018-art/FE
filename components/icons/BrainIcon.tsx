
import React from 'react';

const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.871 14.884c.06-.129.124-.257.19-.383l.01-.022c.243-.45.51-.884.797-1.298c.325-.47.674-.913 1.04-1.325C8.43 10.23 10.11 9 12 9c1.89 0 3.57 1.23 5.109 2.856c.366.412.715.855 1.04 1.325c.287.414.554.848.797 1.298l.01.022c.066.126.13.254.19.383M6 15a6 6 0 1112 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9V5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 11a2 2 0 100-4 2 2 0 000 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 11a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

export default BrainIcon;
