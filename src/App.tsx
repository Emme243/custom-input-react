import background from './assets/background.jpg';
import SingUpForm from './components/SingUpForm';

function App() {
  return (
    <>
      <div className="px-20 my-12 space-y-20 relative z-10">
        {/*NAVBAR*/}
        <nav className="flex items-baseline text-white">
          <div className="[clip-path:circle(50%_at_50%_50%)] w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-700 mr-3 transform translate-y-1/4" />
          <span className="font-semibold text-lg">Anywhere app</span>
          <div className="[clip-path:circle(50%_at_50%_50%)] w-1 h-1 bg-primary-500 transform translate-y-full ml-0.5" />
          <span className="transition cursor-pointer ml-28 font-semibold text-dark-500 hover:text-dark-300">
            Home
          </span>
          <span className="transition cursor-pointer ml-28 font-semibold text-dark-500 hover:text-dark-300">
            Join
          </span>
          <span className="transition cursor-pointer ml-28 font-semibold text-dark-500 hover:text-dark-300">
            Pricing
          </span>
        </nav>

        <main className="space-y-10">
          {/*HEADER*/}
          <header className="text-white space-y-2">
            <span className="font-semibold text-sm text-dark-400 uppercase">Start for free</span>
            <div className="flex items-end">
              <span className="font-semibold text-6xl">Create new account</span>
              <div className="[clip-path:circle(50%_at_50%_50%)] w-3 h-3 bg-primary-500 transform -translate-y-3/4 ml-2" />
            </div>
            <span className="inline-block">
              <span className="text-dark-400">Already a member? </span>
              <span className="text-primary-500 cursor-pointer">Log In</span>
            </span>
          </header>

          {/*FORM*/}
          <SingUpForm className="w-[600px]" />
        </main>
      </div>
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-dark-900 to-dark-900/80"></div>
        <img src={background} alt="Background image" className="w-full h-full object-cover" />
      </div>
    </>
  );
}

export default App;
