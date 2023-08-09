import { validate } from './features/Form';

const formModel = {
  firstName: {
    cols: { xs: 12, md: 5 },
    name: 'firstName',
    label: 'First Name',
    validator: validate.string().required('Required field'),
  },
  lastName: {
    cols: { xs: 12, md: 5 },
    name: 'lastName',
    label: 'Last Name',
    validator: validate.string().required('Required field'),
  },
  middleInitial: {
    cols: { xs: 12, md: 2 },
    name: 'middleInitial',
    label: 'MI',
  },
  emailAddress: {
    cols: { xs: 12, md: 12 },
    name: 'emailAddress',
    label: 'Email Address',
    validator: validate
      .string()
      .email('Invalid email address')
      .required('Required field'),
  },
  agree: {
    name: 'agree',
    label: 'I trigger a conditional field',
  },
  condtionalField: {
    cols: { xs: 12, md: 12 },
    name: 'condtionalField',
    label: 'Conditional Field',
    showIf: ['agree', true],
    validator: validate.string().when('agree', {
      is: true,
      then: () => validate.string().required('Required field'),
    }),
  },
};

export default formModel;
