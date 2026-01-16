
export default function Profile() {
  return (
    <>
      <h2 className="text-2xl font-semibold">Perfil</h2>
      <p className="mb-4 text-xl">Programador con experiencia en:</p>

      <ul className="ml-6 space-y-4 list-none mb-8">
        {/* Backend */}
        <li>
          <h3 className="text-xl font-semibold my-5"> Backend </h3>
          <ul className="ml-6 mt-2 flex flex-wrap gap-2 list-none">
            <li>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-800 text-sm px-3 py-1 font-medium shadow">
                <svg className="w-4 h-4" fill="#3c873a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm1.812 17.535c0 .96-.552 1.54-1.44 1.54-.75 0-1.185-.39-1.41-.96l-1.41.84c.54 1.05 1.62 1.695 2.88 1.695 1.725 0 2.97-1.08 2.97-3.045v-6.21h-1.59v6.14zm-6.51-6.615c-.96 0-1.8.375-2.325 1.005l1.125 1.08c.285-.3.705-.555 1.2-.555.69 0 1.155.39 1.155 1.14v.15l-1.17.06c-1.515.09-2.4.705-2.4 2.01 0 1.17.945 1.935 2.22 1.935.9 0 1.545-.45 1.875-1.005.045.345.12.69.225.96h1.59c-.15-.465-.225-1.11-.225-1.665v-2.79c0-1.485-1.005-2.325-2.37-2.325zm.33 4.56c-.39 0-.66-.195-.66-.51 0-.48.555-.63 1.11-.66l.585-.03v.315c0 .705-.48.885-1.035.885z" />
                </svg>
                NodeJS
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 text-violet-800 text-sm px-3 py-1 font-medium shadow">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <title>.NET</title>
                  <path d="M3 12c0-4.971 4.029-9 9-9s9 4.029 9 9-4.029 9-9 9S3 16.971 3 12zm9-6a6 6 0 100 12A6 6 0 0012 6z"/>
                </svg>
                .NET
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-800 text-sm px-3 py-1 font-medium shadow">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <title>PHP</title>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.25c0 .414-.336.75-.75.75h-6.5a.75.75 0 010-1.5h5.75c.276 0 .5-.224.5-.5V11.5c0-1.933-2.09-3.5-4.5-3.5S5.75 9.567 5.75 11.5v.75a.75.75 0 01-1.5 0V11.5C4.25 8.567 8.09 6.5 12 6.5s7.75 2.067 7.75 5.0v2.75z"/>
                </svg>
                PHP
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-200 text-gray-900 text-sm px-3 py-1 font-medium shadow">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2zm0 4h10v2H4v-2z"/></svg>
                Express
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-800 text-sm px-3 py-1 font-medium shadow">
                <svg className="w-4 h-4" fill="#3776AB" viewBox="0 0 24 24"><path d="M14.25 0c-.745.002-1.463.067-2.156.188-.956.162-1.693.548-2.188 1.094-.494.545-.906 1.144-1.344 1.781-.487.704-.894 1.498-1.438 2.062C6.293 5.508 6 6.02 6 6.75v3.5h7.75c1.063 0 1.25.406 1.25 1.438V12H5.875C4.174 12 3 13.3 3 14.937c0 .968.23 1.692.688 2.281.514.666 1.222 1.223 2.094 1.406.781.162 1.594.313 2.469.344.982.033 1.98-.027 2.875-.188.931-.168 1.685-.487 2.156-1.062.47-.576.874-1.174 1.344-1.844.451-.63.908-1.307 1.406-1.844.4-.433.688-.95.688-1.688v-3.5H12.25c-1.063 0-1.25-.406-1.25-1.438V6H18.25c1.7 0 2.875-1.3 2.875-2.938 0-.968-.23-1.692-.688-2.281-.514-.666-1.222-1.223-2.094-1.406C17.562.062 16.75-.088 15.875-.125A12.173 12.173 0 0 0 14.25 0zM9.5 1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/></svg>
                Python
              </span>
            </li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-800 text-sm px-3 py-1 font-medium shadow">🔥 Flask</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-800 text-sm px-3 py-1 font-medium shadow">🍃 MongoDB</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-800 text-sm px-3 py-1 font-medium shadow">🛢 MySQL</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-800 text-sm px-3 py-1 font-medium shadow">🐘 PostgreSQL</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-800 text-sm px-3 py-1 font-medium shadow">🪟 SQL Server</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-blue-200 text-blue-900 text-sm px-3 py-1 font-medium shadow">🌐 REST API</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-gray-200 text-black text-sm px-3 py-1 font-medium shadow">🔌 WebSocket</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-800 text-sm px-3 py-1 font-medium shadow">🚦 Socket.IO</span></li>
          </ul>
        </li>

        {/* Frontend */}
        <li>
          <h3 className="text-xl font-semibold my-5"> Frontend </h3>
          <ul className="ml-6 mt-2 flex flex-wrap gap-2 list-none">
            <li><span className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-800 text-sm px-3 py-1 font-medium shadow">⚛️ React</span></li>
            <li>
              <span className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-800 text-sm px-3 py-1 font-medium shadow">
                🅰️ Angular
              </span>
            </li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-pink-100 text-pink-800 text-sm px-3 py-1 font-medium shadow">🌐 HTML</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-800 text-sm px-3 py-1 font-medium shadow">🎨 CSS</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-800 text-sm px-3 py-1 font-medium shadow">📜 JavaScript</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-teal-100 text-teal-800 text-sm px-3 py-1 font-medium shadow">💨 Tailwind CSS</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-800 text-sm px-3 py-1 font-medium shadow">📦 Bootstrap</span></li>
          </ul>
        </li>

        {/* Data Science */}
        <li>
          <h3 className="text-xl font-semibold my-5">Data Science</h3>
          <ul className="ml-6 mt-2 flex flex-wrap gap-2 list-none">
            <li><span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-800 text-sm px-3 py-1 font-medium shadow">🐍 Python</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-800 text-sm px-3 py-1 font-medium shadow">🔢 NumPy</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-800 text-sm px-3 py-1 font-medium shadow">🧮 Pandas</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-800 text-sm px-3 py-1 font-medium shadow">📊 Matplotlib</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-800 text-sm px-3 py-1 font-medium shadow">🌊 Seaborn</span></li>
            <li><span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-800 text-sm px-3 py-1 font-medium shadow">🧠 Scikit-learn</span></li>
          </ul>
        </li>
      </ul>
    </>
  );
}