import Navbar from "../components/Navbar";

export default function MainLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-5xl mx-auto p-4">
        {children}
      </div>
    </div>
  );
}