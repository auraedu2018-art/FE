import React from 'react';

const DonutChart: React.FC<{ value: number, total: number }> = ({ value, total }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const progress = (value / total);
    const offset = circumference * (1 - progress);

    return (
        <div className="relative w-36 h-36">
            <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle
                    className="text-slate-200"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                />
                <circle
                    className="text-brand transition-all duration-1000 ease-out"
                    strokeWidth="12"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                    transform="rotate(-90 60 60)"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-slate-800">{value.toFixed(2)}</span>
                <span className="text-xs text-slate-500">(총 {total}점)</span>
            </div>
        </div>
    );
};

const BarChart: React.FC = () => {
    const data = [
        { label: '학업', value: 85 },
        { label: '진로', value: 92 },
        { label: '공동체', value: 78 },
    ];
    
    return (
        <div className="flex justify-around items-end h-24 w-full px-4 gap-4">
            {data.map(item => (
                <div key={item.label} className="flex flex-col items-center flex-1">
                    <div className="w-full h-full flex items-end">
                       <div 
                         className="w-full bg-brand rounded-t-md animate-grow"
                         style={{ height: `${item.value}%` }}
                        ></div>
                    </div>
                    <span className="mt-2 text-xs font-semibold text-slate-600">{item.label}</span>
                </div>
            ))}
            <style>{`
                @keyframes grow {
                    from { height: 0%; }
                }
                .animate-grow {
                    animation: grow 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

const DashboardMockup: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/50 space-y-6 transform hover:scale-105 transition-transform duration-300">
            <div>
                <span className="text-xs bg-brand-light text-brand-700 font-bold px-2 py-1 rounded">생기부 점수</span>
                <h3 className="font-bold mt-1">생기부 총점</h3>
                <div className="flex justify-center items-center mt-2">
                    <DonutChart value={258.02} total={300} />
                </div>
            </div>
            <div className="border-t border-slate-100 pt-4">
                 <h3 className="font-bold">생기부 역량별 점수</h3>
                 <div className="mt-3">
                    <BarChart />
                 </div>
            </div>
        </div>
    );
};

export default DashboardMockup;