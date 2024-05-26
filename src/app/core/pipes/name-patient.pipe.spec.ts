import { NamePatientPipe } from './name-patient.pipe';

describe('NamePatientPipe', () => {
  it('create an instance', () => {
    const pipe = new NamePatientPipe();
    expect(pipe).toBeTruthy();
  });
});
