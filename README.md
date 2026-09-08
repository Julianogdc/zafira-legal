# Portal Jurídico e Institucional - Zafira Postiz

Portal institucional e jurídico estático da **Zafira Comunicação e Marketing**, desenvolvido para atender aos requisitos de conformidade, termos de uso, política de privacidade (LGPD) e diretrizes de revisão de aplicativo da **Meta for Developers** (Facebook e Instagram) para o sistema **Zafira Postiz**.

---

## 🌐 Domínio e Rotas Obrigatórias

- **Domínio Oficial:** `https://legal.zafiramkt.com.br`
- **Página Inicial:** `/`
- **Política de Privacidade:** `/politica-de-privacidade`
- **Termos de Serviço:** `/termos-de-servico`
- **Instruções de Exclusão de Dados:** `/exclusao-de-dados`
- **Robots / Crawlers:** `/robots.txt`

---

## ⚠️ Ação Obrigatória Antes do Deploy: Dados Reais da Empresa

Antes de subir para produção e submeter o link na plataforma Meta for Developers:
1. Abra o arquivo [`DADOS_A_PREENCHER.md`](DADOS_A_PREENCHER.md).
2. Substitua todos os marcadores visuais (`[RAZÃO SOCIAL]`, `[CNPJ]`, `[ENDEREÇO]`, `[E-MAIL DE PRIVACIDADE]`, `[E-MAIL DE CONTATO]`, etc.) pelos dados reais da Zafira nos arquivos dentro da pasta `public/`.
3. Garanta que nenhum marcador com a classe `.placeholder-highlight` permaneça visível.

---

## 🚀 Arquitetura Técnica

- **Front-end:** HTML5 semântico, CSS3 puro com variáveis e responsividade, Vanilla JavaScript.
- **Servidor Web:** Nginx Alpine (imagem ultraleve com menos de 25MB).
- **Roteamento:** Configurado com `try_files` para permitir acesso direto às rotas sem a extensão `.html` e funcionamento pleno após recarregar a página.
- **Porta interna:** Porta `80`.

---

## 🛠️ Teste Local com Docker

Para testar o container na sua máquina local antes de subir para o servidor:

```bash
# 1. Construir a imagem Docker
docker build -t zafira-legal .

# 2. Executar o container em uma porta de teste local (ex: 8085)
docker run -d --name zafira-legal-app -p 8085:80 zafira-legal

# 3. Acessar no seu navegador
# http://localhost:8085/
# http://localhost:8085/politica-de-privacidade
# http://localhost:8085/termos-de-servico
# http://localhost:8085/exclusao-de-dados

# 4. Parar e remover o container de teste após validar
docker stop zafira-legal-app && docker rm zafira-legal-app
```

---

## 📦 Implantação Passo a Passo no EasyPanel

O EasyPanel facilita o gerenciamento de containers com provisionamento automático de certificados SSL via Let's Encrypt.

### Opção 1: Implantação via Repositório Git (Recomendado)

1. Suba este projeto para o seu repositório privado no GitHub / GitLab / Gitea.
2. Acesse o painel do seu **EasyPanel**.
3. Selecione o projeto onde deseja hospedar o portal ou crie um novo projeto (ex: `zafira-legal`).
4. Clique em **+ Project Service** e selecione **App**.
5. Em **Source**:
   - Escolha **GitHub** (ou Git Repository).
   - Aponte para o repositório do projeto.
   - Branch: `main` (ou a branch principal utilizada).
6. Em **Build**:
   - Selecione **Dockerfile**.
   - O EasyPanel utilizará automaticamente o `Dockerfile` presente na raiz.
7. Em **Domains**:
   - Clique em **+ Add Domain**.
   - Domínio: `legal.zafiramkt.com.br`.
   - Porta do container: `80`.
   - Habilite a opção de SSL automático (HTTPS).
8. Clique em **Deploy**.

---

### Opção 2: Implantação via Docker Compose no EasyPanel

Caso prefira colar a configuração diretamente no EasyPanel:

1. No EasyPanel, clique em **+ Service** &rsaquo; **Compose**.
2. Cole o conteúdo do arquivo [`docker-compose.yml`](docker-compose.yml).
3. Certifique-se de que os arquivos do projeto estejam no diretório mapeado ou utilize a Opção 1 com Git para build automático.
4. Em **Domains**, adicione `legal.zafiramkt.com.br` direcionando para a porta `80` do serviço `zafira-legal`.

---

## 🌐 Configuração do DNS (Apontamento)

No painel onde o domínio `zafiramkt.com.br` é administrado (ex: Cloudflare, Registro.br, etc.):

1. Crie uma nova entrada DNS:
   - **Tipo:** `A` (ou `CNAME`)
   - **Nome / Host:** `legal`
   - **Destino / IP:** O endereço IP público do seu servidor onde o EasyPanel está instalado (ex: `123.456.78.90`).
   - Se utilizar **Cloudflare**, você pode ativar o proxy (nuvem laranja) ou manter DNS Only durante o primeiro provisionamento do certificado SSL no EasyPanel.
2. Aguarde a propagação (normalmente de 2 a 15 minutos).
3. O EasyPanel emitirá o certificado SSL automaticamente e o site passará a responder em `https://legal.zafiramkt.com.br`.

---

## 🔍 Validação para o Meta for Developers (Facebook & Instagram)

Após o domínio estar com HTTPS ativo, configure os links no painel do seu aplicativo Meta em **Configurações Básicas**:

| Campo no Meta for Developers | URL que você deve inserir |
| :--- | :--- |
| **URL da Política de Privacidade** | `https://legal.zafiramkt.com.br/politica-de-privacidade` |
| **URL dos Termos de Serviço** | `https://legal.zafiramkt.com.br/termos-de-servico` |
| **Instruções de Exclusão de Dados do Usuário** | `https://legal.zafiramkt.com.br/exclusao-de-dados` |

### Dica de Validação:
Teste as páginas na ferramenta oficial **[Meta Sharing Debugger](https://developers.facebook.com/tools/debug/)** para checar se o crawler da Meta consegue ler as meta tags Open Graph sem erros e com código HTTP `200 OK`.
