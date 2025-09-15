import React from 'react';
import type { Stat } from '../types';

interface StatsCardProps {
    stat: Stat;
}

const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
    return (
        <div>
            <p className="text-3xl md:text-4xl font-bold text-brand">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-500 font-semibold">{stat.label}</p>
        </div>
    );
};

export default StatsCard;