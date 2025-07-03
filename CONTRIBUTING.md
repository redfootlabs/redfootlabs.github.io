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

1. Crie uma branch para sua feature/correção:

   ```bash
   git checkout -b feature/nome-da-feature
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

3. Envie as alterações para o repositório remoto:

   ```bash
   git push origin feature/nome-da-feature
   ```

4. Abra um Pull Request para revisão

## 🔥 Estrutura de Pastas

```txt
├── index.html          # Página inicial
├── login.html          # Página de autenticação
├── dashboard.html      # Painel administrativo
├── forms-cadastro-orcamento.html  # Formulário de orçamentos
├── firebase.js         # Configuração do Firebase
├── firestoreService.js # Serviços do Firestore
├── resources/          # Recursos estáticos (imagens, ícones, etc.)
└── CONTRIBUTING.md     # Este arquivo
```

## 🎨 Padrões de Código

### HTML

- Sempre use HTML semântico
- Use indentação de 4 espaços
- Atributos em ordem alfabética
- Use aspas duplas para atributos

### CSS

- Use nomes descritivos para classes (BEM methodology)
- Organize as propriedades em ordem alfabética
- Comente seções importantes

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
