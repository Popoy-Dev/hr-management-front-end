import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  // add userrole middleware for the backend for security purposes
  // front end handle the userRole by saving the info in localStorage or state (redux/zustand)
  return (
    <section className=''>

      
      <Navbar />

      <div className='h-screen flex'>
        <Sidebar />

        <div>
          <h1>Dashboard</h1>

        </div>

        <div className='flex-1 bg-red-400'>{children}</div>
      </div>
    </section>
  )
}
