import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';
import koLocale from 'date-fns/locale/ko';
import { ApolloError } from '@apollo/react-hooks';

export function formatDate(date?: Date): string | undefined {
  if (!date) return;
  const d = new Date(date);
  const now = Date.now();
  const diff = now - new Date(date).getTime();
  // less than 5 minutes
  if (diff < 1000 * 60 * 5) {
    return '방금 전';
  }
  if (diff < 1000 * 60 * 60 * 24) {
    return distanceInWordsToNow(d, { addSuffix: true, locale: koLocale });
  }
  if (diff < 1000 * 60 * 60 * 36) {
    return '어제';
  }
  if (diff < 1000 * 60 * 60 * 24 * 7) {
    return distanceInWordsToNow(d, { addSuffix: true, locale: koLocale });
  }
  return format(d, 'yyyy년 M월 d일');
}

export function normalizedInputCheck(input: string): boolean {
  return input.replace(/(\s*)/gi, '') ? true : false;
}

export function normalizedInputChange(input: string): string {
  return input.replace(/(\s*)/gi, '');
}

export function getRandomInt(min: number, max: number): number {
  const resultMin = Math.ceil(min);
  const resultMax = Math.floor(max);
  return Math.floor(Math.random() * (resultMax - resultMin)) + resultMin; //최댓값은 제외, 최솟값은 포함
}

export function getErrorCode(error: ApolloError): number {
  if (error.networkError) {
    return 500;
  }
  if (!error.networkError) {
    return 404;
  }
  return 404;
}
