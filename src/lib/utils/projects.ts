/**
 * Normaliza o nome de uma tecnologia para o formato usado pelo simple-icons
 * @param name - Nome da tecnologia a ser normalizado
 * @returns Nome normalizado para uso com simple-icons
 */
export function normalizeSimpleIcon(name: string): string {
	const mapping: Record<string, string> = {
		node: 'nodedotjs',
		nodejs: 'nodedotjs',
		js: 'javascript',
		ts: 'typescript',
		tailwind: 'tailwindcss',
		pb: 'pocketbase',
		mongo: 'mongodb',
		postgres: 'postgresql'
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

/**
 * Normaliza o nome de um arquivo de acordo com seu titulo
 * @param projectTitle - Titulo do projeto
 * @param filename - Nome original do arquivo que foi uplodado.
 * @returns Nome do arquivo normalizado para usar como dado "imageUrl" no banco.
 */
export function normalizeUploadImage(projectTitle: string, filename: string): string | null {
	if (!projectTitle || !filename) return null;

	const normalizedTitle = projectTitle.trim().toLowerCase().replaceAll(' ', '-');
	const extension = filename.slice(filename.lastIndexOf('.'));

	return normalizedTitle + extension;
}
