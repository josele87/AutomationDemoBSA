import {faker} from '@faker-js/faker'

export const generateUserData = () => {
    const email = faker.internet.email();
    const password = addNumberToPassword(faker.internet.password());
  
    return {
      email,
      password,
    };
  };
  
  const addNumberToPassword = (password) => {
    const randomNumber = faker.datatype.number({ min: 0, max: 9 });
    const passwordWithNumber = password + randomNumber;
  
    return passwordWithNumber;
};