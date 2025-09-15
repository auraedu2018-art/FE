
import React from 'react';

const PuzzlePieceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.595.484-1.087 1.088-1.087h.003a1.087 1.087 0 011.087 1.087v.003a1.087 1.087 0 01-1.087 1.087h-.003A1.087 1.087 0 0114.25 6.09v-.003zM4.502 21.034a1.088 1.088 0 01-1.034-1.502 12.003 12.003 0 0119.06-7.562 1.088 1.088 0 01-1.5 1.034 9.75 9.75 0 00-16.028 6.03zM21 12a1.088 1.088 0 01-1.088 1.087h-.003a1.087 1.087 0 01-1.087-1.087v-.003a1.087 1.087 0 011.087-1.087h.003A1.087 1.087 0 0121 12v0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a1.088 1.088 0 01-1.088-1.087h.003A1.087 1.087 0 013.75 9.825v.003A1.087 1.087 0 012.665 10.913h-.003A1.087 1.087 0 013.75 12z" />
    </svg>
);

export default PuzzlePieceIcon;
