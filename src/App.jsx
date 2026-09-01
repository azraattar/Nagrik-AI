import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CitizenDashboard from './pages/CitizenDashboard';
import SubmitComplaintPage from './pages/SubmitComplaintPage';
import MyComplaintsPage from './pages/MyComplaintsPage';
import ComplaintDetailPage from './pages/ComplaintDetailPage';
import OfficerDashboard from './pages/OfficerDashboard';
import AdminDashboard from './pages/AdminDashboard';

const INITIAL_COMPLAINTS = [
    {
        id: 'CMP-2024-8902',
        title: 'Pothole on Main Street causing traffic hazards',
        description: `There is a massive pothole that has developed over the last week on Main Street, just past the intersection with 5th Avenue. It spans almost an entire lane and is extremely deep.

Several cars have hit it hard, and it's becoming a major traffic hazard, especially during rush hour. Immediate attention is requested before an accident occurs or serious vehicle damage is sustained.`,
        location: 'Downtown District, Sector 4',
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
        date: 'Oct 18, 2024, 11:00 AM',
        reporter: 'Rahul Sharma',
        status: 'Resolved',
        priority: 'Normal',
        ward: 'ward_b'
    }
];

export default function App() {
    const [activePage, setActivePage] = useState('landing'); // 'landing', 'login', 'citizen_dashboard', 'submit_complaint', 'my_complaints', 'complaint_detail', 'officer_dashboard', 'admin_dashboard'
    const [currentUser, setCurrentUser] = useState(null);
    const [complaints, setComplaints] = useState(INITIAL_COMPLAINTS);
    const [selectedComplaint, setSelectedComplaint] = useState(INITIAL_COMPLAINTS[0]);

    const navigateTo = (pageId) => {
        setActivePage(pageId);
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
        navigateTo('complaint_detail');
    };

    const handleUpdateStatus = (complaintId, newStatus) => {
        setComplaints((prev) =>
            prev.map((c) => (c.id === complaintId ? { ...c, status: newStatus } : c))
        );
        if (selectedComplaint && selectedComplaint.id === complaintId) {
            setSelectedComplaint((prev) => ({ ...prev, status: newStatus }));
        }
    };

    // Render view based on activePage
    const renderCurrentPage = () => {
        switch (activePage) {
            case 'login':
                return (
                    <LoginPage
                        navigateTo={navigateTo}
                        onLoginSuccess={handleLoginSuccess}
                    />
                );
            case 'citizen_dashboard':
                return (
                    <CitizenDashboard
                        navigateTo={navigateTo}
                        user={currentUser}
                        complaints={complaints}
                        onViewDetail={handleViewDetail}
                    />
                );
            case 'submit_complaint':
                return (
                    <SubmitComplaintPage
                        navigateTo={navigateTo}
                        user={currentUser}
                        onSubmitSuccess={handleNewComplaintSubmit}
                    />
                );
            case 'my_complaints':
                return (
                    <MyComplaintsPage
                        navigateTo={navigateTo}
                        user={currentUser}
                        complaints={complaints}
                        onViewDetail={handleViewDetail}
                    />
                );
            case 'complaint_detail':
                return (
                    <ComplaintDetailPage
                        complaint={selectedComplaint}
                        navigateTo={navigateTo}
                        user={currentUser}
                        onUpdateStatus={handleUpdateStatus}
                    />
                );
            case 'officer_dashboard':
                return (
                    <OfficerDashboard
                        navigateTo={navigateTo}
                        user={currentUser}
                        complaints={complaints}
                        onViewDetail={handleViewDetail}
                    />
                );
            case 'admin_dashboard':
                return (
                    <AdminDashboard
                        navigateTo={navigateTo}
                        user={currentUser}
                    />
                );
            case 'landing':
            default:
                return (
                    <LandingPage
                        navigateTo={navigateTo}
                        user={currentUser}
                    />
                );
        }
    };

    return <div className="min-h-screen bg-background">{renderCurrentPage()}</div>;
}
