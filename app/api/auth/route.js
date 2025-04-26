import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  // Mock authentication
  if (email === 'admin@example.com' && password === 'admin123') {
    return NextResponse.json({
      success: true,
      token: 'mock-admin-token',
      role: 'admin',
      email,
    });
  } else if (email === 'user@example.com' && password === 'user123') {
    return NextResponse.json({
      success: true,
      token: 'mock-user-token',
      role: 'user',
      email,
    });
  }

  return NextResponse.json(
    { success: false, message: 'Invalid credentials' },
    { status: 401 }
  );
}