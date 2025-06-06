import React, { useState } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import NotesApp from './pages/NotesApp/NotesApp';

function App() {
  // Estado para controlar qual página está sendo exibida: 'landing' ou 'main'
  const [currentPage, setCurrentPage] = useState<'landing' | 'main'>('landing');

  // Função para navegar para a página principal
  const goToNotesApp = () => {
    setCurrentPage('main');
  };

  // Função para navegar de volta para a landing page (se necessário)
  const goToLandingPage = () => {
    setCurrentPage('landing');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      {/* Renderiza a LandingPage ou a NotesApp com base no estado `currentPage` */}
      {currentPage === 'landing' ? (
        <LandingPage onEnterApp={goToNotesApp} />
      ) : (
        <NotesApp onGoBack={goToLandingPage} /> // Passa uma função para voltar se necessário
      )}
    </div>
  );
}

export default App;
