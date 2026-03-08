import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { z } from 'zod'

const inquirySchema = z.object({
  company_name: z.string().min(1),
  contact_name: z.string().optional(),
  email: z.string().email(),
  website: z.string().optional(),
  description: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = inquirySchema.parse(body)
    
    const { data, error } = await supabase
      .from('provider_inquiries')
      .insert({ ...validated, status: 'pending' })
      .select()
      .single()
    
    if (error) throw error
    
    return NextResponse.json({ success: true, inquiry: data }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 })
  }
}
