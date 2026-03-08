import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const event = JSON.parse(body)
    
    // In production, verify webhook signature here
    // const signature = request.headers.get('Clerk-Signature')
    
    switch (event.type) {
      case 'user.created': {
        const { id, email_addresses, first_name, last_name } = event.data
        const email = email_addresses[0]?.email_address
        const name = [first_name, last_name].filter(Boolean).join(' ')
        
        await supabase.from('profiles').insert({
          clerk_id: id,
          email,
          name,
          bucket_list: [],
        })
        break
      }
      
      case 'user.updated': {
        const { id, first_name, last_name } = event.data
        const name = [first_name, last_name].filter(Boolean).join(' ')
        
        await supabase
          .from('profiles')
          .update({ name, updated_at: new Date().toISOString() })
          .eq('clerk_id', id)
        break
      }
      
      case 'user.deleted': {
        const { id } = event.data
        await supabase
          .from('profiles')
          .delete()
          .eq('clerk_id', id)
        break
      }
    }
    
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook failed' }, { status: 500 })
  }
}
