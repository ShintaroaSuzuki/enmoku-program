import { supabase } from './supabaseClient'

type Questionnaire = {
  ts: Date;
  ip: string;
  questionnaire: {title: string; answer: string[]}[]
}

type Access = {
  ts: Date;
  ip: string;
  action: 'view' | 'click';
  category: string;
  label: string;
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
  if (error) {
    console.log(error)
    return
  }
  return data
}

export const sendAccessData = async ({ ts, ip, action, category, label }: Access) => {
  const { data, error } = await supabase
    .from('access')
    .insert([
      {
        ts,
        ip,
        action,
        category,
        label
      }
    ])
  if (error) {
    console.log(error)
    return
  }
  return data
}
