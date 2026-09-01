import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AdminOverview from './admin/AdminOverview';
import AdminComplaints from './admin/AdminComplaints';
import AdminDepartments from './admin/AdminDepartments';
import AdminUsers from './admin/AdminUsers';
import AdminAIAnalytics from './admin/AdminAIAnalytics';
import AdminHotspots from './admin/AdminHotspots';
import AdminReports from './admin/AdminReports';
import AdminNotFound from './admin/AdminNotFound';

export default function AdminDashboard({ navigateTo, user, complaints = [], section }) {
    const location = useLocation();

    // Determine current active admin section from URL pathname or prop
    const getActiveSection = () => {
        if (section) return section;

        const path = location.pathname.toLowerCase().replace(/\/$/, '');
        if (path === '/admin' || path === '/admin/overview' || path === 'admin_dashboard') return 'overview';
        if (path === '/admin/complaints' || path === 'admin_complaints') return 'complaints';
        if (path === '/admin/departments' || path === 'departments') return 'departments';
        if (path === '/admin/users' || path === 'users') return 'users';
        if (path === '/admin/ai-analytics' || path === '/admin/ai_analytics' || path === 'ai_analytics') return 'ai-analytics';
        if (path === '/admin/hotspots' || path === '/admin/admin_hotspots' || path === 'admin_hotspots') return 'hotspots';
        if (path === '/admin/reports' || path === '/admin/admin_reports' || path === 'admin_reports') return 'reports';

        if (path.startsWith('/admin/')) return 'not-found';
        return 'overview';
    };

    const currentSection = getActiveSection();

    const renderAdminSection = () => {
        switch (currentSection) {
            case 'complaints':
                return <AdminComplaints navigateTo={navigateTo} complaints={complaints} />;
            case 'departments':
                return <AdminDepartments navigateTo={navigateTo} />;
            case 'users':
                return <AdminUsers navigateTo={navigateTo} />;
            case 'ai-analytics':
                return <AdminAIAnalytics navigateTo={navigateTo} />;
            case 'hotspots':
                return <AdminHotspots navigateTo={navigateTo} />;
            case 'reports':
                return <AdminReports navigateTo={navigateTo} />;
            case 'not-found':
                return <AdminNotFound navigateTo={navigateTo} />;
            case 'overview':
            default:
                return <AdminOverview navigateTo={navigateTo} />;
        }
    };

    return (
        <div className="bg-background text-on-background min-h-screen flex antialiased">
            {/* Admin Sidebar */}
            <Sidebar role="admin" activePage={`/admin/${currentSection}`} navigateTo={navigateTo} />

            {/* Main Content Area */}
            <div className="flex-1 md:ml-[280px] flex flex-col min-h-screen">
                <Header activePage="admin_dashboard" navigateTo={navigateTo} user={user} />

                <main className="flex-1 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full">
                    {renderAdminSection()}
                </main>
            </div>
        </div>
    );
}
