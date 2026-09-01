import React from 'react';

export default function Footer({ navigateTo }) {
    return (
        <footer className="bg-surface-container-lowest border-t border-outline-variant flat no shadows w-full mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center w-full px-gutter py-xl max-w-container-max mx-auto gap-md">
                <div
                    className="flex items-center gap-sm text-primary cursor-pointer"
                    onClick={() => navigateTo && navigateTo('landing')}
                >
                    <span className="text-headline-sm font-headline-md font-bold">NagrikAI</span>
                </div>
                <div className="flex flex-wrap justify-center gap-lg">
                    <a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-opacity hover:opacity-80" href="#about">About</a>
                    <a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-opacity hover:opacity-80" href="#contact">Contact</a>
                    <a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-opacity hover:opacity-80" href="#privacy">Privacy Policy</a>
                    <a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-opacity hover:opacity-80" href="#terms">Terms of Service</a>
                </div>
                <div className="text-on-surface-variant font-label-sm text-label-sm">
                    © 2024 NagrikAI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
