import { reactive } from 'vue';

export function useResourceLoader() {
  const state = reactive({
    progress: 0,
    message: 'Loading Experience',
    currentTask: 'Initializing...',
    isComplete: false
  });

  const resources = [
    { name: 'fonts', weight: 15 },
    { name: 'components', weight: 20 },
    { name: 'modules', weight: 15 },
    { name: 'assets', weight: 20 },
    { name: 'data', weight: 15 },
    { name: 'interface', weight: 15 }
  ];

  async function loadResource(resource) {
    return new Promise((resolve) => {
      // Simular tiempo de carga variable
      const loadTime = Math.random() * 500 + 300;
      setTimeout(resolve, loadTime);
    });
  }

  async function loadAll(onProgress) {
    let totalProgress = 0;

    for (const resource of resources) {
      const taskMessages = {
        fonts: { message: 'Loading Experience', task: 'Loading fonts...' },
        components: { message: 'Loading Experience', task: 'Preparing components...' },
        modules: { message: 'Setting Up', task: 'Configuring modules...' },
        assets: { message: 'Setting Up', task: 'Loading assets...' },
        data: { message: 'Almost Ready', task: 'Loading data...' },
        interface: { message: 'Almost Ready', task: 'Initializing interface...' }
      };

      state.message = taskMessages[resource.name].message;
      state.currentTask = taskMessages[resource.name].task;

      await loadResource(resource);

      totalProgress += resource.weight;
      state.progress = totalProgress;

      if (onProgress) {
        onProgress(state);
      }
    }

    state.message = 'Ready';
    state.currentTask = 'Complete!';
    state.progress = 100;
    state.isComplete = true;

    if (onProgress) {
      onProgress(state);
    }
  }

  return {
    state,
    loadAll
  };
}
