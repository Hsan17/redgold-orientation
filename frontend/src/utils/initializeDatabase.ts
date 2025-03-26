
import { supabase, TABLES } from '@/lib/supabase';
import { UniversityService, sampleData } from '@/services/university';
import { toast } from '@/components/ui/use-toast';

async function createTables() {
  console.log('Creating Supabase tables if they don\'t exist...');
  
  // Create universities table
  const { error: uniError } = await supabase.rpc('create_table_if_not_exists', {
    table_name: TABLES.UNIVERSITIES,
    column_definitions: `
      id text primary key,
      name text not null,
      location text not null,
      region text not null,
      programs jsonb not null,
      "employmentRate" integer not null,
      specializations jsonb not null,
      rating numeric not null,
      image text not null,
      international boolean
    `
  });
  
  if (uniError) {
    console.error('Error creating universities table:', uniError);
    // Fallback: Try direct SQL if RPC fails
    await createTableWithSQL(TABLES.UNIVERSITIES, `
      CREATE TABLE IF NOT EXISTS public.${TABLES.UNIVERSITIES} (
        id text primary key,
        name text not null,
        location text not null,
        region text not null,
        programs jsonb not null,
        "employmentRate" integer not null,
        specializations jsonb not null,
        rating numeric not null,
        image text not null,
        international boolean
      );
    `);
  }
  
  // Create scholarships table
  const { error: schError } = await supabase.rpc('create_table_if_not_exists', {
    table_name: TABLES.SCHOLARSHIPS,
    column_definitions: `
      id text primary key,
      name text not null,
      country text not null,
      amount text not null,
      requirements jsonb not null,
      deadline text not null,
      link text not null
    `
  });
  
  if (schError) {
    console.error('Error creating scholarships table:', schError);
    // Fallback: Try direct SQL
    await createTableWithSQL(TABLES.SCHOLARSHIPS, `
      CREATE TABLE IF NOT EXISTS public.${TABLES.SCHOLARSHIPS} (
        id text primary key,
        name text not null,
        country text not null,
        amount text not null,
        requirements jsonb not null,
        deadline text not null,
        link text not null
      );
    `);
  }
  
  // Create admission criteria table
  const { error: admError } = await supabase.rpc('create_table_if_not_exists', {
    table_name: TABLES.ADMISSION_CRITERIA,
    column_definitions: `
      id text primary key,
      university text not null,
      department text not null,
      program text not null,
      section text not null,
      "minimumScore" numeric not null,
      "keySubjectsWeights" jsonb not null,
      "acceptanceRate" integer not null,
      year integer not null
    `
  });
  
  if (admError) {
    console.error('Error creating admission criteria table:', admError);
    // Fallback: Try direct SQL
    await createTableWithSQL(TABLES.ADMISSION_CRITERIA, `
      CREATE TABLE IF NOT EXISTS public.${TABLES.ADMISSION_CRITERIA} (
        id text primary key,
        university text not null,
        department text not null,
        program text not null,
        section text not null,
        "minimumScore" numeric not null,
        "keySubjectsWeights" jsonb not null,
        "acceptanceRate" integer not null,
        year integer not null
      );
    `);
  }
}

async function createTableWithSQL(tableName: string, sql: string) {
  try {
    const { error } = await supabase.rpc('execute_sql', { sql_query: sql });
    if (error) throw error;
    console.log(`Created table ${tableName} with direct SQL`);
    return true;
  } catch (error) {
    console.error(`Fallback SQL creation for ${tableName} failed:`, error);
    return false;
  }
}

export async function initializeSupabaseDatabase() {
  console.log('Initializing Supabase database with sample data...');
  
  try {
    // First create tables if they don't exist
    await createTables();
    
    // Then initialize with sample data
    await UniversityService.initializeDatabase();
    
    console.log('Database initialization completed successfully!');
    toast({
      title: "Base de données initialisée",
      description: "Les tables et données ont été créées dans Supabase.",
    });
    
    return true;
  } catch (error) {
    console.error('Failed to initialize database:', error);
    toast({
      title: "Erreur d'initialisation",
      description: "Un problème est survenu lors de l'initialisation de la base de données.",
      variant: "destructive"
    });
    return false;
  }
}
