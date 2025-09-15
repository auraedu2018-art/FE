import React from 'react';
import { BEST_SELLER_PRODUCTS, INTERVIEW_PRODUCTS } from '../constants';
import type { InterviewApplicationStatus, InterviewProduct } from '../types';
import Button from '../components/Button';
import DocumentTextIcon from '../components/icons/DocumentTextIcon';

interface MySclassPageProps {
    applicationStatus: Record<number, InterviewApplicationStatus>;
    onNavigateToApplication: (product: InterviewProduct) => void;
}

const MySclassPage: React.FC<MySclassPageProps> = ({ applicationStatus, onNavigateToApplication }) => {
    const recommendedProducts = BEST_SELLER_PRODUCTS.slice(0, 2);
    const purchasedPrograms = INTERVIEW_PRODUCTS.filter(p => applicationStatus[p.id]);

    return (
        <div className="bg-slate-100">
            <div className="container mx-auto px-6 py-12">
                <header className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900">
                        김OO 학생의 S-class
                    </h2>
                    <p className="mt-2 text-slate-600 text-lg">
                        당신의 합격을 위한 모든 것이 여기에 준비되어 있습니다.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <main className="lg:col-span-2 space-y-8">
                        {purchasedPrograms.length > 0 ? (
                             <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-start gap-4">
                                    <div className="bg-accent-light p-3 rounded-full">
                                        <DocumentTextIcon className="h-8 w-8 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-dark-800">나의 면접 프로그램</h3>
                                        <div className="mt-4 space-y-4">
                                            {purchasedPrograms.map(product => {
                                                const status = applicationStatus[product.id];
                                                return (
                                                    <div key={product.id} className="border-t pt-4 first:border-t-0 first:pt-0">
                                                        <p className="font-semibold text-slate-700">{product.title}</p>
                                                        {status === 'paid' && (
                                                            <>
                                                                <p className="text-sm text-amber-600 mt-1">신청서 작성이 필요합니다.</p>
                                                                <Button variant='secondary' className="px-4 py-1.5 text-sm mt-2" onClick={() => onNavigateToApplication(product)}>
                                                                    신청서 작성하기 &rarr;
                                                                </Button>
                                                            </>
                                                        )}
                                                        {status === 'submitted' && (
                                                            <p className="text-sm text-green-600 font-semibold mt-1">
                                                                {product.id === 5 || product.id === 6 
                                                                    ? '구매 완료' 
                                                                    : '신청 완료 (확인 중)'}
                                                            </p>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                             <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-bold text-dark-800">신청한 프로그램</h3>
                                <p className="mt-4 text-slate-500">아직 신청하거나 결제한 프로그램이 없습니다.</p>
                             </div>
                        )}
                    </main>

                    {/* Sidebar / Recommendations */}
                    <aside className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-dark-800 border-b pb-3">맞춤 추천</h3>
                            <div className="mt-4">
                                <div className="space-y-6">
                                    {recommendedProducts.map(product => (
                                        <div key={product.id} className="flex gap-4 items-center">
                                            <img src={product.imageUrl} alt={product.title} className="w-20 h-16 object-cover rounded-md" />
                                            <div>
                                                <h4 className="font-bold text-sm text-dark-800 leading-tight">{product.title}</h4>
                                                <a href="#" className="text-xs text-brand-600 hover:underline">상품 보기</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default MySclassPage;