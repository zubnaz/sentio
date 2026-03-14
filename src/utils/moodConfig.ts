import angryImage from '../images/angry.png';
import friendlyImage from '../images/friendly.png';
import happyImage from '../images/happy.png';
import sadImage from '../images/sad.png';
import smileImage from '../images/smile.png';
import neutralImage from '../images/neutral.png';
import thinksImage from '../images/thinks.png';
import type { MoodType } from '../types/chat';

export const defaultMood: MoodType = 'friendly';

export const moodImageMap: Record<MoodType, string> = {
  happy: happyImage,
  sad: sadImage,
  angry: angryImage,
  smile: smileImage,
  friendly: friendlyImage,
  neutral: neutralImage,
  thinks: thinksImage
};


