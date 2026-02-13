import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend clients
  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Proxy /api/* requests to Core Backend
  app.use('/api', createProxyMiddleware({ 
    target: process.env.CORE_SERVICE_URL || 'http://core-backend:8080', 
    changeOrigin: true,
    pathRewrite: {
      // Keep /api prefix if Core Backend expects it, or remove if it doesn't.
      // Assuming Core Backend has context-path / or handles /api
      // If Core Backend is Spring Boot with server.servlet.context-path=/api, keep it.
      // If Core Backend is root, we might want: '^/api': ''
      // For now, let's assume Core Backend handles /api/v1/...
    },
  }));

  // Proxy /ai/* requests to AI Engine
  app.use('/ai', createProxyMiddleware({ 
    target: process.env.AI_SERVICE_URL || 'http://ai-engine:8000', 
    changeOrigin: true,
    pathRewrite: {
       '^/ai': '', // Remove /ai prefix when forwarding to FastAPI (e.g. /ai/query -> /query)
    },
  }));

  await app.listen(3000);
  console.log(`API Gateway is running on: ${await app.getUrl()}`);
}
bootstrap();

