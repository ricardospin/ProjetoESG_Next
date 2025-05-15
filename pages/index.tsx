
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-50 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-900 mb-6">
          Bem-vindo à Plataforma ESG 🌱
        </h1>
        <p className="text-lg text-green-800 mb-8">
          Nossa missão é promover práticas sustentáveis por meio da tecnologia. Aqui você pode:
        </p>
        <ul className="text-left text-green-700 list-disc list-inside mb-8">
          <li>Cadastrar-se e acompanhar seu impacto</li>
          <li>Utilizar a calculadora de carbono</li>
          <li>Aprender sobre conceitos ESG</li>
          <li>Integrar dados da sua empresa</li>
          <li>Acessar suporte técnico e educativo</li>
        </ul>
        <div className="flex flex-col items-center gap-4">
          <Link href="/cadastro">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Ir para Cadastro
            </button>
          </Link>
          <a
            href="https://chatbotesg.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-900 underline hover:text-green-700"
          >
            Acesse nosso Chatbot ESG 🤖
          </a>
        </div>
      </div>
    </main>
  );
}
