import MainLayout from "../layout/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-primary">About SocialApp</h1>
        <p className="mt-3 text-gray-600">
          This is a modern social media frontend built with React + TypeScript.
        </p>
      </div>
    </MainLayout>
  );
}