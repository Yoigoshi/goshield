import { createError, defineEventHandler, readBody } from 'h3';

// Define the interface for incoming request payload
interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
}

export default defineEventHandler(async (event) => {
  // Read body from incoming POST request
  const body = await readBody<ContactRequestBody>(event);
  const { name, email, message } = body;

  // Simulate network latency (1.5 seconds delay) for UX/loading feedback demonstration
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Server-side strict validations (QA best practices demonstration)
  if (!name?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      data: { message: 'Server-side validation failed: Name is empty.' },
    });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      data: { message: 'Server-side validation failed: Email format is invalid.' },
    });
  }

  if (!message || message.trim().length < 10) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      data: {
        message: 'Server-side validation failed: Message must be at least 10 characters long.',
      },
    });
  }

  // Demonstration feature: inputting a specific email simulates a system transmission error
  if (email === 'error@goshield.com') {
    throw createError({
      statusCode: 503,
      statusMessage: 'Service Unavailable',
      data: { message: 'Simulated infrastructure transmission failure (Service Unavailable).' },
    });
  }

  // Return success response to the client
  return {
    success: true,
    message: 'Secure handshake initialized. Sandbox tenant deployment scheduled successfully.',
    timestamp: new Date().toISOString(),
  };
});
