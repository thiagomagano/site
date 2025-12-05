import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { apiClient } from '$lib/api/client.js';
import { normalizeStack } from '$lib/utils/projects';

export const load: PageServerLoad = async ({ params, cookies, locals }) => {
  // Check authentication
  if (!locals.authenticated) {
    throw redirect(302, '/login');
  }

  try {
    // Load project data for editing
    const project = await apiClient.get(`/projects/${params.id}`, {}, cookies as any);
    return { project };
  } catch (err) {
    console.error('Erro ao carregar projeto para edição:', err);
    throw error(404, 'Projeto não encontrado');
  }
};

export const actions: Actions = {
  updateProject: async ({ request, params, cookies }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const subtitle = formData.get('subtitle');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');
    const link = formData.get('link');
    const github = formData.get('github');

    const stackRaw = formData.get('stack');
    const stack = JSON.parse(stackRaw as string);
    // Normalizar para simple-icons
    const normalizedStack = normalizeStack(stack);

    // Basic validation
    if (!title || typeof title !== 'string' || title.trim() === '') {
      return {
        success: false,
        message: 'Título é obrigatório'
      };
    }

    try {
      const res = await apiClient.put(
        `/projects/${params.id}`,
        {
          title,
          subtitle,
          description,
          imageUrl,
          link: link && typeof link === 'string' && link.trim() ? `https://${link}` : null,
          github:
            github && typeof github === 'string' && github.trim()
              ? `https://github.com/thiagomagano/${github}`
              : null,
          stack: normalizedStack
        },
        {},
        cookies as any
      );

      return {
        response: res,
        success: true,
        message: 'Projeto atualizado com sucesso!'
      };
    } catch (error) {
      console.error('Erro ao atualizar projeto: ', error);
      return {
        success: false,
        message: (error as any)?.data?.message || 'Erro ao atualizar projeto',
        error
      };
    }
  }
};
