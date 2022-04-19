import { HTMLInputTypeAttribute } from "react"

export type Props = {
  items: QA[]
}

type NotEmptyArray<T> = [T, ...T[]]

export type QuestionType = 'select' | 'textarea' | 'input'

export type QA = {
  title: string;
  required: boolean;
  questionType: QuestionType;
  answer: string[];
  multi?: boolean;
  choices?: Choice[];
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
}

export type Choice = {
  value: string;
  questions?: QAs; 
}

export type QAs = NotEmptyArray<QA>
