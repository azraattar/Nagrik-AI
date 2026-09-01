import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LandingPage({ navigateTo, user }) {
    return (
        <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
            <Header activePage="landing" navigateTo={navigateTo} user={user} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-xl px-margin-mobile md:px-gutter max-w-container-max mx-auto flex flex-col lg:flex-row items-center gap-xl min-h-[80vh]">
                    <div className="flex-1 flex flex-col gap-lg z-10">
                        <h1 className="text-display-lg font-display-lg text-primary md:text-display-lg text-headline-lg-mobile leading-tight">
                            Report. Track. Resolve.
                        </h1>
                        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                            An intelligent citizen grievance platform that helps route civic issues to the right authorities efficiently and transparently.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-md mt-sm">
                            <button
                                onClick={() => navigateTo('submit_complaint')}
                                className="bg-primary-container text-on-primary px-lg py-md rounded-lg font-label-md hover:bg-[#152a65] transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-sm shadow-md"
                            >
                                <span className="material-symbols-outlined" data-icon="add_circle">
                                    add_circle
                                </span>
                                Report an Issue
                            </button>
                            <button
                                onClick={() => navigateTo('my_complaints')}
                                className="bg-surface border border-outline text-on-surface px-lg py-md rounded-lg font-label-md hover:bg-surface-container-low transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-sm"
                            >
                                <span className="material-symbols-outlined" data-icon="search">
                                    search
                                </span>
                                Track Complaint
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full aspect-square max-w-md lg:max-w-full">
                        <div
                            className="w-full h-full bg-cover bg-center rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-outline-variant"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzDnup4DgBXAxcbCof-E56trV7_vyDfu8e87p7v8UnYNEkvUh3-KdGdwbmjcJfQs5mTbS22Rx0SxsVRI-h0JjihMvbjrJX5b_bpdd00I4O5_ye_Mp59oSynwK21lbbFx3tJAPj7xCwVZGPFauuK_iTvqu1_NlHYEjt5lw-3zdxdOq15zkuWDFUdej700s18TRzoywmiBE8NW-32xUUb-CfdMPBXpknv8B68hA_5UmIrWA4OeYMONWy')",
                            }}
                        ></div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="bg-surface-container-low py-xl px-margin-mobile md:px-gutter">
                    <div className="max-w-container-max mx-auto">
                        <h2 className="text-headline-lg font-headline-lg text-primary text-center mb-xl">
                            How It Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
                            <div className="bg-surface p-lg rounded-xl border border-outline-variant relative hover:shadow-md transition-shadow">
                                <div className="text-secondary font-headline-lg absolute top-sm right-sm opacity-20">01</div>
                                <span className="material-symbols-outlined text-4xl text-primary mb-md">edit_document</span>
                                <h3 className="text-headline-md font-headline-md text-on-surface mb-sm">Submit</h3>
                                <p className="text-body-md font-body-md text-on-surface-variant">
                                    Easily report issues via text, image, or video through our intuitive portal.
                                </p>
                            </div>

                            <div className="bg-surface p-lg rounded-xl border border-outline-variant relative hover:shadow-md transition-shadow">
                                <div className="text-secondary font-headline-lg absolute top-sm right-sm opacity-20">02</div>
                                <span className="material-symbols-outlined text-4xl text-primary mb-md">psychology</span>
                                <h3 className="text-headline-md font-headline-md text-on-surface mb-sm">AI Understanding</h3>
                                <p className="text-body-md font-body-md text-on-surface-variant">
                                    Our smart system analyzes the submission to understand the core issue and context.
                                </p>
                            </div>

                            <div className="bg-surface p-lg rounded-xl border border-outline-variant relative hover:shadow-md transition-shadow">
                                <div className="text-secondary font-headline-lg absolute top-sm right-sm opacity-20">03</div>
                                <span className="material-symbols-outlined text-4xl text-primary mb-md">route</span>
                                <h3 className="text-headline-md font-headline-md text-on-surface mb-sm">Department Routing</h3>
                                <p className="text-body-md font-body-md text-on-surface-variant">
                                    The grievance is automatically forwarded to the correct civic department.
                                </p>
                            </div>

                            <div className="bg-surface p-lg rounded-xl border border-outline-variant relative hover:shadow-md transition-shadow">
                                <div className="text-secondary font-headline-lg absolute top-sm right-sm opacity-20">04</div>
                                <span className="material-symbols-outlined text-4xl text-primary mb-md">check_circle</span>
                                <h3 className="text-headline-md font-headline-md text-on-surface mb-sm">Track Resolution</h3>
                                <p className="text-body-md font-body-md text-on-surface-variant">
                                    Stay updated on the progress until the issue is officially resolved.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Bento Grid */}
                <section className="py-xl px-margin-mobile md:px-gutter max-w-container-max mx-auto">
                    <h2 className="text-headline-lg font-headline-lg text-primary mb-xl">
                        Platform Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-md auto-rows-[250px]">
                        {/* Multi-modal input */}
                        <div className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between md:col-span-2 hover:shadow-md transition-all">
                            <div>
                                <div className="flex gap-sm mb-md text-primary">
                                    <span className="material-symbols-outlined">description</span>
                                    <span className="material-symbols-outlined">image</span>
                                    <span className="material-symbols-outlined">videocam</span>
                                </div>
                                <h3 className="text-headline-md font-headline-md text-on-surface mb-sm">
                                    Multi-Format Complaints
                                </h3>
                                <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
                                    Submit grievances your way. We support text descriptions, photos of the issue, or short video clips to ensure all necessary context is captured.
                                </p>
                            </div>
                        </div>

                        {/* Smart Classification */}
                        <div className="bg-surface-container-high border border-outline-variant rounded-xl p-lg flex flex-col justify-between hover:shadow-md transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl mb-sm">category</span>
                            <div>
                                <h3 className="text-headline-md font-headline-md text-on-surface mb-xs">
                                    Smart Classification
                                </h3>
                                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                                    Automatic categorization based on issue content.
                                </p>
                            </div>
                        </div>

                        {/* Location Mapping */}
                        <div className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col md:col-span-1 relative overflow-hidden group hover:shadow-md transition-all">
                            <div className="z-10 bg-surface/80 backdrop-blur-sm p-sm rounded-lg inline-block w-fit mb-auto">
                                <h3 className="text-headline-md font-headline-md text-on-surface">Location Mapping</h3>
                            </div>
                            <div
                                className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChLFj503xpnIjZ5y1b-l5SM6EqZ0MvYWNv40didcqdYmrCN4ubX2XKUI5Ojye6CAXZWXaqMvWFVu1RUTjlgl08qyANvGu6SplHTFqmXlNuwKDzzhNQ9SygYsjmCqG5YCkXkeBhG8-qF_uVWKAGVs1WCHgqxY0mtWZ19ocM7sisc9SkzGAJWEmSoGC7OmVbgu-n7dgv0KuYiMoTjS5LuorVi5vqWBE7j7YdJA28MfcwnJkMOZrRo5P5')",
                                }}
                            ></div>
                            <span className="material-symbols-outlined text-primary text-3xl z-10 mt-auto">pin_drop</span>
                        </div>

                        {/* Priority & Duplicates */}
                        <div className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-center md:col-span-2 gap-md hover:shadow-md transition-all">
                            <div className="flex items-start gap-md">
                                <div className="bg-error-container text-on-error-container p-sm rounded-full shrink-0">
                                    <span className="material-symbols-outlined">warning</span>
                                </div>
                                <div>
                                    <h4 className="text-label-md font-label-md font-bold text-on-surface">Priority Detection</h4>
                                    <p className="text-body-md font-body-md text-on-surface-variant">
                                        Identifies urgent issues like major water leaks or safety hazards for immediate attention.
                                    </p>
                                </div>
                            </div>
                            <div className="h-px bg-outline-variant w-full my-xs"></div>
                            <div className="flex items-start gap-md">
                                <div className="bg-surface-container-high text-on-surface p-sm rounded-full shrink-0">
                                    <span className="material-symbols-outlined">file_copy</span>
                                </div>
                                <div>
                                    <h4 className="text-label-md font-label-md font-bold text-on-surface">Duplicate Detection</h4>
                                    <p className="text-body-md font-body-md text-on-surface-variant">
                                        Groups similar complaints together to help departments understand the scale of localized issues.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer navigateTo={navigateTo} />
        </div>
    );
}
