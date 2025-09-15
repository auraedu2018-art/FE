
import React, { useState } from 'react';
import type { ShopCategory } from '../types';
import ChevronUpIcon from './icons/ChevronUpIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface ShopSidebarProps {
    allCategories: ShopCategory[];
    selectedCategories: string[];
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
    sortOption: string;
    setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="border-b border-slate-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-bold text-slate-800">{title}</h3>
                {isOpen ? <ChevronUpIcon className="w-5 h-5 text-slate-500" /> : <ChevronDownIcon className="w-5 h-5 text-slate-500" />}
            </button>
            {isOpen && <div className="mt-4">{children}</div>}
        </div>
    );
};

const ShopSidebar: React.FC<ShopSidebarProps> = ({
    allCategories,
    selectedCategories,
    setSelectedCategories,
    sortOption,
    setSortOption,
}) => {

    const handleCategoryChange = (categoryName: string) => {
        setSelectedCategories(prev =>
            prev.includes(categoryName)
                ? prev.filter(c => c !== categoryName)
                : [...prev, categoryName]
        );
    };

    return (
        <aside className="lg:w-64 xl:w-72 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <FilterSection title="정렬">
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="w-full text-sm border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-brand-500"
                    >
                        <option>인기순</option>
                        <option>최신순</option>
                    </select>
                </FilterSection>

                <FilterSection title="분야별">
                    <div className="space-y-3">
                        {allCategories.map(category => (
                             <label key={category.name} className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                                    checked={selectedCategories.includes(category.name)}
                                    onChange={() => handleCategoryChange(category.name)}
                                />
                                <span className="text-sm text-slate-700">{category.name}</span>
                            </label>
                        ))}
                    </div>
                </FilterSection>
            </div>
        </aside>
    );
};

export default ShopSidebar;