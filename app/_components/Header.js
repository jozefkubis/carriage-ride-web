import Navigation from "@/app/_components/Navigation"
// import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className="border-b border-primary-600 bg-primary-800 text-primary-50 px-8 py-5 shadow-md">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto w-full">
        {/* <Logo /> */}
        <Navigation />
      </div>
    </header>
  )
}

export default Header
