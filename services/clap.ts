import { PageClap, PageClapInsert } from '../types/database'
import { supabase } from './supabase'

async function getAllClaps(): Promise<PageClap[]> {
  const { data, error } = await supabase
    .from('page_claps')
    .select()

  if (error) return []

  return data
}

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

async function checkAndCreatePageClap(slug: string): Promise<boolean> {
  const { data } = await supabase
    .from('page_claps')
    .select()
    .eq('slug', slug)
    .single()

  if (data) return false

  await createPageClap({ slug, clap_count: 0 })

  return true
}

export { checkAndCreatePageClap, createPageClap, getAllClaps, getPageClap, incrementClap }

