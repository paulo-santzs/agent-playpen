# Agent Playpen
Laboratório visual para entender políticas de ferramentas em agentes de IA. Configure acesso a arquivos, rede e shell; depois simule ações e observe decisões registradas.

**Demo:** [paulo-santzs.github.io/agent-playpen](https://paulo-santzs.github.io/agent-playpen/)

```bash
npm install
npm run dev
```

## Segurança
O MVP é apenas uma simulação no navegador: nenhum comando, arquivo ou acesso de rede é executado pelos cenários. Não é uma sandbox de produção.

React + TypeScript + Vite. Licença MIT.

O motor de decisão é isolado e testado: cada cenário consulta a mesma política explícita antes de registrar uma ação.

## Modelo de decisão

Cada cenário declara uma capacidade (`files`, `network` ou `shell`). A política funciona como uma lista de permissões explícita: se a capacidade estiver habilitada, a simulação registra `PERMITIDO`; caso contrário, registra `BLOQUEADO`. O Playpen não executa a ação, não acessa arquivos e não faz chamadas de rede.
