import { supabase } from './supabaseClient'

type Questionnaire = {
  ts: Date;
  ip: string;
  questionnaire: {title: string; answer: string[]}[]
}

export const sendQuestionnaireData = async ({ ts, ip, questionnaire }: Questionnaire) => {
  const { data, error } = await supabase
    .from('answer')
    .insert([
      {
        ts,
        ip,
        questionnaire
      }
    ])
  if (error) return 
  return data
}
