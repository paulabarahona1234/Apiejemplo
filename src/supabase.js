import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://okrttnlzjqjnruatqtea.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rcnR0bmx6anFqbnJ1YXRxdGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODAzOTYsImV4cCI6MjA2MzI1NjM5Nn0.rhaSpAvQGDa_F219k02RIvFyB5tU8O6g_yGQdxkam8s';
export const supabase = createClient(supabaseUrl, supabaseKey);