import React from 'react';
import { ExternalLink, Printer } from 'lucide-react';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 print:bg-white print:py-0 print:px-0">
      <div className="max-w-4xl mx-auto mb-6 flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow transition-colors cursor-pointer"
        >
          <Printer size={18} />
          Imprimir / Salvar PDF
        </button>
      </div>

      <main className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 md:p-12 print:shadow-none print:p-0">
        <header className="border-b border-blue-200 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Jônatas Junio de Matos
          </h1>
          <p className="text-lg md:text-xl text-blue-600 font-medium mt-1">
            Analista de Dados | Business Intelligence (BI)
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-700 mt-4">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-gray-900">E-mail:</span>
              <a href="mailto:jonatas.matos00@gmail.com" className="text-blue-600 hover:underline">
                jonatas.matos00@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-gray-900">Tel:</span>
              <span>(11) 964147185</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-gray-900">Local:</span>
              <span>Bragança Paulista, SP</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-700 mt-2">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-gray-900">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/jonatas-matos-056271235/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                linkedin.com/in/jonatas-matos-056271235
                <ExternalLink size={14} className="inline" />
              </a>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-gray-900">GitHub:</span>
              <a
                href="https://github.com/Jonatasmatos1995"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                github.com/Jonatasmatos1995
                <ExternalLink size={14} className="inline" />
              </a>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase border-b border-gray-200 pb-2 mb-4">
            Resumo Profissional
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Profissional em transição para a área de Dados, focado nas posições de Analista de Dados Júnior e Analista de Business Intelligence (BI) Júnior. Possuo experiência prática no desenvolvimento de projetos ponta a ponta, realizando a estruturação, modelagem e manipulação de bancos de dados relacionais com SQL (MySQL Workbench), além da criação de dashboards interativos e métricas de negócio (DAX) no Power BI. Busco uma oportunidade para aplicar minhas competências analíticas e apoiar a tomada de decisões estratégicas da empresa.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase border-b border-gray-200 pb-2 mb-4">
            Projetos em Destaque
          </h2>

          <div className="space-y-4">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-base font-bold text-gray-900">
                  Dashboard de Vendas do Mercado
                </h3>
                <div className="flex items-center gap-4 text-sm mt-1 md:mt-0">
                  <a
                    href="https://github.com/Jonatasmatos1995/Dashboard-Vendas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium flex items-center gap-1"
                  >
                    Código (GitHub)
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://dashboard-vendas-one.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium flex items-center gap-1"
                  >
                    Projeto Online (Vercel)
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">
                Desenvolvimento de painel gerencial para análise de indicadores comerciais, consolidando faturamento total, volume de vendas, ticket médio, ranking de produtos mais vendidos, gastos por cliente e distribuição por formas de pagamento.
              </p>
              <p className="text-xs text-gray-600 mt-1 font-medium">
                Tecnologias: Power BI, DAX, SQL, HTML5/CSS3 e Git/GitHub.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase border-b border-gray-200 pb-2 mb-4">
            Experiência Profissional
          </h2>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-base font-bold text-gray-900">Operador de Máquinas</h3>
                <p className="text-sm font-medium text-gray-700">MT Usinagem</p>
                <p className="text-sm text-gray-600 mt-1">Operador de Máquinas Convencionais e CNC</p>
              </div>
              <div className="text-sm text-gray-600 mt-1 md:mt-0 font-medium whitespace-nowrap">
                11/03/2013 - 02/05/2018
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-base font-bold text-gray-900">Operador de Máquinas</h3>
                <p className="text-sm font-medium text-gray-700">Max Gear LTDA</p>
                <p className="text-sm text-gray-600 mt-1">Operador de Máquinas Convencionais e CNC</p>
              </div>
              <div className="text-sm text-gray-600 mt-1 md:mt-0 font-medium whitespace-nowrap">
                07/02/2019 - 04/08/2026
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase border-b border-gray-200 pb-2 mb-4">
            Formação Acadêmica
          </h2>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Tecnologia em Gestão da Tecnologia da Informação
                </h3>
                <p className="text-sm text-gray-700">Fatec Bragança Paulista</p>
              </div>
              <div className="text-sm text-gray-600 mt-1 md:mt-0 font-medium whitespace-nowrap">
                07/2018 - 09/2021
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Análise em Desenvolvimento de Sistemas
                </h3>
                <p className="text-sm text-gray-700">Instituto Federal de São Paulo</p>
              </div>
              <div className="text-sm text-gray-600 mt-1 md:mt-0 font-medium whitespace-nowrap">
                07/2025 - Previsão em 2028
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase border-b border-gray-200 pb-2 mb-4">
            Habilidades & Competências
          </h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3.5 py-1.5 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-md font-medium shadow-sm">
              SQL / MySQL Workbench <span className="text-gray-500 font-normal">(Intermediário)</span>
            </span>
            <span className="px-3.5 py-1.5 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-md font-medium shadow-sm">
              Power BI & DAX <span className="text-gray-500 font-normal">(Intermediário)</span>
            </span>
            <span className="px-3.5 py-1.5 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-md font-medium shadow-sm">
              Modelagem de Dados & ETL <span className="text-gray-500 font-normal">(Intermediário)</span>
            </span>
            <span className="px-3.5 py-1.5 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-md font-medium shadow-sm">
              HTML5 / CSS3 <span className="text-gray-500 font-normal">(Básico)</span>
            </span>
            <span className="px-3.5 py-1.5 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-md font-medium shadow-sm">
              Git & GitHub Workflow <span className="text-gray-500 font-normal">(Básico)</span>
            </span>
            <span className="px-3.5 py-1.5 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-md font-medium shadow-sm">
              Inglês <span className="text-gray-500 font-normal">(Básico)</span>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}