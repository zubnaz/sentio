import angryImage from '../images/angry.png';
import friendlyImage from '../images/friendly.png';
import happyImage from '../images/happy.png';
import sadImage from '../images/sad.png';
import smileImage from '../images/smile.png';
import type { MoodType } from '../types/chat';

export const defaultMood: MoodType = 'friendly';

export const moodImageMap: Record<MoodType, string> = {
  happy: happyImage,
  sad: sadImage,
  angry: angryImage,
  smile: smileImage,
  friendly: friendlyImage,
};

export const moodReplies: Record<MoodType, string> = {
  happy: 'It sounds like you are feeling joyful today 😊',
  sad: 'I hear you. Today may have been tough, and I am here for you 💙',
  angry: 'It seems like there is some tension. Let us take a slow breath together 🌿',
  smile: 'I am happy to hear your mood feels pleasant. Keep it up ✨',
  friendly: 'Thanks for sharing. I am here to listen 🤍',
};
