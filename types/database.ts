export interface Database {
  public: {
    Tables: {
      page_claps: {
        Row: {
          id: string
          slug: string
          clap_count: number
          last_clapped_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          clap_count?: number
          last_clapped_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          clap_count?: number
          last_clapped_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Functions: {
      increment_clap: {
        Args: { slug_param: string }
        Returns: undefined
      }
    }
  }
}

export type PageClap = Database['public']['Tables']['page_claps']['Row']
export type PageClapInsert = Database['public']['Tables']['page_claps']['Insert']
export type PageClapUpdate = Database['public']['Tables']['page_claps']['Update']