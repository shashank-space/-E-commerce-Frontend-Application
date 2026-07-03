import { Settings, Bell, Globe, Lock } from "lucide-react";

function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      <div className="bg-white rounded-2xl shadow-md p-8">

        <div className="flex items-center gap-3 mb-8">
          <Settings className="text-blue-600" />
          <h1 className="text-3xl font-bold">
            Settings
          </h1>
        </div>

        <div className="space-y-5">

          <div className="flex justify-between items-center p-4 border rounded-xl">
            <div className="flex items-center gap-3">
              <Bell className="text-blue-600" />
              <span>Email Notifications</span>
            </div>

            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="flex justify-between items-center p-4 border rounded-xl">
            <div className="flex items-center gap-3">
              <Globe className="text-blue-600" />
              <span>Language</span>
            </div>

            <select className="border rounded-lg px-3 py-2">
              <option>English</option>
            </select>
          </div>

          <div className="flex justify-between items-center p-4 border rounded-xl">
            <div className="flex items-center gap-3">
              <Lock className="text-blue-600" />
              <span>Password</span>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Change
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default SettingsPage;