
import React from 'react';
import type { Product } from '../types';
import UserGroupIcon from './icons/UserGroupIcon';
import StarIcon from './icons/StarIcon';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;
    const discountPercentage = hasDiscount ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) : 0;

    return (
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden group flex flex-col h-full transition-shadow hover:shadow-lg">
            <div className="relative">
              <img src={product.imageUrl} alt={product.title} className="w-full h-40 object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-md text-slate-800 leading-snug group-hover:text-brand-600 transition-colors">{product.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{product.author}</p>
                 <div className="flex flex-wrap gap-2 mt-3">
                    {product.tags.map(tag => (
                        <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-sm">{tag}</span>
                    ))}
                </div>
                
                <div className="flex items-center text-xs text-slate-500 mt-3 flex-grow">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 font-bold">{product.rating.toFixed(1)}</span>
                    <span className="ml-1">({product.reviewCount})</span>
                    <span className="mx-2">·</span>
                    <UserGroupIcon className="w-4 h-4" />
                    <span className="ml-1">{product.studentCount.toLocaleString()}+</span>
                </div>

                <div className="mt-4">
                    {hasDiscount ? (
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-brand">{discountPercentage}%</span>
                            <span className="text-lg font-bold text-slate-900">{product.price.toLocaleString()}원</span>
                            <span className="text-sm text-slate-400 line-through">{product.originalPrice!.toLocaleString()}원</span>
                        </div>
                    ) : (
                        <p className="text-lg font-bold text-slate-900">{product.price.toLocaleString()}원</p>
                    )}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        {product.isNew && <span className="text-xs font-semibold bg-brand-light text-brand-700 px-2 py-0.5 rounded">New</span>}
                        {product.isUpdate && <span className="text-xs font-semibold bg-green-100 text-green-600 px-2 py-0.5 rounded">Update</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;