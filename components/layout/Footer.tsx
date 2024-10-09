import React from 'react';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <div className="text-center h-14">
      <p className="w-full">&copy; {anoAtual} Teste Vocacional Unidesc. Todos os direitos reservados.</p>
    </div>
  );
}
