import { useState } from 'react';
import {Bell,AlignJustify,FolderHeart} from "lucide-react"
export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-gray-800 text-gray-100 w-64 p-6 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 md:w-64 z-30`}
      >
        <h2 className="text-2xl font-semibold text-white mb-8">Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-400 hover:text-white">
            Overview
          </a>
          <a href="#" className="block text-gray-400 hover:text-white">
            Tasks
          </a>
          <a href="#" className="block text-gray-400 hover:text-white">
            Messages
          </a>
          <a href="#" className="block text-gray-400 hover:text-white">
            Settings
          </a>
          <a href="#" className="block text-gray-400 hover:text-white">
            Profile
          </a>
        </nav>
      </aside>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md w-full">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Sidebar Toggle Button */}
            <button
              className="text-gray-500 focus:outline-none md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <AlignJustify/>
            </button>

            {/* Search and Profile */}
            <div className="flex items-center space-x-6">
              <input
                type="text"
                className="border px-4 py-2 rounded-lg"
                placeholder="Search"
              />
              <div className="relative">
                <button className="text-gray-500">
                <Bell/>
                </button>
              </div>
              <div className="relative">
                <button className="text-gray-500">
                <FolderHeart/>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Tasks</h3>
              <p className="text-3xl font-bold">120</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Messages</h3>
              <p className="text-3xl font-bold">32</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Projects</h3>
              <p className="text-3xl font-bold">14</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Users</h3>
              <p className="text-3xl font-bold">85</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-lg font-semibold mb-4">Performance Chart</h3>
            <div className="w-full h-64 bg-gray-100">[Chart Placeholder]</div>
          </div>

          {/* Data Table */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Recent Tasks</h3>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Task</th>
                  <th className="px-4 py-2">Assignee</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Design new dashboard</td>
                  <td className="border px-4 py-2">John Doe</td>
                  <td className="border px-4 py-2">In Progress</td>
                  <td className="border px-4 py-2">2024-10-10</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Fix user login issue</td>
                  <td className="border px-4 py-2">Jane Smith</td>
                  <td className="border px-4 py-2">Completed</td>
                  <td className="border px-4 py-2">2024-09-28</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Deploy new feature</td>
                  <td className="border px-4 py-2">Alice Brown</td>
                  <td className="border px-4 py-2">Pending</td>
                  <td className="border px-4 py-2">2024-11-05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
