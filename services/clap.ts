import { PageClap, PageClapInsert } from '../types/database'
import { supabase } from './supabase'

async function getPageClap(slug: string): Promise<PageClap | null> {
  const { data, error } = await supabase
    .from('page_claps')
    .select()
    .eq('slug', slug)
    .single()
  
  if (error) return undefined
  return data
}

async function incrementClap(slug: string): Promise<void> {
  const { error } = await supabase.rpc('increment_clap', { slug_param: slug })

  if (error) throw error
}

async function createPageClap(pageClap: PageClapInsert): Promise<PageClap> {
  const { data, error } = await supabase
    .from('page_claps')
    .insert(pageClap)
    .single()

  if (error) throw error
  
  return data as PageClap
}

export { createPageClap, getPageClap, incrementClap }
