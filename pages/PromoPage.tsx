
import React from 'react';
import type { PromoPageContent } from '../types';
import Button from '../components/Button';

interface PromoPageProps {
    content: PromoPageContent;
}

const PromoPage: React.FC<PromoPageProps> = ({ content }) => {
    return (
        <div className="py-12">
            <div className="container mx-auto px-6">
                 {/* Page Header */}
                <div className="bg-brand-light rounded-2xl">
                    <div className="py-16 px-6 text-center">
                        <span className="text-brand font-bold tracking-wider">{content.category}</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 leading-tight">
                            {content.title}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-slate-600 mt-4 max-w-3xl mx-auto">
                            {content.subtitle}
                        </h2>
                    </div>
                </div>

                {/* Page Content */}
                <div className="mt-16 md:mt-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left">
                            <p className="text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {content.description}
                            </p>
                            <div className="mt-10">
                                <Button variant="primary" className="w-full sm:w-auto">
                                    {content.ctaText}
                                </Button>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div>
                            <img 
                                src={content.imageUrl} 
                                alt={content.title} 
                                className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[16/9]" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoPage;
