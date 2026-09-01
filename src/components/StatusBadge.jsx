import React from 'react';

export default function StatusBadge({ status }) {
  const getStatusStyles = () => {
    switch (status?.toLowerCase()) {
      case 'resolved':
        return 'bg-tertiary-container/20 text-on-tertiary-container border-tertiary-container/30';
      case 'in progress':
      case 'in-progress':
        return 'bg-secondary-container/20 text-secondary border-secondary-container/30';
      case 'open':
      case 'pending':
        return 'bg-primary-fixed text-on-primary-fixed-variant border-primary-fixed-dim';
      case 'high':
      case 'urgent':
        return 'bg-error-container text-on-error-container border-error/30';
      case 'draft':
      default:
        return 'bg-surface-container-highest text-on-surface border-outline-variant';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusStyles()}`}
    >
      {status || 'Draft'}
    </span>
  );
}
