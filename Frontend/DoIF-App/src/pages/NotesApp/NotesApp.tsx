import React from 'react';

interface NotesAppProps {
  onGoBack: () => void; // Callback para voltar à Landing Page
}

const NotesApp: React.FC<NotesAppProps> = ({ onGoBack }) => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center p-4 sm:p-8">
      {/* Cabeçalho do App Principal */}
      <header className="w-full max-w-7xl bg-white shadow-md rounded-lg p-6 flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Bem-vindo ao <span className="text-purple-600">DoIF App</span>
        </h1>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200"
          >
            Nova Página
          </button>
          <button
            onClick={onGoBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200"
          >
            Sair
          </button>
        </div>
      </header>

      {/* Conteúdo Principal do App (placeholder) */}
      <main className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Barra Lateral (Exemplo) */}
        <aside className="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Navegação</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">Minhas Páginas</a>
            </li>
            <li>
              <a href="#" className="block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">Tarefas</a>
            </li>
            <li>
              <a href="#" className="block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">Projetos</a>
            </li>
            <li>
              <a href="#" className="block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">Configurações</a>
            </li>
          </ul>
        </aside>

        {/* Área de Conteúdo Principal */}
        <section className="md:col-span-3 bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sua Área de Trabalho</h2>
          <p className="text-gray-600 text-lg mb-4">
            Este é o ponto de partida para o seu aplicativo DoIF. Aqui você poderá criar e organizar suas notas, documentos e projetos.
          </p>
          <p className="text-gray-600">
            Comece criando uma nova página ou importando conteúdo existente. A modularização facilitará a adição de funcionalidades como editor de texto rich text, gerenciamento de banco de dados, etc.
          </p>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200 text-blue-800">
            <h3 className="font-semibold text-xl mb-2">Próximos Passos:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Implementar um editor de texto (ex: Quill, Slate.js).</li>
              <li>Adicionar funcionalidade de criação e edição de páginas.</li>
              <li>Integrar com um backend para persistência de dados.</li>
              <li>Expandir a navegação lateral com árvores de documentos.</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Rodapé (Opcional) */}
      <footer className="mt-12 text-gray-600 text-sm">
        DoIF App - Versão 0.1.0
      </footer>
    </div>
  );
};

export default NotesApp;
