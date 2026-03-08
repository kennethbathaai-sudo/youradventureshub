import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { supabase } from '@/lib/supabase'

// GET bucket list
export async function GET() {
  const { userId } = auth()
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('bucket_list')
    .eq('clerk_id', userId)
    .single()

  const bucketList = profile?.bucket_list || []

  // Get adventure details
  const { data: adventures } = await supabase
    .from('adventures')
    .select('*')
    .in('id', bucketList)

  return NextResponse.json({ bucket_list: adventures || [] })
}

// ADD to bucket list
export async function POST(request: NextRequest) {
  const { userId } = auth()
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { adventure_id } = await request.json()

  const { data: profile } = await supabase
    .from('profiles')
    .select('bucket_list')
    .eq('clerk_id', userId)
    .single()

  const bucketList = profile?.bucket_list || []
  if (!bucketList.includes(adventure_id)) {
    bucketList.push(adventure_id)
    await supabase
      .from('profiles')
      .update({ bucket_list: bucketList })
      .eq('clerk_id', userId)
  }

  return NextResponse.json({ success: true, bucket_list: bucketList })
}

// REMOVE from bucket list
export async function DELETE(request: NextRequest) {
  const { userId } = auth()
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { adventure_id } = await request.json()

  const { data: profile } = await supabase
    .from('profiles')
    .select('bucket_list')
    .eq('clerk_id', userId)
    .single()

  const bucketList = (profile?.bucket_list || []).filter((id: string) => id !== adventure_id)
  await supabase
    .from('profiles')
    .update({ bucket_list: bucketList })
    .eq('clerk_id', userId)

  return NextResponse.json({ success: true, bucket_list: bucketList })
}
