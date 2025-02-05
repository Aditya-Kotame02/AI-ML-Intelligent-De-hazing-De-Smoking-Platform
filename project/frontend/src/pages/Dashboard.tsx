import { BarChart, LineChart, Activity, Users, Image as ImageIcon, Clock } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">System Dashboard</h1>
        <p className="mt-2 text-gray-600">Monitor system performance and usage statistics.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: ImageIcon, label: "Processed Images", value: "1,234" },
          { icon: Clock, label: "Avg. Processing Time", value: "2.3s" },
          { icon: Users, label: "Active Users", value: "156" },
          { icon: Activity, label: "Success Rate", value: "99.8%" }
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Processing History</h2>
            <select className="rounded-md border-gray-300 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <LineChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-sm text-gray-500">Chart placeholder</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Performance Metrics</h2>
            <select className="rounded-md border-gray-300 text-sm">
              <option>PSNR</option>
              <option>SSIM</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-sm text-gray-500">Chart placeholder</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            { user: "user@example.com", action: "Processed image", time: "2 minutes ago" },
            { user: "another@example.com", action: "Updated settings", time: "1 hour ago" },
            { user: "test@example.com", action: "Processed image", time: "3 hours ago" }
          ].map((activity, index) => (
            <div key={index} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                </div>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}