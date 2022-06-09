export default function Toast({ message }) {
    return (
      <div
        className={`fixed top-20 right-20 w-full max-w-sm px-6 py-4 bg-white shadow border border-b-indigo-500`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 fill-indigo-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span className="text-sm text-indigo-500">{message}</span>
          </div>
        </div>
      </div>
    );
  }
  