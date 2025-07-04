# Diretrizes do Projeto Redfoot Labs

Este documento descreve as diretrizes e padrões a serem seguidos no desenvolvimento do projeto.

## 🚀 Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript puro (ES6+)
- **Backend**: Firebase (Authentication, Firestore)
- **Hospedagem**: GitHub Pages
- **Controle de Versão**: Git com GitHub

## 🛠 Configuração do Ambiente

1. Clone o repositório:

   ```bash
   git clone https://github.com/redfootlabs/redfootlabs.github.io.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Use o arquivo `.env.example` como referência
   - **NUNCA** adicione o arquivo `.env` ao controle de versão

4. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Adicione um aplicativo web ao seu projeto
   - As credenciais serão necessárias para configuração local

## 🔄 Fluxo de Desenvolvimento

### Estrutura de Branches

Utilizamos um fluxo baseado em branches com os seguintes prefixos:

#### Tipos de Branch

1. **feature/** - Desenvolvimento de novas funcionalidades
   - Padrão: `feature/nome-descritivo`
   - Exemplo: `feature/adiciona-carrinho`
   - Criada a partir de: `main`

2. **bugfix/** - Correção de bugs
   - Padrão: `bugfix/descricao-correcao`
   - Exemplo: `bugfix/corrige-calculo`
   - Criada a partir de: `main`

3. **hotfix/** - Correções críticas em produção
   - Padrão: `hotfix/descricao-urgente`
   - Exemplo: `hotfix/corrige-falha-seguranca`
   - Criada a partir de: `main`

4. **chore/** - Tarefas de manutenção
   - Padrão: `chore/descricao`
   - Exemplo: `chore/atualiza-dependencias`

5. **docs/** - Atualizações de documentação
   - Padrão: `docs/descricao`
   - Exemplo: `docs/atualiza-readme`

### Fluxo de Trabalho

1. Crie uma branch apropriada para sua tarefa:

   ```bash
   git checkout -b tipo/descricao-breve
   ```

2. Faça commits atômicos com mensagens descritivas no padrão:

   ```text
   tipo(escopo): descrição concisa
   
   Descrição mais detalhada se necessário
   ```

   Exemplo:

   ```text
   feat(auth): adiciona autenticação com Firebase
   
   - Implementa tela de login
   - Adiciona validação de formulário
   - Configura persistência de sessão
   ```

3. Mantenha sua branch atualizada:

   ```bash
   git pull origin main --rebase
   ```

4. Envie as alterações para o repositório remoto:

   ```bash
   git push -u origin nome-da-branch
   ```

5. Abra um Pull Request para revisão do administrador

### Versionamento com Tags

Utilizamos tags para marcar versões do projeto seguindo o padrão [SemVer](https://semver.org/lang/pt-BR/):

#### Estrutura de Versionamento

- `MAJOR`: Incrementado para mudanças incompatíveis
- `MINOR`: Incrementado para novas funcionalidades compatíveis
- `PATCH`: Incrementado para correções de bugs compatíveis

Exemplo: `v1.2.3`

#### Como criar uma nova versão

1. Certifique-se de que todas as alterações estejam commitadas
2. Atualize o número da versão no `package.json`
3. Crie uma tag anotada:

   ```bash
   git tag -a v1.2.3 -m "Versão 1.2.3: Descrição das principais mudanças"
   ```

4. Envie a tag para o repositório remoto:

   ```bash
   git push origin v1.2.3
   ```

#### Boas Práticas

- Use tags anotadas (`-a`) em vez de tags leves
- Sempre inclua uma mensagem descritiva (`-m`)
- Siga estritamente o padrão SemVer
- Documente as mudanças significativas no CHANGELOG.md
- Crie uma release no GitHub para cada versão estável

#### Listando tags existentes

```bash
# Listar todas as tags
git tag -l

# Ver detalhes de uma tag específica
git show v1.2.3
```

#### Trabalhando com tags

```bash
# Criar branch a partir de uma tag
git checkout -b nova-branch v1.2.3

# Voltar para um ponto específico
git checkout v1.2.3

# Deletar uma tag local
git tag -d v1.2.3

