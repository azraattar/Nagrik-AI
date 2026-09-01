import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function SubmitComplaintPage({ navigateTo, user, onSubmitSuccess }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('en');
    const [ward, setWard] = useState('ward_a');
    const [evidenceList, setEvidenceList] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFileUpload = (type) => {
        const fakeFile = {
            id: Date.now(),
            type,
            name: `sample_${type}_${Date.now()}.${type === 'image' ? 'jpg' : type === 'video' ? 'mp4' : 'mp3'}`,
            url: type === 'image' ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnhg7qA9K06trpmPh7Lr3Zos7b2ZB3f34pqNEo13odVxl3XQ7demL5FmcCExH5-auzNLiDz-rvFL30gztETdXWihLY1XOTxZJ0RUila7xtOQUycpQdnqlVqF0-RMlhqDIWSLCvXybEO4Di-UdI2JRBqOy-vv9iQ89synGsokizNAomUI8yLxuLG78u4nOnVyX7hl8A9cBTQNMsgZMS1g8W20Rpb5lxAYjQAqMXDxuXUzi65GZaABdY' : null
        };
        setEvidenceList((prev) => [...prev, fakeFile]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) return;

        setIsSubmitting(true);
        setTimeout(() => {
            const newComplaint = {
                id: `CMP-2024-${Math.floor(1000 + Math.random() * 9000)}`,
                title,
                description,
                language,
                ward,
                location: ward === 'ward_a' ? 'Ward A - South District' : ward === 'ward_b' ? 'Ward B - Central Sector' : 'Ward C - North Zone',
                status: 'Draft',
                priority: 'Normal',
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                evidence: evidenceList,
                timeline: [
                    { title: 'Complaint Submitted', date: 'Just now', desc: 'Filed via NagrikAI Portal' }
                ]
            };

            onSubmitSuccess(newComplaint);
            setIsSubmitting(false);
            navigateTo('my_complaints');
        }, 600);
    };

    return (
        <div className="bg-background text-on-background h-full flex min-h-screen">
            <Sidebar role="citizen" activePage="submit_complaint" navigateTo={navigateTo} />

            <div className="flex-1 flex flex-col md:ml-[280px] min-h-0">
                <Header activePage="submit_complaint" navigateTo={navigateTo} user={user} />

                <main className="flex-1 overflow-y-auto bg-surface-container-lowest p-margin-mobile md:p-xl">
                    <div className="max-w-3xl mx-auto">
                        {/* Page Header */}
                        <div className="mb-lg">
                            <h2 className="text-headline-lg font-headline-lg text-on-background mb-xs font-bold">
                                Submit New Grievance
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Please provide accurate details to help authorities resolve the issue efficiently.
                            </p>
                        </div>

                        {/* Form Container */}
                        <form onSubmit={handleSubmit} className="bg-surface rounded-xl border border-outline-variant p-lg space-y-lg shadow-sm">
                            {/* Basic Info Section */}
                            <div className="space-y-md border-b border-outline-variant pb-lg">
                                <h3 className="text-headline-md font-headline-md text-on-background flex items-center gap-2 font-semibold">
                                    <span className="material-symbols-outlined text-primary">description</span>
                                    Issue Details
                                </h3>

                                <div>
                                    <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold" htmlFor="complaint-title">
                                        Complaint Title *
                                    </label>
                                    <input
                                        id="complaint-title"
                                        type="text"
                                        required
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="e.g., Pothole on Main Street near 5th Avenue"
                                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 text-body-md font-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold" htmlFor="complaint-desc">
                                        Description *
                                    </label>
                                    <textarea
                                        id="complaint-desc"
                                        required
                                        rows="4"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Provide a detailed description of the issue, location details, and any safety hazards..."
                                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 text-body-md font-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-y"
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                                    <div>
                                        <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold" htmlFor="complaint-lang">
                                            Preferred Language
                                        </label>
                                        <select
                                            id="complaint-lang"
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 text-body-md font-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="en">English</option>
                                            <option value="hi">Hindi</option>
                                            <option value="mr">Marathi</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold" htmlFor="complaint-loc">
                                            Location / Ward
                                        </label>
                                        <select
                                            id="complaint-loc"
                                            value={ward}
                                            onChange={(e) => setWard(e.target.value)}
                                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 text-body-md font-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="ward_a">Ward A - South</option>
                                            <option value="ward_b">Ward B - Central</option>
                                            <option value="ward_c">Ward C - North</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Evidence Section */}
                            <div className="space-y-md">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-headline-md font-headline-md text-on-background flex items-center gap-2 mb-1 font-semibold">
                                            <span className="material-symbols-outlined text-primary">perm_media</span>
                                            Evidence
                                        </h3>
                                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                                            You can provide text, images, or videos to help authorities understand the issue.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                                    <button
                                        type="button"
                                        onClick={() => handleFileUpload('image')}
                                        className="file-upload-zone border-2 border-dashed border-outline-variant rounded-lg p-lg flex flex-col items-center justify-center gap-2 cursor-pointer h-32 group hover:border-primary"
                                    >
                                        <span className="material-symbols-outlined text-3xl text-outline group-hover:text-primary transition-colors">
                                            image
                                        </span>
                                        <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">
                                            + Add Image
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => handleFileUpload('video')}
                                        className="file-upload-zone border-2 border-dashed border-outline-variant rounded-lg p-lg flex flex-col items-center justify-center gap-2 cursor-pointer h-32 group hover:border-primary"
                                    >
                                        <span className="material-symbols-outlined text-3xl text-outline group-hover:text-primary transition-colors">
                                            videocam
                                        </span>
                                        <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">
                                            + Add Video
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => handleFileUpload('audio')}
                                        className="file-upload-zone border-2 border-dashed border-outline-variant rounded-lg p-lg flex flex-col items-center justify-center gap-2 cursor-pointer h-32 group hover:border-primary"
                                    >
                                        <span className="material-symbols-outlined text-3xl text-outline group-hover:text-primary transition-colors">
                                            mic
                                        </span>
                                        <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">
                                            + Add Audio
                                        </span>
                                    </button>
                                </div>

                                {evidenceList.length > 0 && (
                                    <div className="mt-md space-y-2">
                                        <p className="text-xs font-semibold text-on-surface-variant">Attached Files:</p>
                                        <div className="flex flex-wrap gap-sm">
                                            {evidenceList.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="bg-surface-container-low border border-outline-variant px-sm py-1 rounded-lg text-xs flex items-center gap-2"
                                                >
                                                    <span className="material-symbols-outlined text-base text-primary">
                                                        {item.type === 'image' ? 'image' : item.type === 'video' ? 'videocam' : 'mic'}
                                                    </span>
                                                    <span className="text-on-surface">{item.name}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => setEvidenceList(evidenceList.filter((f) => f.id !== item.id))}
                                                        className="text-error hover:opacity-80"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="pt-lg flex items-center justify-end gap-md border-t border-outline-variant mt-lg">
                                <button
                                    type="button"
                                    onClick={() => navigateTo('citizen_dashboard')}
                                    className="px-6 py-2 rounded-lg font-label-md text-label-md text-on-background bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2 rounded-lg font-label-md text-label-md text-on-primary bg-primary hover:bg-surface-tint transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-primary font-semibold flex items-center gap-2"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}
