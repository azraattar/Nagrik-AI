import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CitizenDashboard from './pages/CitizenDashboard';
import SubmitComplaintPage from './pages/SubmitComplaintPage';
import MyComplaintsPage from './pages/MyComplaintsPage';
import ComplaintDetailPage from './pages/ComplaintDetailPage';
import OfficerDashboard from './pages/OfficerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import HelpPage from './pages/HelpPage';

const INITIAL_COMPLAINTS = [
    {
        id: 'CMP-2024-8902',
        title: 'Pothole on Main Street causing traffic hazards',
        description: `There is a massive pothole that has developed over the last week on Main Street, just past the intersection with 5th Avenue. It spans almost an entire lane and is extremely deep.

Several cars have hit it hard, and it's becoming a major traffic hazard, especially during rush hour. Immediate attention is requested before an accident occurs or serious vehicle damage is sustained.`,
        location: 'Downtown District, Sector 4',
        department: 'Public Works Department (PWD)',
        date: 'Oct 24, 2024, 09:15 AM',
        reporter: 'Rahul Sharma',
        status: 'In Progress',
        priority: 'High Priority',
        ward: 'ward_a'
    },
    {
        id: 'CMP-2024-7410',
        title: 'Broken Streetlight near Community Park',
        description: 'Streetlight pole #42 has been completely non-functional for 3 consecutive nights, causing safety concerns for pedestrians walking near the park entrance.',
        location: 'North Ward, Block C',
        department: 'Public Works Department (PWD)',
        date: 'Oct 22, 2024, 08:30 PM',
        reporter: 'Rahul Sharma',
        status: 'Open',
        priority: 'Normal',
        ward: 'ward_c'
    },
    {
        id: 'CMP-2024-6521',
        title: 'Garbage accumulation near Sector 2 Market',
        description: 'Waste management bins have overflowed onto the sidewalk. Requesting urgent cleaning team dispatch.',
        location: 'Central Market, Sector 2',
        department: 'Water & Sanitation Department',
        date: 'Oct 18, 2024, 11:00 AM',
        reporter: 'Rahul Sharma',
        status: 'Resolved',
        priority: 'Normal',
        ward: 'ward_b'
    }
];

