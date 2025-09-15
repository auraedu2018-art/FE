import React from 'react';
import type { ProgramShowcaseItem } from '../types';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface ProgramShowcaseCardProps {
    item: ProgramShowcaseItem;
    onClick: () => void;
}

const ProgramShowcaseCard: React.FC<ProgramShowcaseCardProps> = ({ item, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-white p-6 rounded-xl border border-slate-200 text-left hover:border-brand-light hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex flex-col h-full"
        >
            <div className="flex items-start justify-between">
                <div className="bg-brand-light rounded-lg p-3">
                    <item.icon className="w-7 h-7 text-brand" />
                </div>
            </div>
            <div className="mt-4 flex-grow">
                <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.description}</p>
            </div>
            <div className="mt-4 text-sm font-semibold text-slate-600 group-hover:text-brand flex items-center">
                <span>자세히 보기</span>
                <ChevronRightIcon className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </button>
    );
};

export default ProgramShowcaseCard;