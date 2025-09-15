import React from 'react';
import type { ProgramShowcaseItem } from '../types';

interface CategoryIconLinkProps {
    item: ProgramShowcaseItem;
    onClick: () => void;
}

const CategoryIconLink: React.FC<CategoryIconLinkProps> = ({ item, onClick }) => {
    const colorVariants = {
        purple: {
            bg: 'bg-brand-light',
            text: 'text-brand',
            hoverBg: 'group-hover:bg-brand',
            hoverShadow: 'group-hover:shadow-brand/20',
        },
        pink: {
            bg: 'bg-accent-light',
            text: 'text-accent',
            hoverBg: 'group-hover:bg-accent',
            hoverShadow: 'group-hover:shadow-accent/20',
        },
        blue: {
            bg: 'bg-accent-blue-light',
            text: 'text-accent-blue',
            hoverBg: 'group-hover:bg-accent-blue',
            hoverShadow: 'group-hover:shadow-accent-blue/20',
        },
        green: {
            bg: 'bg-accent-green-light',
            text: 'text-accent-green',
            hoverBg: 'group-hover:bg-accent-green',
            hoverShadow: 'group-hover:shadow-accent-green/20',
        },
    };

    const colors = colorVariants[item.color || 'purple'];


    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center justify-center text-center group"
        >
            <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center transition-all duration-300 ${colors.hoverBg} ${colors.hoverShadow} group-hover:shadow-lg`}>
                <item.icon className={`w-8 h-8 ${colors.text} group-hover:text-white transition-colors`} />
            </div>
            <p className={`mt-3 text-sm font-semibold text-slate-700 group-hover:${colors.text} transition-colors`}>{item.title}</p>
        </button>
    );
};

export default CategoryIconLink;