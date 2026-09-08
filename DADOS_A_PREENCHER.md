# Lista de Dados a Preencher - Zafira Postiz

Este documento lista todas as informações reais da empresa **Zafira Comunicação e Marketing** que devem ser inseridas nos arquivos do portal antes da publicação em produção e submissão para a análise da **Meta for Developers**.

---

## Status de Prontidão

> [!WARNING]
> O site foi construído com marcadores visuais explícitos (ex: `[E-MAIL DE PRIVACIDADE]`, `[CNPJ]`, `[ENDEREÇO COMPLETO]`).
> **O projeto NÃO deve ser submetido à análise da Meta enquanto esses marcadores existirem nos arquivos HTML.**

---

## Tabela de Dados Reais Necessários

| Campo | Descrição | Onde Aparece | Marcador no Código |
| :--- | :--- | :--- | :--- |
| **Razão Social / Nome Empresarial** | Nome oficial registrado da empresa Zafira | Rodapé e cabeçalho de todas as páginas, Política de Privacidade e Termos de Serviço | `[ZAFIRA MARKETING & PUBLICIDADE]` |
| **CNPJ** | Cadastro Nacional da Pessoa Jurídica da empresa | Rodapé institucional, Termos de Serviço e Política de Privacidade | `[28.077.026/0001-57]` |
| **Endereço Completo** | Logradouro, número, complemento, bairro, cidade, estado e CEP | Política de Privacidade e rodapé institucional | `[Rua Ourinhos 74]` |
| **E-mail Oficial de Privacidade / DPO** | E-mail corporativo exclusivo para pedidos de privacidade e exclusão de dados | Política de Privacidade, Instruções de Exclusão de Dados e rodapé | `[zafiracomunicacao@gmail.com]` |
| **E-mail Geral de Contato / Suporte** | E-mail geral de atendimento e suporte aos usuários | Página inicial, Termos de Serviço e rodapé | `[zafiracomunicacao@gmail.com]` |
| **Nome do Encarregado de Dados (DPO)** | Nome do responsável pelas comunicações da LGPD (se aplicável) | Seção "Canal do Encarregado de Dados" na Política de Privacidade | `[Juliano Guerrero / Administrador]` |
| **Telefone / WhatsApp Comercial** *(Opcional)* | Telefone de contato institucional da empresa | Rodapé e canais de contato | `[47997719865]` |

---

## Arquivos que Devem Ser Editados para Substituição

Você pode realizar uma busca rápida ou substituição direta nos seguintes arquivos dentro da pasta `public/`:

1. `public/index.html` (página inicial)
2. `public/politica-de-privacidade.html`
3. `public/termos-de-servico.html`
4. `public/exclusao-de-dados.html`

> [!TIP]
> Todos os marcadores foram envolvidos pela classe CSS `.placeholder-highlight`. No navegador, eles aparecerão destacados com uma etiqueta amarela/laranja para facilitar a revisão visual.
