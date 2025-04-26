import { NextResponse } from 'next/server';

const mockUsers = [
  { id: 1, email: 'maxwell.carter@example.com', name: 'Maxwell Carter', isActive: true },
  { id: 2, email: 'smith@example.com', name: 'Olivia Smith', isActive: true },
  { id: 3, email: 'ethan@example.com', name: 'Ethan Johnson', isActive: false },
  { id: 4, email: 'sophiawill@example.com', name: 'Sophia Williams', isActive: false },
  { id: 5, email: 'liambrown@example.com', name: 'Liam Brown', isActive: false },
];



export async function GET() {
  return NextResponse.json(mockUsers);
}