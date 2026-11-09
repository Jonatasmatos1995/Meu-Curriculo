{/* Projetos em Destaque */}
<section className="mb-8">
  <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase border-b border-gray-200 pb-2 mb-4">
    Projetos em Destaque
  </h2>

  <div className="space-y-4">
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <h3 className="text-base font-bold text-gray-900">
          Dashboard de Vendas do Mercado | Power BI & SQL
        </h3>
        <a
          href="https://github.com/jonatas-matos-056271235/dashboard-vendas-mercado"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline font-medium inline-flex items-center gap-1 mt-1 md:mt-0 print:hidden"
        >
          Ver no GitHub <ExternalLink size={14} />
        </a>
      </div>
      
      <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">
        Desenvolvimento de um dashboard analítico no Power BI para monitoramento de vendas de supermercado. Criação de métricas de negócio com DAX (Faturamento Total, Total de Vendas e Ticket Médio), análise de produtos mais vendidos, distribuição de formas de pagamento e detalhamento por clientes.
      </p>

      {/* Badges dos conceitos aplicados no projeto */}
      <div className="flex flex-wrap gap-2 mt-2.5">
        <span className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded border border-gray-300 font-medium">
          Power BI
        </span>
        <span className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded border border-gray-300 font-medium">
          Métricas DAX
        </span>
        <span className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded border border-gray-300 font-medium">
          Modelagem de Dados
        </span>
        <span className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded border border-gray-300 font-medium">
          Visualização de Dados
        </span>
      </div>
    </div>
  </div>
</section>