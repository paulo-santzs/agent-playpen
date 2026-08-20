export type Tool = 'files' | 'network' | 'shell'
export type Policy = Record<Tool, boolean>
export type Decision = 'PERMITIDO' | 'BLOQUEADO'
export function decide(policy: Policy, tool: Tool): Decision { return policy[tool] ? 'PERMITIDO' : 'BLOQUEADO' }