export default function App() {
    const navigate = useNavigate();
    const location = useLocation();

    const [currentUser, setCurrentUser] = useState(null);
    const [complaints, setComplaints] = useState(INITIAL_COMPLAINTS);
    const [selectedComplaint, setSelectedComplaint] = useState(INITIAL_COMPLAINTS[0]);

    // Unified navigateTo function supporting both legacy IDs and URLs
    const navigateTo = (target) => {
        if (!target) return;

        // Map legacy page IDs to URLs
        const routeMap = {
            landing: '/',
            login: '/login',
            citizen_dashboard: '/dashboard',
            dashboard: '/dashboard',
            submit_complaint: '/submit_complaint',
            my_complaints: '/my_complaints',
            complaint_detail: '/complaint_detail',
            help: '/help',
            officer_dashboard: '/officer_dashboard',
            department: '/officer_dashboard',
            admin_dashboard: '/admin',
            admin_complaints: '/admin/complaints',
            departments: '/admin/departments',
            users: '/admin/users',
            ai_analytics: '/admin/ai-analytics',
            admin_hotspots: '/admin/hotspots',
            admin_reports: '/admin/reports'
        };

        const resolvedPath = routeMap[target] || target;
        navigate(resolvedPath);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLoginSuccess = (userObj) => {
        setCurrentUser(userObj);
    };

    const handleNewComplaintSubmit = (newComplaint) => {
        setComplaints((prev) => [newComplaint, ...prev]);
        setSelectedComplaint(newComplaint);
    };

    const handleViewDetail = (complaintItem) => {
        setSelectedComplaint(complaintItem);
        navigateTo('/complaint_detail');
    };

    const handleUpdateStatus = (complaintId, newStatus) => {
        setComplaints((prev) =>
            prev.map((c) => (c.id === complaintId ? { ...c, status: newStatus } : c))
        );
        if (selectedComplaint && selectedComplaint.id === complaintId) {
            setSelectedComplaint((prev) => ({ ...prev, status: newStatus }));
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Routes>
                {/* Landing & Authentication */}
                <Route path="/" element={<LandingPage navigateTo={navigateTo} user={currentUser} />} />
                <Route path="/landing" element={<LandingPage navigateTo={navigateTo} user={currentUser} />} />
                <Route
                    path="/login"
                    element={<LoginPage navigateTo={navigateTo} onLoginSuccess={handleLoginSuccess} />}
                />

                {/* Citizen Routes */}
                <Route
                    path="/dashboard"
                    element={
                        <CitizenDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            onViewDetail={handleViewDetail}
                        />
                    }
                />
                <Route
                    path="/citizen_dashboard"
                    element={
                        <CitizenDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            onViewDetail={handleViewDetail}
                        />
                    }
                />
                <Route
                    path="/submit_complaint"
                    element={
                        <SubmitComplaintPage
                            navigateTo={navigateTo}
                            user={currentUser}
                            onSubmitSuccess={handleNewComplaintSubmit}
                        />
                    }
                />
                <Route
                    path="/submit-complaint"
                    element={
                        <SubmitComplaintPage
                            navigateTo={navigateTo}
                            user={currentUser}
                            onSubmitSuccess={handleNewComplaintSubmit}
                        />
                    }
                />
                <Route
                    path="/my_complaints"
                    element={
                        <MyComplaintsPage
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            onViewDetail={handleViewDetail}
                        />
                    }
                />
                <Route
                    path="/my-complaints"
                    element={
                        <MyComplaintsPage
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            onViewDetail={handleViewDetail}
                        />
                    }
                />
                <Route
                    path="/complaint_detail"
                    element={
                        <ComplaintDetailPage
                            complaint={selectedComplaint}
                            navigateTo={navigateTo}
                            user={currentUser}
                            onUpdateStatus={handleUpdateStatus}
                        />
                    }
                />
                <Route path="/help" element={<HelpPage navigateTo={navigateTo} user={currentUser} />} />

                {/* Officer Routes */}
                <Route
                    path="/officer_dashboard"
                    element={
                        <OfficerDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            onViewDetail={handleViewDetail}
                        />
                    }
                />
                <Route
                    path="/officer"
                    element={
                        <OfficerDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            onViewDetail={handleViewDetail}
                        />
                    }
                />
                <Route
                    path="/department"
                    element={
                        <OfficerDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            onViewDetail={handleViewDetail}
                        />
                    }
                />

                {/* Admin Portal Routes */}
                <Route
                    path="/admin"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="overview"
                        />
                    }
                />
                <Route
                    path="/admin/overview"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="overview"
                        />
                    }
                />
                <Route
                    path="/admin/complaints"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="complaints"
                        />
                    }
                />
                <Route
                    path="/admin/departments"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="departments"
                        />
                    }
                />
                <Route
                    path="/admin/users"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="users"
                        />
                    }
                />
                <Route
                    path="/admin/ai-analytics"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="ai-analytics"
                        />
                    }
                />
                <Route
                    path="/admin/ai_analytics"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="ai-analytics"
                        />
                    }
                />
                <Route
                    path="/admin/hotspots"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="hotspots"
                        />
                    }
                />
                <Route
                    path="/admin/admin_hotspots"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="hotspots"
                        />
                    }
                />
                <Route
                    path="/admin/reports"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="reports"
                        />
                    }
                />
                <Route
                    path="/admin/admin_reports"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="reports"
                        />
                    }
                />
                <Route
                    path="/admin/*"
                    element={
                        <AdminDashboard
                            navigateTo={navigateTo}
                            user={currentUser}
                            complaints={complaints}
                            section="not-found"
                        />
                    }
                />

                {/* Catch-all Fallback */}
                <Route path="*" element={<LandingPage navigateTo={navigateTo} user={currentUser} />} />
            </Routes>
        </div>
    );
}
