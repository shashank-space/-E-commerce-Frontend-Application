import { UserCircle, Mail, ShieldCheck } from "lucide-react";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-white rounded-2xl shadow-md p-8">

        <div className="flex items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {user?.name}
            </h1>

            <p className="text-gray-500">
              Welcome back!
            </p>
          </div>

        </div>

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">
            <UserCircle className="text-blue-600" />
            <div>
              <p className="text-gray-500">Name</p>
              <h2 className="font-semibold">{user?.name}</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" />
            <div>
              <p className="text-gray-500">Email</p>
              <h2 className="font-semibold">{user?.email}</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-blue-600" />
            <div>
              <p className="text-gray-500">Account Status</p>
              <h2 className="font-semibold text-green-600">
                Active
              </h2>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;