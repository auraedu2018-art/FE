import React from 'react';
import type { ProgramShowcaseItem } from '../types';

interface ProgramCardProps {
    item: ProgramShowcaseItem;
    onClick: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ item, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="bg-white p-6 rounded-2xl border border-slate-200/80 text-left hover:shadow-lg hover:border-brand-light transition-all duration-300 transform hover:-translate-y-1 group"
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-brand-600">{item.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                </div>
                <div className="bg-slate-100 rounded-lg p-2">
                    <item.icon className="w-6 h-6 text-brand" />
                </div>
            </div>
        </button>
    );
};

export default ProgramCard;