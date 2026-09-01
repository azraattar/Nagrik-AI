import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HelpPage({ navigateTo, user }) {
    // FAQ Accordion State
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    // Contact Modal State
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('support@nagrikai.example');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const submitSteps = [
        {
            step: '01',
            title: 'Describe your issue',
            description: 'Clearly explain the civic issue you are facing.',
            icon: 'edit_note'
        },
        {
            step: '02',
            title: 'Add evidence',
            description: 'Upload an image or video to help authorities understand the issue. This is optional.',
            icon: 'add_photo_alternate'
        },
        {
            step: '03',
            title: 'Enter location',
            description: 'Provide your City and Street so your complaint can be mapped to the correct location.',
            icon: 'location_on'
        },
        {
            step: '04',
            title: 'Submit',
            description: 'Submit your grievance and receive a unique complaint ID.',
            icon: 'task_alt'
        },
        {
            step: '05',
            title: 'Track progress',
            description: 'Track your complaint from submission to resolution in My Complaints.',
            icon: 'trending_up'
        }
    ];

    const aiFeatures = [
        {
            title: 'AI Complaint Classification',
            description: 'NagrikAI understands your complaint and identifies the type of civic issue.',
            icon: 'category'
        },
        {
            title: 'Smart Department Routing',
            description: 'Your complaint is automatically directed to the appropriate department.',
            icon: 'alt_route'
        },
        {
            title: 'Urgency Detection',
            description: 'NagrikAI identifies safety risks, severity, accidents, service disruption, and other urgency indicators to help prioritize complaints.',
            icon: 'priority_high'
        },
        {
            title: 'Duplicate Detection',
            description: 'NagrikAI checks for similar complaints so repeated reports about the same underlying issue can be linked together.',
            icon: 'hub'
        },
        {
            title: 'Multimedia Analysis',
            description: 'Uploaded images and videos can provide additional evidence about the reported issue.',
            icon: 'photo_camera'
        },
        {
            title: 'Location-Based Insights',
            description: 'Complaint locations help authorities identify areas where multiple citizens are experiencing the same problem.',
            icon: 'map'
        }
    ];

    const departments = [
        {
            name: 'Water & Sanitation Department',
            icon: 'water_drop',
            examples: [
                'Water supply problems',
                'Water leakage',
                'Contaminated water',
                'Garbage accumulation',
                'Sanitation issues'
            ]
        },
        {
            name: 'Food Management Department',
            icon: 'restaurant',
            examples: [
                'Spoiled or expired food',
                'Food safety concerns',
                'Unhygienic food',
                'Unsafe food practices'
            ]
        },
        {
            name: 'Public Works Department (PWD)',
            icon: 'construction',
            examples: [
                'Potholes',
                'Damaged roads',
                'Broken footpaths',
                'Public infrastructure damage'
            ]
        }
    ];

    const lifecycleStages = [
        { label: 'Submitted', icon: 'send', desc: 'Complaint registered' },
        { label: 'Under Review', icon: 'find_in_page', desc: 'AI triage & verification' },
        { label: 'Assigned', icon: 'assignment_ind', desc: 'Routed to ward officer' },
        { label: 'In Progress', icon: 'engineering', desc: 'Action underway on site' },
        { label: 'Resolved', icon: 'check_circle', desc: 'Closure & feedback' }
    ];

    const faqs = [
        {
            q: 'Can I submit an image or video with my complaint?',
            a: 'Yes. Images and videos can be uploaded as supporting evidence. They are optional.'
        },
        {
            q: 'Can I submit a complaint in another language?',
            a: 'Yes. NagrikAI can detect and normalize supported regional languages for processing.'
        },
        {
            q: 'What happens if someone has already reported the same issue?',
            a: 'NagrikAI identifies similar complaints and can link them to the same underlying issue instead of treating every report as an unrelated problem.'
        },
        {
            q: 'How is complaint priority decided?',
            a: 'NagrikAI analyzes factors such as safety risks, accidents, severity, service disruption, and the number of people potentially affected. These signals contribute to an explainable priority score.'
        },
        {
            q: 'Where can I track my complaint?',
            a: 'Open My Complaints from the sidebar to see your complaint status and details.'
        },
        {
            q: 'Is uploading evidence mandatory?',
            a: 'No. You can submit a complaint using only a description and location. Evidence can be added when available.'
        }
    ];

    return (
        <div className="bg-background text-on-background min-h-screen flex antialiased">
            {/* Citizen Sidebar */}
            <Sidebar role="citizen" activePage="help" navigateTo={navigateTo} />

            {/* Main Content Area */}
            <div className="flex-1 md:ml-[280px] flex flex-col min-h-screen">
                <Header activePage="help" navigateTo={navigateTo} user={user} />

                <main className="flex-1 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full space-y-xl">
                    {/* Header Banner */}
                    <div className="bg-surface border border-outline-variant rounded-xl p-lg md:p-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-md shadow-xs">
                        <div className="relative z-10 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm mb-sm font-semibold">
                                <span className="material-symbols-outlined text-[16px]">help_center</span>
                                Citizen Support Center
                            </div>
                            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
                                Help &amp; Support
                            </h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">
                                Everything you need to know about submitting and tracking a grievance.
                            </p>
                        </div>
                        <div className="relative z-10 flex gap-sm shrink-0">
                            <button
                                onClick={() => navigateTo('submit_complaint')}
                                className="bg-primary hover:bg-opacity-90 text-on-primary font-label-md text-label-md px-5 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-sm font-semibold"
                            >
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                Submit Grievance
                            </button>
                        </div>
                        <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary-fixed-dim rounded-full blur-3xl opacity-20 pointer-events-none"></div>
                    </div>

                    {/* Section A: How to Submit a Grievance */}
                    <section className="space-y-md">
                        <div className="border-b border-outline-variant pb-2">
                            <h2 className="font-headline-md text-headline-md text-on-surface font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">dynamic_form</span>
                                How to Submit a Grievance
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                Follow these five simple steps to file your civic issue quickly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md">
                            {submitSteps.map((item, idx) => (
                                <div
                                    key={item.step}
                                    className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-sm group relative"
                                >
                                    <div className="flex items-center justify-between mb-sm">
                                        <span className="font-display-lg text-lg font-bold text-primary bg-primary-fixed/40 px-2.5 py-1 rounded-md">
                                            {item.step}
                                        </span>
                                        <div className="w-9 h-9 rounded-lg bg-surface-container-low text-primary flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">
                                                {item.icon}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="font-label-md text-label-md font-bold text-on-surface mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section B: How NagrikAI Helps */}
                    <section className="space-y-md">
                        <div className="border-b border-outline-variant pb-2">
                            <h2 className="font-headline-md text-headline-md text-on-surface font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">psychology</span>
                                How NagrikAI Helps
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                Intelligent AI capabilities designed to resolve your grievances faster and more transparently.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                            {aiFeatures.map((feat) => (
                                <div
                                    key={feat.title}
                                    className="bg-surface border border-outline-variant rounded-xl p-md hover:border-primary/40 transition-all flex gap-md items-start shadow-xs hover:shadow-sm"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-[22px]">
                                            {feat.icon}
                                        </span>
                                    </div>
                                    <div className="space-y-1 flex-1">
                                        <h3 className="font-label-md text-label-md font-bold text-on-surface">
                                            {feat.title}
                                        </h3>
                                        <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
                                            {feat.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section C: What Can I Report? */}
                    <section className="space-y-md">
                        <div className="border-b border-outline-variant pb-2">
                            <h2 className="font-headline-md text-headline-md text-on-surface font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">domain</span>
                                What Can I Report?
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                Supported civic departments and examples of issues you can report.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                            {departments.map((dept) => (
                                <div
                                    key={dept.name}
                                    className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between shadow-xs hover:border-primary/40 transition-all"
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-md pb-sm border-b border-outline-variant/60">
                                            <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-[22px]">
                                                    {dept.icon}
                                                </span>
                                            </div>
                                            <h3 className="font-label-md text-label-md font-bold text-on-surface leading-tight">
                                                {dept.name}
                                            </h3>
                                        </div>

                                        <p className="font-label-sm text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                                            Common Examples:
                                        </p>
                                        <ul className="space-y-2 mb-md">
                                            {dept.examples.map((ex, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface"
                                                >
                                                    <span className="material-symbols-outlined text-[16px] text-secondary-container">
                                                        check_circle
                                                    </span>
                                                    <span>{ex}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Manual Review Note */}
                        <div className="bg-surface-container-low border border-outline-variant rounded-xl p-md flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-[24px] shrink-0">
                                info
                            </span>
                            <p className="font-body-md text-body-md text-on-surface">
                                <span className="font-semibold">Need to report something else?</span> If your issue does not clearly fit one of these categories, it can be sent for manual review.
                            </p>
                        </div>
                    </section>

                    {/* Section D: Tracking a Complaint */}
                    <section className="space-y-md">
                        <div className="border-b border-outline-variant pb-2">
                            <h2 className="font-headline-md text-headline-md text-on-surface font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">conversion_path</span>
                                Tracking a Complaint
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                You can view the latest status and details of your complaints anytime from My Complaints.
                            </p>
                        </div>

                        <div className="bg-surface border border-outline-variant rounded-xl p-lg md:p-xl shadow-xs">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative">
                                {lifecycleStages.map((stage, idx) => (
                                    <div
                                        key={stage.label}
                                        className="flex flex-col items-center text-center p-md bg-surface-container-lowest border border-outline-variant rounded-lg relative"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-sm shadow-xs">
                                            <span className="material-symbols-outlined text-[24px]">
                                                {stage.icon}
                                            </span>
                                        </div>
                                        <h3 className="font-label-md text-label-md font-bold text-on-surface">
                                            {stage.label}
                                        </h3>
                                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                                            {stage.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-lg pt-md border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-md">
                                <p className="font-body-md text-body-md text-on-surface-variant text-center sm:text-left">
                                    Track real-time progress, officer assignments, and resolution notes anytime.
                                </p>
                                <button
                                    onClick={() => navigateTo('my_complaints')}
                                    className="bg-surface border border-outline-variant hover:bg-surface-container-low text-primary font-label-md text-label-md px-5 py-2.5 rounded-lg transition-all flex items-center gap-2 font-semibold active:scale-95 shrink-0"
                                >
                                    <span className="material-symbols-outlined text-[20px]">list_alt</span>
                                    Go to My Complaints
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Section E: Frequently Asked Questions */}
                    <section className="space-y-md">
                        <div className="border-b border-outline-variant pb-2">
                            <h2 className="font-headline-md text-headline-md text-on-surface font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">quiz</span>
                                Frequently Asked Questions
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                Quick answers to common questions regarding grievance submission and processing.
                            </p>
                        </div>

                        <div className="space-y-sm">
                            {faqs.map((faq, idx) => {
                                const isOpen = openFaqIndex === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="bg-surface border border-outline-variant rounded-xl overflow-hidden transition-all duration-200"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleFaq(idx)}
                                            className="w-full p-md text-left flex justify-between items-center gap-4 hover:bg-surface-container-low transition-colors"
                                        >
                                            <span className="font-label-md text-label-md md:text-body-md font-bold text-on-surface flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-[20px]">
                                                    help_outline
                                                </span>
                                                {faq.q}
                                            </span>
                                            <span
                                                className={`material-symbols-outlined text-on-surface-variant transition-transform duration-200 ${
                                                    isOpen ? 'rotate-180 text-primary' : ''
                                                }`}
                                            >
                                                expand_more
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div className="px-md pb-md pt-1 text-on-surface-variant font-body-md text-body-md bg-surface border-t border-outline-variant/50 leading-relaxed">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Section F: Need More Help? */}
                    <section>
                        <div className="bg-surface border border-outline-variant rounded-xl p-lg md:p-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md shadow-xs">
                            <div className="space-y-1 max-w-xl">
                                <h3 className="font-headline-md text-headline-md text-on-surface font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">support_agent</span>
                                    Need more help?
                                </h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    If you are unable to submit a grievance or have trouble using the portal, please contact support.
                                </p>
                            </div>
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="bg-primary-container text-on-primary hover:bg-opacity-90 font-label-md text-label-md px-6 py-3 rounded-lg transition-all duration-200 font-semibold flex items-center gap-2 shrink-0 active:scale-95 shadow-sm"
                            >
                                <span className="material-symbols-outlined text-[20px]">mail</span>
                                Contact Support
                            </button>
                        </div>
                    </section>
                </main>

                <Footer navigateTo={navigateTo} />
            </div>

            {/* Support Modal */}
            {isContactModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-margin-mobile animate-fadeIn"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="bg-surface border border-outline-variant rounded-xl max-w-md w-full p-lg shadow-xl relative animate-scaleUp">
                        <div className="flex justify-between items-center pb-sm border-b border-outline-variant mb-md">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[18px]">support_agent</span>
                                </div>
                                <h3 className="font-headline-md text-base font-bold text-on-surface">
                                    Citizen Support
                                </h3>
                            </div>
                            <button
                                onClick={() => setIsContactModalOpen(false)}
                                className="text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container-low transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                            Our citizen grievance desk is available to assist you with system issues, registration, or ticket status inquiries.
                        </p>

                        <div className="bg-surface-container-low border border-outline-variant rounded-lg p-md mb-md space-y-sm">
                            <div className="text-xs text-on-surface-variant font-medium">Support Email:</div>
                            <div className="flex items-center justify-between gap-2">
                                <span className="font-bold text-primary font-mono text-sm sm:text-base select-all">
                                    support@nagrikai.example
                                </span>
                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    className="bg-surface border border-outline-variant hover:bg-surface-container text-xs px-2.5 py-1.5 rounded-md font-semibold text-on-surface flex items-center gap-1 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[14px]">
                                        {copiedEmail ? 'check' : 'content_copy'}
                                    </span>
                                    {copiedEmail ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end gap-sm">
                            <button
                                onClick={() => setIsContactModalOpen(false)}
                                className="bg-primary text-on-primary px-5 py-2 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all font-semibold"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
