
import React from 'react';
import type { SuccessStory } from '../types';

const SuccessStoryCard: React.FC<{ story: SuccessStory }> = ({ story }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center h-full">
            <img className="w-20 h-20 rounded-full object-cover shadow-sm mb-4" src={story.imageUrl} alt={story.studentInfo} />
            <p className="text-lg font-semibold text-brand">"{story.quote}"</p>
            <p className="text-sm text-slate-500 mt-2">{story.studentInfo}</p>
            <p className="text-slate-600 mt-4 text-sm flex-grow">{story.story}</p>
        </div>
    );
};

export default SuccessStoryCard;