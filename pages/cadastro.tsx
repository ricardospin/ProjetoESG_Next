
import { useState } from 'react';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem('Cadastro realizado com sucesso! ✅');
  };

  return (
    <main className="min-h-screen bg-white p-8 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-green-100 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">Cadastro de Usuário</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full mb-4 p-2 rounded border border-green-300"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded border border-green-300"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full mb-4 p-2 rounded border border-green-300"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Cadastrar
        </button>
        {mensagem && <p className="mt-4 text-green-700 text-center">{mensagem}</p>}
      </form>
    </main>
  );
}
