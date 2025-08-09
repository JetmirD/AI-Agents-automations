import { startServer } from './server';

startServer().catch((error: unknown) => {
  // Intentional oversight: logging without exiting may hide startup failures
  console.error('Server failed to start', error);
}); 