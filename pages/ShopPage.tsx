
import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS, ALL_TAGS } from '../constants';
import ProductCard from '../components/ProductCard';
import SearchIcon from '../components/icons/SearchIcon';

interface ShopPageProps {
    activeCategory: string;
}

const ShopPage: React.FC<ShopPageProps> = ({ activeCategory }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagToggle = (tag: string) => {
        setSelectedTags(prev => 
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const filteredProducts = useMemo(() => {
        let products = [...ALL_PRODUCTS];

        // Filter by active category
        if (activeCategory !== '전체') {
            products = products.filter(p => p.category === activeCategory);
        }

        // Filter by search term
        if (searchTerm) {
            products = products.filter(p =>
                p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Filter by selected tags (AND condition)
        if (selectedTags.length > 0) {
            products = products.filter(p => 
                selectedTags.every(tag => p.tags.includes(tag))
            );
        }
        
        // Sort by a popularity score (students * rating)
        products.sort((a, b) => {
            const popularityA = a.studentCount * a.rating;
            const popularityB = b.studentCount * b.rating;
            return popularityB - popularityA;
        });

        return products;
    }, [searchTerm, activeCategory, selectedTags]);

    const pageTitle = activeCategory === '전체' ? '전체 강의' : `${activeCategory}`;

    return (
        <div className="py-12">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-brand-600 to-brand-700 text-white rounded-2xl">
                    <div className="py-16 px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">{pageTitle}</h1>
                        <p className="mt-4 text-lg text-purple-200 max-w-2xl mx-auto">S-class의 모든 지식을 한 곳에서 만나보세요.</p>
                        <div className="mt-8 max-w-2xl mx-auto relative">
                            <input
                                type="text"
                                placeholder="학습 관련 스킬/로드맵 이름/강사명 검색하기"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/90 border border-transparent text-slate-800 rounded-md py-3 pl-5 pr-12 text-md focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="absolute inset-y-0 right-0 px-4 flex items-center bg-brand text-white font-semibold rounded-r-md hover:bg-brand-600">
                                <SearchIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="py-12">
                    {/* Tag Filters */}
                    <div className="mb-8">
                        <div className="flex items-baseline gap-4 mb-3">
                            <h3 className="font-semibold text-slate-800">키워드로 상세 검색</h3>
                            {selectedTags.length > 0 && (
                                <button 
                                    onClick={() => setSelectedTags([])}
                                    className="text-xs text-slate-500 hover:text-brand-600 hover:underline"
                                >
                                    초기화
                                </button>
                            )}
                        </div>
                    
                        <div className="flex flex-wrap gap-2">
                            {ALL_TAGS.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => handleTagToggle(tag)}
                                    className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
                                        selectedTags.includes(tag)
                                            ? 'bg-brand-light border-brand text-brand-700 font-semibold'
                                            : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50'
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <main className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                            {filteredProducts.length === 0 && (
                                <div className="col-span-full text-center py-20 bg-white rounded-lg">
                                    <p className="text-slate-500">선택한 필터에 해당하는 상품이 없습니다.</p>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
