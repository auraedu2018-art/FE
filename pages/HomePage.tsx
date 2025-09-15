import React from 'react';
import { PROGRAM_SHOWCASE_DATA, BEST_SELLER_PRODUCTS, SUCCESS_STORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import SuccessStoryCard from '../components/SuccessStoryCard';
import HeroCarousel from '../components/HeroCarousel';
import CategoryIconLink from '../components/CategoryIconLink';

interface HomePageProps {
    onSelectCategory: (category: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectCategory }) => {
    return (
        <div className="bg-white">
            <HeroCarousel onSelectCategory={onSelectCategory} />

            {/* Category Icons */}
            <section className="container mx-auto px-6 py-12">
                <div className="flex flex-row flex-wrap justify-center items-start gap-x-6 gap-y-8">
                    {PROGRAM_SHOWCASE_DATA.map(item => (
                       <CategoryIconLink
                            key={item.category}
                            item={item}
                            onClick={() => onSelectCategory(item.category)}
                       />
                    ))}
                </div>
            </section>
            
            <div className="bg-slate-50">
                <div className="container mx-auto px-6 py-16">
                    {/* BEST 인기 강의 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">실시간 BEST 인기 강의</h2>
                        <p className="text-slate-500 mb-8">S-class 학생들이 가장 많이 수강하는 강의입니다.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                             {BEST_SELLER_PRODUCTS.slice(0, 3).map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>

                     {/* Success Stories */}
                     <section className="mt-20">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">합격 선배들의 이야기</h2>
                        <p className="text-slate-500 mb-8">S-class와 함께 꿈을 이룬 선배들을 만나보세요.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {SUCCESS_STORIES.map((story, index) => (
                                <SuccessStoryCard key={index} story={story} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HomePage;