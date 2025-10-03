export default function TopNavigation() {
  return (
    <nav className="top-navigation max-w-full flex justify-between px-18 py-4 shadow-xl">
      <div className="text-logo text-[28px]">
        <h1>Jhon Doe</h1>
      </div>
      <div className="px-4 py-2">
        <ul className="flex gap-6">
          <li className="p-4 active rounded-2xl">
            <a href="" className="items-center flex flex-col text-[18px]">
              Home
            </a>
          </li>
          <li className="p-4 rounded-2xl">
            <a href="" className="items-center flex flex-col text-[18px]">
              Resume
            </a>
          </li>
          <li className="p-4 rounded-2xl">
            <a href="" className="items-center flex flex-col text-[18px]">
              Work
            </a>
          </li>
          <li className="p-4 rounded-2xl">
            <a href="" className="items-center flex flex-col text-[18px]">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="theme">Theme</div>
    </nav>
  );
}
