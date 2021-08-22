import { REGEXP_EMAIL } from '../../api/constants/validation';

export const validateEmail = (trialEmail: string) => {
  if (!trialEmail.trim()) {
    throw new Error('Email field must be filled!');
  }
  const checkRegexp = trialEmail.match(REGEXP_EMAIL);
  if (!checkRegexp) {
    throw new Error('Email must be like name@gmail.com!');
  }
};
