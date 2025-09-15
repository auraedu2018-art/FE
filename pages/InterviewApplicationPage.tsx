
import React, { useState } from 'react';
import type { InterviewProduct } from '../types';
import { INTERVIEW_QUESTIONS } from '../constants';
import Button from '../components/Button';
import DocumentScannerIcon from '../components/icons/DocumentScannerIcon';
import FileUploadIcon from '../components/icons/FileUploadIcon';
import LockClosedIcon from '../components/icons/LockClosedIcon';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import ChatIcon from '../components/icons/ChatIcon';


interface InterviewApplicationPageProps {
    product: InterviewProduct;
    onSubmit: () => void;
}

const InterviewApplicationPage: React.FC<InterviewApplicationPageProps> = ({ product, onSubmit }) => {
    const [activeTab, setActiveTab] = useState<'wallet' | 'pdf'>('pdf');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string | null>(null);
    const [questionnaireAnswers, setQuestionnaireAnswers] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileError(null);

        if (file.type !== 'application/pdf') {
            setFileError('PDF 파일만 업로드할 수 있습니다.');
            setUploadedFile(null);
            return;
        }

        if (file.name.toLowerCase().includes('scan')) {
            setFileError('스캔본(이미지) 파일은 제출할 수 없습니다. 온라인 발급본 PDF를 업로드해주세요.');
            setUploadedFile(null);
            return;
        }
        setUploadedFile(file);
    };

    const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const syntheticEvent = {
                target: { files }
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            handleFileChange(syntheticEvent);
        }
    };

    const handleAnswerChange = (id: string, value: string) => {
        setQuestionnaireAnswers(prev => ({ ...prev, [id]: value }));
    };

    const isQuestionnaireComplete = INTERVIEW_QUESTIONS.every(q => questionnaireAnswers[q.id]?.trim());
    const isRecordSubmitted = activeTab === 'pdf' ? !!uploadedFile : true; // Assuming wallet input is always valid for demo
    const isFormComplete = isRecordSubmitted && isQuestionnaireComplete;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormComplete) {
            alert('모든 항목을 입력해주세요.');
            return;
        }
        // Simulate submission
        setIsSubmitted(true);
    };
    
    if (isSubmitted) {
        return (
             <div className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-2xl">
                    <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto" />
                    <h1 className="text-3xl font-bold text-slate-800 mt-6">
                        면접 프로그램 신청이 완료되었습니다!
                    </h1>
                    <p className="mt-4 text-slate-600">
                        담당자가 제출해주신 서류를 꼼꼼히 검토한 후, 카톡을 통해 연락드릴 예정입니다.
                    </p>
                     <div className="mt-8">
                        <Button onClick={onSubmit}>
                           마이페이지로 이동
                        </Button>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="py-16 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="max-w-4xl mx-auto mb-16">
                    {/* Desktop View */}
                    <div className="hidden md:flex items-center">
                        {/* Step 1: Completed */}
                        <div className="flex-shrink-0 text-center w-28">
                            <div className="w-16 h-16 mx-auto bg-brand/20 text-brand rounded-full flex items-center justify-center font-bold text-2xl">
                                <CheckCircleIcon className="w-8 h-8"/>
                            </div>
                            <p className="mt-3 text-base font-semibold text-slate-500">프로그램 선택</p>
                        </div>
                        {/* Connector */}
                        <div className="flex-auto border-t-2 border-brand"></div>
                        {/* Step 2: Completed */}
                        <div className="flex-shrink-0 text-center w-28">
                             <div className="w-16 h-16 mx-auto bg-brand/20 text-brand rounded-full flex items-center justify-center font-bold text-2xl">
                                <CheckCircleIcon className="w-8 h-8"/>
                            </div>
                            <p className="mt-3 text-base font-semibold text-slate-500">결제</p>
                        </div>
                        {/* Connector */}
                        <div className="flex-auto border-t-2 border-brand"></div>
                        {/* Step 3: Active */}
                        <div className="flex-shrink-0 text-center w-28">
                            <div className="w-16 h-16 mx-auto bg-brand text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">3</div>
                            <p className="mt-3 text-base font-semibold text-brand">신청서 작성</p>
                        </div>
                        {/* Connector */}
                        <div className="flex-auto border-t-2 border-dashed border-slate-300"></div>
                        {/* Step 4: Inactive */}
                         <div className="flex-shrink-0 text-center w-28">
                            <div className="w-16 h-16 mx-auto bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-2xl">4</div>
                            <p className="mt-3 text-base font-semibold text-slate-500">신청 완료</p>
                        </div>
                    </div>
                    {/* Mobile View */}
                    <div className="md:hidden grid grid-cols-2 gap-x-4 gap-y-8">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-center w-24">
                                <div className="w-16 h-16 mx-auto bg-brand/20 text-brand rounded-full flex items-center justify-center font-bold text-2xl">
                                    <CheckCircleIcon className="w-8 h-8"/>
                                </div>
                                <p className="mt-3 text-sm font-semibold text-slate-500">1. 프로그램 선택</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-center w-24">
                                <div className="w-16 h-16 mx-auto bg-brand/20 text-brand rounded-full flex items-center justify-center font-bold text-2xl">
                                    <CheckCircleIcon className="w-8 h-8"/>
                                </div>
                                <p className="mt-3 text-sm font-semibold text-slate-500">2. 결제</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-center w-24">
                                <div className="w-16 h-16 mx-auto bg-brand text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">3</div>
                                <p className="mt-3 text-sm font-semibold text-brand">3. 신청서 작성</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-center w-24">
                                <div className="w-16 h-16 mx-auto bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-2xl">4</div>
                                <p className="mt-3 text-sm font-semibold text-slate-500">4. 신청 완료</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-800">면접 프로그램 신청서</h1>
                    <p className="mt-2 text-slate-500">
                        신청하신 프로그램: <span className="font-semibold text-brand">{product.title}</span>
                    </p>
                    <div className="mt-8 bg-slate-100 border-l-4 border-slate-400 text-slate-700 p-4 rounded-md text-left">
                        <p className="font-bold">중요 안내</p>
                        <p className="text-sm mt-1">결제 후 학생부 제출 및 사전 설문지 작성을 모두 완료해야 최종 신청 처리됩니다.</p>
                    </div>

                    <div className="mt-8 p-4 bg-yellow-100/60 rounded-lg">
                        <a
                            href="https://pf.kakao.com/_xgEMNb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 text-base text-slate-700 hover:text-brand font-semibold"
                        >
                            <ChatIcon className="w-5 h-5" />
                            <span className="text-lg">신청서 작성 중 궁금한 점은 오픈채팅으로 문의하세요.</span>
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-12 space-y-12">
                    {/* Step 1: Student Record */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center border-b pb-4">
                            <h2 className="text-2xl font-semibold text-slate-800">1. 학생부 제출</h2>
                            <a href="https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A05004&CappBizCD=13100000051" target="_blank" rel="noopener noreferrer" className="text-sm text-brand font-semibold hover:underline mt-2 md:mt-0 md:ml-4">
                                학생부 '전자문서 지갑본' 발급 방법 &rarr;
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-slate-600">
                            학생부는 'PDF 파일 업로드' 또는 '정부24 전자문서지갑 번호 입력' 중 한 가지 방법을 선택하여 제출해주세요.
                        </p>
                        <div className="mt-4 flex border-b">
                            <button type="button" onClick={() => setActiveTab('pdf')} className={`px-6 py-3 font-semibold ${activeTab === 'pdf' ? 'border-b-2 border-brand text-brand' : 'text-slate-500'}`}>PDF 파일 업로드</button>
                            <button type="button" onClick={() => setActiveTab('wallet')} className={`px-6 py-3 font-semibold ${activeTab === 'wallet' ? 'border-b-2 border-brand text-brand' : 'text-slate-500'}`}>정부24 전자문서지갑</button>
                        </div>
                        <div className="mt-6">
                            {activeTab === 'pdf' ? (
                                <div>
                                    <label 
                                        htmlFor="file-upload"
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        className={`w-full h-40 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors ${
                                            isDragging 
                                                ? 'border-brand bg-brand-light' 
                                                : 'border-slate-300 hover:border-brand hover:bg-brand-light'
                                        }`}
                                    >
                                        {uploadedFile ? (
                                            <>
                                                <CheckCircleIcon className="w-10 h-10 text-green-500 mb-2" />
                                                <p className="font-semibold text-slate-700">{uploadedFile.name}</p>
                                                <p className="text-sm text-slate-500">파일이 성공적으로 첨부되었습니다.</p>
                                            </>
                                        ) : (
                                            <>
                                                <FileUploadIcon className="w-10 h-10 text-slate-400 mb-2" />
                                                <p className="font-semibold text-slate-700">
                                                    {isDragging ? '파일을 여기에 놓으세요' : '클릭 또는 드래그하여 학생부 PDF 업로드'}
                                                </p>
                                                <p className="text-sm text-slate-500">최대 20MB</p>
                                            </>
                                        )}
                                    </label>
                                    <input id="file-upload" type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                                    {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}
                                     <div className="mt-4 bg-slate-100 p-4 rounded-md text-sm text-slate-600 space-y-2">
                                        <div className="flex items-start gap-2">
                                            <DocumentScannerIcon className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                                            <p><span className="font-semibold">'정부24 전자문서지갑' 발급본 PDF만</span> 제출 가능합니다. 스캔본, 일반 온라인 발급본은 정상적인 분석이 어렵습니다.</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <LockClosedIcon className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                                            <p><span className="font-semibold">비밀번호가 설정된 파일</span>은 오류가 발생할 수 있습니다. 제출 전 확인해주세요.</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <label htmlFor="wallet-number" className="block text-sm font-medium text-slate-700">전자문서지갑 문서함 번호</label>
                                    <input type="text" id="wallet-number" placeholder="문서함 번호 16자리를 입력하세요" className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand" />
                                    <p className="mt-2 text-sm text-slate-500">정부24 앱에서 전자문서지갑의 '내 문서함 관리' 메뉴에서 번호를 확인하실 수 있습니다.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Step 2: Questionnaire */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                         <h2 className="text-2xl font-semibold text-slate-800 border-b pb-4">2. 사전 설문지 작성</h2>
                         <div className="mt-6 space-y-6">
                            {INTERVIEW_QUESTIONS.map(q => (
                                <div key={q.id}>
                                    <label htmlFor={q.id} className="block text-md font-semibold text-slate-700 mb-2">{q.label}</label>
                                    <textarea 
                                        id={q.id} 
                                        rows={4} 
                                        className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-brand focus:border-transparent"
                                        value={questionnaireAnswers[q.id] || ''}
                                        onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                                    ></textarea>
                                </div>
                            ))}
                         </div>
                    </div>

                    <div className="text-center">
                        <Button type="submit" className="w-full max-w-xs" disabled={!isFormComplete}>
                            신청 완료하기
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InterviewApplicationPage;