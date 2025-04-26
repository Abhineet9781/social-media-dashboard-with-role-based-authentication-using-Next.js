import { NextResponse } from 'next/server';

const mockUsers = [
  { id: 1, email: 'admin@example.com', role: 'admin', isActive: true },
  { id: 2, email: 'user1@example.com', role: 'user', isActive: true },
  { id: 3, email: 'user2@example.com', role: 'user', isActive: false },
];

export async function GET() {
  return NextResponse.json(mockUsers);
}