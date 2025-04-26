Social Media Dashboard - Next.js


Live Demo: https://socia-media-dashboard-abhineet.netlify.app/

Demo Credentials

Admin Login:

Email: admin@example.com

Password: admin@98765

User Login:

Email: user@example.com

Password: user@98765

Project Overview
This project is a Social Media Dashboard built using Next.js. It features full authentication, protected routes, role-based access control, dynamic layouts, and real-time content management.
It demonstrates how to create a scalable, modular dashboard for Admins and Users with different UI experiences.

Features
1. Authentication System
Login System:

Built with Mock API (can integrate Firebase/Auth0/local JWT).

Stores user credentials and tokens in Redux Toolkit and localStorage.

Displays user-friendly login error messages (wrong email/password).

Role-Based Login:

Supports two roles:

Admin

User

2. Protected Routes
Access Control:

Implemented using Next.js App Router.

Only authenticated users can access dashboard pages.

Unauthenticated users are redirected to the login page.

Role-Based Routing:

Admins can access all /admin/* routes.

Regular users can access /dashboard/* routes.

3. Dashboard UI Layout
Dynamic Dashboard Layouts:

Sidebar with navigation links (Dashboard, Profile, Settings, etc.).

Topbar with user information and a logout button.

Main content area that updates based on the selected route.

Separate Admin and User Layouts:

Admin dashboard includes extra sections like:

User Management

Post Moderation

User dashboard focuses on:

Personal profile

Saved posts

Settings

4. Dashboard Functionalities
For All Authenticated Users (Admin + User)
View and edit profile information.

Change password.

View saved/bookmarked posts (connected to Task 1 functionality).

Update profile picture (mock upload supported).

Admin-Only Functionalities
User Management:

View list of all users.

Edit user roles (switch between Admin/User).

Enable or disable user accounts.

Post Moderation:

View all posts.

Approve or reject pending posts.

Delete inappropriate posts.

5. State Management & Persistence
Managed via Redux Toolkit.

Persistent states using localStorage.

Auth details and user data are efficiently managed and synchronized across the app.
