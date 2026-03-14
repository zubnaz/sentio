import type { MoodType } from '../types/chat';

const moodKeywords: Record<MoodType, string[]> = {
  happy: ['happy', 'excited', 'great', 'awesome', 'wonderful', 'щасливий', 'радісний'],
  sad: ['sad', 'tired', 'upset', 'depressed', 'сумно', 'погано', 'втомився'],
  angry: ['angry', 'mad', 'frustrated', 'annoyed', 'злий', 'бісить'],
  smile: ['good', 'nice', 'pleased', 'класно', 'приємно'],
  friendly: ['calm', 'normal', 'ok', 'добре', 'нормально'],
  neutral: ['neutral', 'ordinary', 'usual', 'standard', 'звичайно', 'нормально', 'байдуже'],
  thinks: ['thinking', 'considering', 'wondering', 'analyzing', 'думати', 'розмірковувати', 'цікавлюсь']
};

const moodPriority: MoodType[] = ['happy', 'sad', 'angry', 'smile', 'friendly','neutral', 'thinks'];

export function detectMood(message: string): MoodType {
  const normalizedMessage = message
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .trim();

  if (!normalizedMessage) {
    return 'friendly';
  }

  const tokens = new Set(normalizedMessage.split(/\s+/));

  for (const mood of moodPriority) {
    const matched = moodKeywords[mood].some((keyword) => {
      if (keyword.includes(' ')) {
        return normalizedMessage.includes(keyword);
      }

      return tokens.has(keyword);
    });

    if (matched) {
      return mood;
    }
  }

  return 'friendly';
}