# Deletar uma tag remota
git push --delete origin v1.2.3
```

## 🔥 Estrutura de Pastas

```txt
.root
├── .github/                        # Configurações do GitHub
│   └── workflows/                  # Fluxos de CI/CD
│       └── deploy.yml              # Configuração de deploy automático
│
├── resources/                      # Recursos estáticos
│   ├── img/                        # Imagens do site
│   │   └── logo.jpg                # Logo da aplicação
│   └── style/                      # Estilos globais da aplicação
│       └── style.css               # Arquivo principal de estilos
│
├── .env                            # Variáveis de ambiente (não versionado)
├── .env.example                    # Exemplo de variáveis de ambiente
├── .gitignore                      # Arquivos ignorados pelo Git
├── CONTRIBUTING.md                 # Este arquivo
├── LICENSE.txt                     # Licença do projeto
├── README.md                       # Documentação principal
├── dashboard.html                  # Painel administrativo
├── firebase.js                     # Configuração do Firebase
├── firestoreService.js             # Serviços do Firestore
├── forms-cadastro-orcamento.html   # Formulário de orçamentos
├── index.html                      # Página inicial
├── login.html                      # Página de autenticação
├── package.json                    # Dependências do projeto
├── package-lock.json               # Versões exatas das dependências
├── testFirestore.js                # Testes do Firestore
└── vite.config.js                  # Configuração do Vite
```

### Descrição dos Principais Arquivos

- **.github/workflows/deploy.yml**: Configura o GitHub Actions para deploy automático
- **resources/img/**: Contém todos os ativos de imagem do site
- **resources/style/**: Contém os estilos globais da aplicação
  - `style.css`: Arquivo principal de estilos
- **.env**: Armazena as variáveis de ambiente locais (não versionado)
- **.env.example**: Modelo para criar o arquivo .env local
- **firebase.js**: Configuração e inicialização do Firebase
- **firestoreService.js**: Camada de serviços para interação com o Firestore
- **vite.config.js**: Configuração do Vite para desenvolvimento e build

### Arquivos de Configuração

- **.gitignore**: Especifica quais arquivos e pastas devem ser ignorados pelo Git
- **package.json**: Lista as dependências e scripts do projeto
- **vite.config.js**: Configurações do Vite para desenvolvimento e build

### Páginas Principais

- **index.html**: Página inicial da aplicação
- **login.html**: Tela de autenticação de usuários
- **dashboard.html**: Painel administrativo
- **forms-cadastro-orcamento.html**: Formulário para cadastro de orçamentos

## 🎨 Padrões de Código

### HTML

- Sempre use HTML semântico
- Use indentação de 4 espaços
- Atributos em ordem alfabética
- Use aspas duplas para atributos

### CSS

- **Estrutura de Arquivos**:
  - Todo o CSS deve estar centralizado em `/resources/style/style.css`
  - Use comentários para separar seções lógicas do CSS

- **Organização de Código**:
  - Use a metodologia BEM para nomenclatura de classes
  - Organize as propriedades em ordem alfabética
  - Agrupe seletores relacionados
  - Comente blocos de estilo significativos

- **Boas Práticas**:
  - Use variáveis CSS para cores, fontes e espaçamentos
  - Mantenha a especificidade baixa
  - Use unidades relativas (rem, em, %) quando apropriado
  - Documente variáveis e mixins personalizados

### JavaScript

- Use ES6+ syntax
- Siga o padrão de módulos
- Documente funções com JSDoc
- Trate erros adequadamente

## 🔒 Segurança

### Dados Sensíveis

- **NUNCA** adicione arquivos `.env` ao controle de versão
- Use `.gitignore` para garantir que arquivos sensíveis não sejam commitados
- Mantenha suas chaves de API e credenciais em variáveis de ambiente

### Validação

- Valide todas as entradas do usuário no cliente e no servidor
- Use as regras de segurança do Firestore
- Implemente validação de dados no frontend e backend

### Atualizações

- Mantenha todas as dependências atualizadas
- Monitore vulnerabilidades conhecidas nas dependências
- Revise regularmente as permissões de acesso ao Firebase

## 🌐 Firebase

### Configuração

1. **Variáveis de Ambiente**:
   - As configurações do Firebase devem ser armazenadas em variáveis de ambiente
   - Consulte o arquivo `.env.example` para ver as variáveis necessárias

2. **Segurança**:
   - Todas as regras de segurança são gerenciadas diretamente no Console do Firebase
   - Consulte a documentação oficial do Firebase para melhores práticas de segurança

3. **Estrutura de Dados**:
   - A estrutura de dados é gerenciada pelo Firebase Firestore
   - Consulte a documentação do projeto para entender a estrutura atual

### Boas Práticas

- Nunca exponha chaves de API ou credenciais no código-fonte
- Sempre use as regras de segurança do Firebase para proteger seus dados
- Mantenha as dependências do Firebase atualizadas

## 🐛 Reportando Problemas

Ao reportar um bug, por favor inclua:

1. Descrição detalhada do problema
2. Passos para reproduzir
3. Comportamento esperado vs. atual
4. Capturas de tela se aplicável
5. Navegador e versão

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.txt](LICENSE.txt) para detalhes.

## 🔐 Informações Sensíveis

Se você encontrar alguma credencial ou informação sensível neste repositório, por favor:

1. **Não a utilize**
2. Reporte imediatamente para a equipe de segurança
3. Remova qualquer cópia local da informação sensível

---

Atualizado em: Julho de 2025
