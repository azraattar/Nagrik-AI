import React from 'react';
import StatusBadge from './StatusBadge';

export default function ComplaintCard({ complaint, onViewDetail }) {
    return (
        <div
            onClick={() => onViewDetail(complaint)}
            className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-md hover:shadow-md transition-all cursor-pointer group"
        >
            <div className="flex flex-col gap-xs flex-1">
                <div className="flex items-center gap-sm">
                    <span className="text-xs text-outline font-medium">
                        #{complaint.id}
                    </span>
                    <StatusBadge status={complaint.status} />
                    {complaint.priority && (
                        <StatusBadge status={complaint.priority} />
                    )}
                </div>
                <h3 className="text-headline-md text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {complaint.title}
                </h3>
                <p className="text-body-md text-sm text-on-surface-variant line-clamp-2">
                    {complaint.description}
                </p>
                <div className="flex items-center gap-md text-xs text-on-surface-variant mt-xs">
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {complaint.location}
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        {complaint.date}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-sm self-end md:self-center shrink-0">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onViewDetail(complaint);
                    }}
                    className="bg-surface-container-low text-primary px-md py-sm rounded-lg font-label-md hover:bg-surface-container-high transition-colors text-xs font-semibold flex items-center gap-1"
                >
                    View Details
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
            </div>
        </div>
    );
}
