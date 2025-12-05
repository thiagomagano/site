/**
 * Normaliza o nome de uma tecnologia para o formato usado pelo simple-icons
 * @param name - Nome da tecnologia a ser normalizado
 * @returns Nome normalizado para uso com simple-icons
 */
export function normalizeSimpleIcon(name: string): string {
  const mapping: Record<string, string> = {
    node: 'nodedotjs',
    js: 'javascript',
    ts: 'typescript',
    express: 'express',
    react: 'react',
    svelte: 'svelte',
    tailwind: 'tailwindcss',
    laravel: 'laravel',
    pocketbase: 'pocketbase',
    mongo: 'mongodb',
    mysql: 'mysql',
    postgres: 'postgresql',
    prisma: 'prisma',
    bun: 'bun',
    hetzner: 'hetzner',
    astro: 'astro',
    sqlite: 'sqlite',
    drizzle: 'drizzle',
    vercel: 'vercel',
    go: 'go',
    c: 'c',
    html: 'html',
    css: 'css'
  };

  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  return mapping[normalized] ?? normalized;
}

/**
 * Normaliza um array de tecnologias para o formato usado pelo simple-icons
 * @param stack - Array de nomes de tecnologias
 * @returns Array de nomes normalizados
 */
export function normalizeStack(stack: string[]): string[] {
  return stack.map(normalizeSimpleIcon);
}

