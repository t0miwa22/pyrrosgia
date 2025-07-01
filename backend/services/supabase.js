import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tqjsocguhqjofywqtgys.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function saveToSupabase(data) {
  const { error } = await supabase
    .from('"Pyrrsogaia contacts"') // ✅ exact name with quotes
    .insert([data])

  if (error) throw error
}

export default { saveToSupabase }
