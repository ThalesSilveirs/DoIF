import React from 'react';

interface LandingPageProps {
  onEnterApp: () => void; // Callback para quando o usuário quiser entrar no app
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-4 sm:p-8">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden p-8 sm:p-12 text-center transform transition-all duration-300 hover:scale-105">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          DoIF <span className="block text-indigo-600 text-3xl sm:text-4xl mt-2">Organize suas ideias, simplifique sua vida.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
          O DoIF é o seu espaço intuitivo para notas, tarefas, planejamentos e muito mais. Tudo em um só lugar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <span className="text-4xl text-purple-600 mb-4">📝</span>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Notas Poderosas</h3>
            <p className="text-gray-600 text-center">Capture ideias com rich text, listas e formatação flexível.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <span className="text-4xl text-indigo-600 mb-4">✅</span>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Gerenciamento de Tarefas</h3>
            <p className="text-gray-600 text-center">Organize suas tarefas com prazos e status.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <span className="text-4xl text-pink-600 mb-4">🚀</span>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Colaboração Intuitiva</h3>
            <p className="text-gray-600 text-center">Compartilhe e trabalhe com sua equipe em tempo real.</p>
          </div>
        </div>

        <button
          onClick={onEnterApp}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Entrar no DoIF
        </button>

        <p className="mt-8 text-gray-500 text-sm">
          Comece a organizar sua vida digital hoje mesmo.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
