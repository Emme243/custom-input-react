function SingUpForm({ className }: { className?: string }) {
  return (
    <form className={`flex flex-col space-y-6 ${className}`}>
      <div className="text-white font-semibold">Here comes the inputs</div>

      <div />
      <div className="flex space-x-5">
        <button className="grow bg-dark-500 text-white font-semibold py-4 px-4 rounded-3xl shadow-lg text-sm hover:bg-dark-600">
          Change method
        </button>
        <button
          className="grow bg-primary-500 text-white font-semibold py-4 px-4 rounded-3xl shadow-xl shadow-primary-500/10 text-sm hover:bg-primary-400 transition hover:shadow-primary-400/10"
          type="submit"
        >
          Create account
        </button>
      </div>
    </form>
  );
}

export default SingUpForm;
