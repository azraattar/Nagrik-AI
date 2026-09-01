import React from 'react';

export default function AdminNotFound({ navigateTo }) {
    return (
        <div className="bg-surface border border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center text-center min-h-[420px] shadow-xs space-y-md">
            <div className="w-20 h-20 rounded-full bg-error-container text-error flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl" style={{ fontSize: '48px' }}>
                    error_outline
                </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Admin Section Not Found
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                The requested administrative view does not exist or has been relocated.
            </p>
            <button
                onClick={() => navigateTo('/admin')}
                className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg shadow-sm font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
                <span className="material-symbols-outlined text-[18px]">dashboard</span>
                Return to Admin Overview
            </button>
        </div>
    );
}
